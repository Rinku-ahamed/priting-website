import useGetAllPainting from "../../../hooks/useGetAllPainting";
import Item from "./Item";
const GalleryItems = () => {
  const { paintings } = useGetAllPainting();
  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {paintings?.data?.map(({ slug, image }) => (
          <Item key={slug} image={image} slug={slug} />
        ))}
      </div>
    </section>
  );
};

export default GalleryItems;
