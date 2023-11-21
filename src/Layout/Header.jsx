import HeaderMenu from "../components/Header/HeaderMenu";
import HeaderSlider from "../components/Header/HeaderSlider";
import SearchForm from "../components/Header/SearchForm";
import Container from "../components/common/Container";
import HeaderBg from "../data/top-banner.png";

const Header = () => {
  return (
    <header
      className="bg-cover h-[200px] z-10"
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <Container>
        <div className="relative top-10">
          <HeaderSlider />
          <div className="flex justify-between items-center absolute bottom-0 w-full bg-black bg-opacity-60 px-1 sm:px-6 py-4 md:py-6 z-10">
            <HeaderMenu />
            <SearchForm />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
