import PropTypes from "prop-types";
const SingleBox = ({ title, text }) => {
  return (
    <div className="flex gap-6">
      <h2 className="w-3/12">{text}</h2>
      <p className="w-9/12">: {title}</p>
    </div>
  );
};

SingleBox.propTypes = {
  title: PropTypes.any,
  text: PropTypes.string,
};

export default SingleBox;
