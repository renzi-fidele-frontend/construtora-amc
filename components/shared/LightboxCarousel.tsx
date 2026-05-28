"use client";

import "yet-another-react-lightbox/styles.css";
// Plugins
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

const LightBoxCarousel = ({ fotos }: { fotos: string[] }) => {
   return (
      <Lightbox
         slides={fotos?.map((foto) => {
            return { src: foto };
         })}
         inline={{}}
         plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
   );
};
export default LightBoxCarousel;
