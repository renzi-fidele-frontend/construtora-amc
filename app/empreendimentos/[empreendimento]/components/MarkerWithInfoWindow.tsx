"use client";
import { AdvancedMarker, InfoWindow, Pin, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { ILugar } from "@/types/types";

const MarkerWithInfoWindow = ({ position, titulo, endereco }: { position: ILugar; titulo: string; endereco: string }) => {
   const [markerRef, marker] = useAdvancedMarkerRef();
   const [infoWindowShown, setInfoWindowShown] = useState(false);

   return (
      <AdvancedMarker onClick={() => setInfoWindowShown((prevState) => !prevState)} position={position} ref={markerRef}>
         <Pin borderColor={"#000000ff"} glyphColor="black" />
         {infoWindowShown && (
            <InfoWindow
               headerContent={<h6 className="font-bold text-base/4">{titulo}</h6>}
               anchor={marker}
               onClose={() => setInfoWindowShown(false)}
            >
               <p className="mb-1">{endereco}</p>
            </InfoWindow>
         )}
      </AdvancedMarker>
   );
};
export default MarkerWithInfoWindow;
