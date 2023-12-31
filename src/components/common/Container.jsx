import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="mx-auto max-w-6xl px-4 md:px-0">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
