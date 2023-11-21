import PropTypes from "prop-types";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSingleImgOpen, setSingleImgOpen] = useState(false);
  const value = {
    isCollapse,
    setIsCollapse,
    isOpen,
    setIsOpen,
    isSingleImgOpen,
    setSingleImgOpen,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node,
};
export default ThemeProvider;
