import Container from "../components/common/Container";
import Item from "../components/common/Gallery/Item";
import Painting from "../data/paintings-bg.png";
import CompletedWorkHeader from "../components/CompletedWork/CompletedWorkHeader";
import CompletedWorkFooter from "../components/CompletedWork/CompletedWorkFooter";
import useGetAllPainting from "../hooks/useGetAllPainting";
const CompletedWorks = () => {
  const { paintings } = useGetAllPainting();
  return (
    <section
      style={{ backgroundImage: `url(${Painting})` }}
      className="mt-16 pt-10 pb-4"
    >
      <Container>
        <CompletedWorkHeader />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
          {paintings?.data?.map(({ slug, image }) => (
            <Item key={slug} image={image} slug={slug} />
          ))}
        </div>
        <CompletedWorkFooter />
      </Container>
    </section>
  );
};

export default CompletedWorks;
