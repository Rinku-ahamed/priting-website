import useGetBiography from "../../hooks/useGetBiography";
import Container from "../common/Container";
import BannerContent from "./BannerContent";
import BannerRight from "./BannerRight";
const Banner = () => {
  const { biography } = useGetBiography();
  return (
    <Container>
      <div className="md:flex justify-between md:px-10 gap-4">
        <div className="md:w-6/12 pt-4 mb-7 md:mb-0">
          <BannerContent biographyData={biography?.data?.biography} />
        </div>
        <div className="md:w-5/12 bg-[#857055] pt-6">
          <BannerRight image={biography?.data?.biography?.image} />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
