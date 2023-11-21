import PropTypes from "prop-types";
import { BaseURL } from "../../config/helpers";
const BiographyBox = ({ image, title, description }) => {
  return (
    <div className="md:flex mb-10">
      <div className="md:w-7/12 border-t-4 border-textColor pe-10 pt-5">
        <h2 className="text-xl mb-4 uppercase">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="md:w-5/12">
        <img src={`${BaseURL}/${image}`} alt="" />
      </div>
    </div>
  );
};

BiographyBox.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BiographyBox;
