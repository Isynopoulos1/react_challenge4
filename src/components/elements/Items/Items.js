import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";

const Items = () => {
  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Cards>
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237"
          type="PRICE"
          value="44 m2  1 quarto 1 vago"
          title="TITTLE"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/amira-aboalnaga-f9O-1eKGlQM-unsplash_ScFr8tYxj.jpeg?updatedAt=1636128128331"
          type="jaja"
          value="bubu"
          title="blabla"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/naomi-hebert-2dcYhvbHV-M-unsplash_2w9hxAmOkj.jpeg?updatedAt=1636128134208"
          type="jaja"
          value="bubu"
          title="blabla"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/kara-eads-L7EwHkq1B2s-unsplash_tvjB5Fvc6.jpeg?updatedAt=1636128030456"
          type="jaja"
          value="bubu"
          title="blabla"
        />
      </Cards>
    </ItemsWrapper>
  );
};

export default Items;
