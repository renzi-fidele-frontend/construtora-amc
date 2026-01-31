import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

/**
 * Hook que fornece um serviço para calcular rotas entre dois ou mais lugares
 * @returns A Classe DirectionsService e DirectionsRenderer do Routes Library.
 */
const useRoutesService = () => {
   const map = useMap();

   const routesLibrary = useMapsLibrary("routes");
   const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
   const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();

   useEffect(() => {
      if (!routesLibrary || !map) return;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDirectionsService(new routesLibrary.DirectionsService());
      setDirectionsRenderer(new routesLibrary.DirectionsRenderer());
   }, [map, routesLibrary]);
 

   return {
      directionsService: directionsService as google.maps.DirectionsService,
      directionsRenderer: directionsRenderer as google.maps.DirectionsRenderer,
   };
};
export default useRoutesService;
