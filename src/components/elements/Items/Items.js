import React from "react";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";

const Items = () => {
  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </ItemsWrapper>
  );
};

export default Items;
