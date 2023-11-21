import { Link } from "react-router-dom";
import GalleryHeader from "./GalleryHeader";
import Painting from "../../../data/paintings-bg.png";
import Container from "../Container";
import GalleryFooter from "./GalleryFooter";
import GalleryItems from "./GalleryItems";
const Gallery = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Painting})` }}
      className="mt-16 pt-10 pb-4"
    >
      <Container>
        <GalleryHeader />
        <GalleryItems />
        <GalleryFooter />
        <div className="mt-8 text-center">
          <Link className=" text-primaryColor">View All 500 Works</Link>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
