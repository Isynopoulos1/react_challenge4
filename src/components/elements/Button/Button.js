import React from "react";
import PropTypes from "prop-types";

import { BtnNav, BtnBack, IconStyle } from "./Button.styles";

const Button = ({ icon, icon2 }) => {
  return (
    <BtnNav>
      <BtnBack>
        <IconStyle>{icon}</IconStyle>
      </BtnBack>
      <BtnBack>
        <IconStyle>{icon2}</IconStyle>
      </BtnBack>
    </BtnNav>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  icon2: PropTypes.string
};

Button.defaultProps = {
  icon: "people",
  icon2: "people"
};

export default Button;
