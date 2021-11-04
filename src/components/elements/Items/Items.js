import React from "react";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";

const Items = () => {
  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Card />
    </ItemsWrapper>
  );
};

export default Items;
