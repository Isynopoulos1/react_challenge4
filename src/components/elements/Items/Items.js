import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

const Items = ({ list }) => {
  // MAPPED ELEMENTS
  const mappedList = list.map(card => (
    <Card
      key={card.image}
      image={card.image}
      price={card.price}
      detail={card.detail}
      title={card.title}
    />
  ));

  // RENDER
  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Cards>{mappedList}</Cards>
      <Slider icon="chevron_left" icon2="chevron_right" />
    </ItemsWrapper>
  );
};

Items.propTypes = {
  list: PropTypes.array
};

Items.defaultProps = {
  list: []
};

export default Items;
