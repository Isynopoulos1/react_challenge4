import React from "react";
import PropTypes from "prop-types";

import {
  BtnNav,
  BtnBack,
  IconStyle,
  IconStyle2,
  BtnNext
} from "./Slider.styles";

const Slider = ({ icon, icon2 }) => {
  return (
    <BtnNav>
      <BtnBack>
        <IconStyle>{icon}</IconStyle>
      </BtnBack>
      <BtnNext>
        <IconStyle2>{icon2}</IconStyle2>
      </BtnNext>
    </BtnNav>
  );
};

Slider.propTypes = {
  icon: PropTypes.string,
  icon2: PropTypes.string
};

Slider.defaultProps = {
  icon: "people",
  icon2: "people"
};

export default Slider;
