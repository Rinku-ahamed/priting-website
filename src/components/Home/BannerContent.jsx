import { Link } from "react-router-dom";
import Button from "../common/Button";
import PropTypes from "prop-types";
const BannerContent = ({ biographyData }) => {
  return (
    <>
      <h2 className="text-white text-3xl mb-6">{biographyData?.name}</h2>
      <p className="text-slate-200 leading-8 font-normal mb-6">
        {biographyData?.description}
      </p>
      <Link to="/biography">
        <Button buttonTxt="CLICK HERE FOR MORE" />
      </Link>
    </>
  );
};

BannerContent.propTypes = {
  biographyData: PropTypes.any,
};
export default BannerContent;
