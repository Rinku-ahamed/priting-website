import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BaseURL } from "../../../config/helpers";
const Item = ({ slug, image }) => {
  return (
    <Link to={`/painting-single/${slug}`}>
      <div
        className="border border-primaryColor
    sm:h-[240px] h-[170px] rounded bg-[#e2e2c7]"
      >
        <img
          src={`${BaseURL}/${image}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

Item.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
