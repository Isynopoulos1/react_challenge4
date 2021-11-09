import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import {
  CardImage,
  CardWrapper,
  Tittle,
  Price,
  Details,
  Icon
} from "./Card.styles";

const Card = ({ image, type, value, title }) => {
  return (
    <CardWrapper>
      <CardImage src={image} />
      <Tittle>
        <p>{title}</p>
      </Tittle>
      <Price>
        <p>{type}</p>
      </Price>
      <Details>
        <span>{value}</span>
      </Details>
      <Icon>favorite_border</Icon>
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
