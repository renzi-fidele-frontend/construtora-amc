"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { ReactNode } from "react";

const MapProvider = ({ children }: { children: ReactNode }) => {
   return <APIProvider apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)}>{children}</APIProvider>;
};
export default MapProvider;
