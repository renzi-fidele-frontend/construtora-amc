"use client";
import useRoutesService from "@/hooks/useRoutesService";
import { IEmpreendimento, ILugar } from "@/types/types";
import { AdvancedMarker, Map, Pin, useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow";
import Btn from "@/components/shared/Btn";
import { MapPinPen } from "lucide-react";
import { toast } from "sonner";

const Mapa = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   const { directionsService, directionsRenderer } = useRoutesService();
   // TODO: Mais tarde renderizar os detalhes do caminho até o empreendimento
   const [caminho, setCaminho] = useState<google.maps.DirectionsResult>();
   const [localizacaoDoUser, setLocalizacaoDoUser] = useState<ILugar>();
   const [loadingCaminho, setLoadingCaminho] = useState(false);

   const map = useMap();

   function encontrarLocalizacaoDoUsuario() {
      return new Promise<ILugar>((resolve, reject) => {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const lat = position.coords.latitude;
               const lng = position.coords.longitude;
               if (!lat && !lng) {
                  reject(new Error("Localização do usuário é indisponível"));
               } else {
                  resolve({ lat, lng });
               }
            },
            (error) => {
               console.log("Erro ao obter a localização do usuário");
               reject(error);
            },
         );
      });
   }

   // TODO: Mostrar efeito de loading do cálculo da distância até o empreendimento
   // TODO: Mostrar o erro caso a distância até o empreendimento seja muito grande
   async function encontrarDirecao() {
      setLoadingCaminho(true);
      const userLocation = await encontrarLocalizacaoDoUsuario();
      if (userLocation) {
         setLocalizacaoDoUser(userLocation);
         await directionsService.route(
            {
               origin: userLocation,
               destination: empreendimento.detalhes.coordenadas,
               travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
               if (status === google.maps.DirectionsStatus.OK) {
                  directionsRenderer.setMap(map);
                  directionsRenderer.setDirections(result);
                  directionsRenderer.setOptions({
                     markerOptions: {
                        visible: false,
                     },
                     polylineOptions: {
                        strokeColor: "red",
                     },
                  });
                  if (result) setCaminho(result);
                  setLoadingCaminho(false);
               } else if (status === google.maps.DirectionsStatus.ZERO_RESULTS) {
                  toast.error("Você está muito distante do empreendimento, a localização está indisponível!");
                  setLoadingCaminho(false);
               }
            },
         );
      }
   }

   return (
      <>
         <Map
            mapId="d95c984c2c99e484fcaaf9b5"
            className="w-[70%] h-140!"
            defaultZoom={15}
            defaultCenter={empreendimento.detalhes.coordenadas}
            mapTypeId="hybrid"
         >
            {/* Ponteiro do empreedimento */}
            <MarkerWithInfoWindow
               titulo={empreendimento.nome}
               position={empreendimento.detalhes.coordenadas}
               endereco={empreendimento.detalhes.endereco_real}
            />

            {/* Ponteiro da localização do usuário */}
            {caminho && (
               <AdvancedMarker position={localizacaoDoUser}>
                  <Pin background={"#0f9d58"} borderColor={"#04959c"} glyphColor={"black"} />
               </AdvancedMarker>
            )}
         </Map>
         <div className="mt-7 w-fit" onClick={() => encontrarDirecao()}>
            <Btn className="flex items-center gap-3">
               <MapPinPen /> Traçar rota
            </Btn>
         </div>
      </>
   );
};
export default Mapa;
