import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES
import { ItemsWrapper, ItemsTittle, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

const Items = ({ list }) => {
  console.log(list);

  return (
    <ItemsWrapper>
      <ItemsTittle>Últimos imóveis vistos por você</ItemsTittle>
      <Cards>
        <Card
          image={list[0].image}
          price={list[0].price}
          detail={list[0].detail}
          title={list[0].title}
        />
        <Card
          image={list[1].image}
          price={list[1].price}
          detail={list[1].detail}
          title={list[1].title}
        />
        <Card
          image={list[2].image}
          price={list[2].price}
          detail={list[2].detail}
          title={list[2].title}
        />
        <Card
          image={list[3].image}
          price={list[3].price}
          detail={list[3].detail}
          title={list[3].title}
        />
      </Cards>
      <Slider icon="chevron_left" icon2="chevron_right" />
      {/* <ItemsTittle>
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
      <Slider icon="chevron_left" icon2="chevron_right" /> */}
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
