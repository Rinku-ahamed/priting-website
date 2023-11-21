import PropTypes from "prop-types";
import { BaseURL } from "../../config/helpers";
const BannerRight = ({ image }) => {
  return (
    <>
      <img src={`${BaseURL}/${image}`} alt="" />
      <p className="text-center bg-[#656565] text-white text-sm py-[3px]">
        www.nameofthewebsite.com
      </p>
    </>
  );
};

BannerRight.propTypes = {
  image: PropTypes.string,
};
export default BannerRight;
