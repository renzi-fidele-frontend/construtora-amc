"use client";
import useRoutesService from "@/hooks/useRoutesService";
import { IEmpreendimento, ILugar } from "@/types/types";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { useState } from "react";
import MarkerWithInfoWindow from "./MarkerWithInfoWindow";

const Mapa = ({ empreendimento }: { empreendimento: IEmpreendimento }) => {
   const [localizacaoDoUsuario, setLocalizacao] = useState<ILugar>();
   const { directionsService, directionsRenderer } = useRoutesService();
   // TODO: Mais tarde renderizar os detalhes do caminho até o empreendimento
   const [caminho, setCaminho] = useState<google.maps.DirectionsResult>();
   const map = useMap();

   // TODO: Encontrar a localizacao do usuario apos se iniciar a busca pelo destino do empreendimento
   function encontrarLocalizacaoDoUsuario() {
      // Apanhando as cooordenadas do usuário
      navigator.geolocation.getCurrentPosition(
         async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setLocalizacao({ lat, lng });
         },
         (error) => {
            console.log("Erro ao obter a localização do usuário");
         },
      );
   }

   // TODO: Adicionar a funcionalidade de encontrar o caminho até o empreendimento
   async function encontrarDirecao(destino: ILugar) {
      if (localizacaoDoUsuario) {
         await directionsService.route(
            {
               origin: localizacaoDoUsuario,
               destination: destino,
               travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
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
            },
         );
      }
   }

   return (
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
      </Map>
   );
};
export default Mapa;
