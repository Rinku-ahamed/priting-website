import BiographyBox from "../components/Biography/BiographyBox";
import BannerContent from "../components/Home/BannerContent";
import BannerRight from "../components/Home/BannerRight";
import Container from "../components/common/Container";
import useGetBiography from "../hooks/useGetBiography";
const Biography = () => {
  const { biography } = useGetBiography();
  console.log(biography?.data.works);
  return (
    <section>
      <Container>
        <div className="md:flex justify-between md:px-10 gap-4 mb-8">
          <div className="md:w-5/12 bg-[#857055] pt-6">
            <BannerRight image={biography?.data?.biography?.image} />
          </div>
          <div className="md:w-6/12 pt-4">
            <h2 className="uppercase text-3xl text-white border-b-[6px] pb-2 mb-4">
              Biography
            </h2>
            <BannerContent biographyData={biography?.data?.biography} />
          </div>
        </div>
      </Container>
      <div className="bg-[#c7b299] py-8">
        <Container>
          <h2 className="uppercase text-3xl text-primaryColor mb-2">WORKS</h2>
          {biography?.data.works.slice(0, 3).map((item) => (
            <BiographyBox
              key={item?.id}
              image={item?.image}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default Biography;
