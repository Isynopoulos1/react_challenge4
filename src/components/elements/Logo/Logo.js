import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { LogoImg2 } from "./Logo.styles";

const Logo = ({ img }) => {
  return <LogoImg2 src={img} alt="logo2" />;
};

Logo.propTypes = {
  img: PropTypes.string
};

Logo.defaultProps = {
  img: ""
};

export default Logo;
