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
          image="https://ik.imagekit.io/ppayaz/react_challenge3/101eb50f9a678dec8855bb110ae0cb32_bZwG4eubn.jpg?updatedAt=1635950748422"
          type="jaja"
          value="bubu"
          title="blabla"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/101eb50f9a678dec8855bb110ae0cb32_bZwG4eubn.jpg?updatedAt=1635950748422"
          type="jaja"
          value="bubu"
          title="blabla"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/101eb50f9a678dec8855bb110ae0cb32_bZwG4eubn.jpg?updatedAt=1635950748422"
          type="jaja"
          value="bubu"
          title="blabla"
        />
        <Card
          image="https://ik.imagekit.io/ppayaz/react_challenge3/101eb50f9a678dec8855bb110ae0cb32_bZwG4eubn.jpg?updatedAt=1635950748422"
          type="jaja"
          value="bubu"
          title="blabla"
        />
      </Cards>
    </ItemsWrapper>
  );
};

export default Items;
