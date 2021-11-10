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

const Card = ({ image, price, detail, title }) => {
  return (
    <CardWrapper>
      <CardImage src={image} />
      <Tittle>
        <p>{title}</p>
      </Tittle>
      <Price>
        <p>{price}</p>
      </Price>
      <Details>
        <span>{detail}</span>
      </Details>
      <Icon>favorite_border</Icon>
    </CardWrapper>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  price: PropTypes.string,
  detail: PropTypes.string,
  label: PropTypes.string
};

Card.defaultProps = {
  img: "",
  price: "",
  detail: "",
  label: ""
};

export default Card;
