import React from "react";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

const Items = () => {
  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Cards>
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237"
          type="$1700"
          value="44 m2  1 quarto 1 vago"
          title="Lorem Ipsum"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/amira-aboalnaga-f9O-1eKGlQM-unsplash_ScFr8tYxj.jpeg?updatedAt=1636128128331"
          type="$5678"
          value="20 m2  1 quarto 1 vago"
          title="Aldus PageMaker"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/naomi-hebert-2dcYhvbHV-M-unsplash_2w9hxAmOkj.jpeg?updatedAt=1636128134208"
          type="$2300"
          value="30 m2  2 quarto 1 vago"
          title="Latin words"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/kara-eads-L7EwHkq1B2s-unsplash_tvjB5Fvc6.jpeg?updatedAt=1636128030456"
          type="$4300"
          value="40 m2  3 quarto 1 vago"
          title="Hampden-Sydney College"
        />
      </Cards>
      <Slider icon="chevron_left" icon2="chevron_right" />
      <ItemsTittle>
        Porque você navegou em apartamentos para aluguel com 1 quarto em São
        Paulo
      </ItemsTittle>
      <Cards>
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/francesca-tosolini-w1RE0lBbREo-unsplash_P0aVWLYt9.jpeg?updatedAt=1636407263250"
          type="$1700"
          value="44 m2  1 quarto 1 vago"
          title="Lorem Ipsum"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/andy-art-zwZpdhoTbU0-unsplash_bQYE-PLO7.jpeg?updatedAt=1636407272596"
          type="$5678"
          value="20 m2  1 quarto 1 vago"
          title="Aldus PageMaker"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/kam-idris-_HqHX3LBN18-unsplash_maHESzct_.jpeg?updatedAt=1636407336870"
          type="$2300"
          value="30 m2  2 quarto 1 vago"
          title="Latin words"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/sven-brandsma-GmRiN7tVW1w-unsplash_NwgTrwvGXA.jpeg?updatedAt=1636407346133"
          type="$4300"
          value="40 m2  3 quarto 1 vago"
          title="Hampden-Sydney College"
        />
      </Cards>
      <Slider icon="chevron_left" icon2="chevron_right" />
    </ItemsWrapper>
  );
};

export default Items;
