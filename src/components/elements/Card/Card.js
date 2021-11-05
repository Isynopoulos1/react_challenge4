import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { CardImage, CardWrapper } from "./Card.styles";

const Card = ({ image, type, value, title }) => {
  return (
    <CardWrapper>
      <CardImage src={image} />
      <h1>{title}</h1>
      <p>{type}</p>
      <span>{value}</span>
    </CardWrapper>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

Card.defaultProps = {
  img: "",
  type: "",
  value: "",
  label: ""
};

export default Card;
