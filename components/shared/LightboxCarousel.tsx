"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Plugins
import Inline from "yet-another-react-lightbox/plugins/inline";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const LightBoxCarousel = ({ fotos }: { fotos: string[] }) => {
   return (
      <Lightbox
         slides={fotos?.map((foto) => {
            return { src: foto };
         })}
         inline={{
            style: {
               width: "900px",
               maxWidth: "100%",
               aspectRatio: "4 / 3",
               margin: "0 auto",
               height: "650px",
            },
         }}
         plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
   );
};
export default LightBoxCarousel;
