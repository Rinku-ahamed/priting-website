import { Link } from "react-router-dom";

import { FaPinterest, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import Container from "../components/common/Container";
import FooterBg from "../data/footer-bg.png";
import useGetSettingsData from "./../hooks/useGetSettingsData";
const Footer = () => {
  const { settings } = useGetSettingsData();
  return (
    <footer
      style={{ backgroundImage: `url(${FooterBg})` }}
      className="py-10 bg-cover bg-no-repeat border-t-8 border-primaryColor"
    >
      <Container>
        <div className="md:w-[270px] md:pe-8 md:ms-auto">
          <h2 className="text-2xl font-semibold text-primaryColor italic">
            Reza K. Chowdhury
          </h2>
          <p className="text-primaryColor text-[14px] font-light">
            The Complete Works
          </p>
          <div className="flex gap-2 mt-3">
            <Link
              to={settings?.data?.facebook}
              target="_blank"
              className="bg-blue-500 w-7 h-7 rounded-full flex items-center justify-center"
            >
              <FaFacebookF className="text-white text-[20px]" />
            </Link>
            <Link
              to="/"
              className="bg-[#ff4e00] w-7 h-7 rounded-full flex items-center justify-center"
            >
              <FaGooglePlusG className="text-white text-[20px]" />
            </Link>
            <Link
              to={settings?.data?.pinterest}
              target="_blank"
              className="bg-[#ca2127] w-7 h-7 rounded-full flex items-center justify-center"
            >
              <FaPinterest className="text-white text-[20px]" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
