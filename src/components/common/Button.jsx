import PropTypes from "prop-types";
const Button = ({ buttonTxt }) => {
  return (
    <button className="bg-primaryColor text-white px-5 pt-2 pb-1 rounded uppercase">
      {buttonTxt}
    </button>
  );
};

Button.propTypes = {
  buttonTxt: PropTypes.string,
};

export default Button;
