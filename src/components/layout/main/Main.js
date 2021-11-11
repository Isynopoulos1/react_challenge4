import React from "react";

//IMPORT STYLES
import { MainContainer, Tittle, MainText, Subtext } from "./Main.styles";

//IMPORT COMPONENTS
import Items from "../../elements/Items/Items";

// IMPORT DATA
import { list1, list2 } from "../../data/cards";

const Main = () => {
  return (
    <main>
      <MainContainer
        style={{
          backgroundImage: `url(${"https://ik.imagekit.io/ppayaz/react_challenge3/Captura_de_Pantalla_2021-11-02_a_la_s__20.36.44_uw6lbXAhzU.png?updatedAt=1635882277616"})`
        }}
      >
        <Tittle>
          <MainText>ZAP Recomenda =)</MainText>
          <Subtext>
            Volte sempre e confira as melhores ofertas e novidades do ZAP para
            você!
          </Subtext>
        </Tittle>
      </MainContainer>
      <Items list={list1} />
      <Items list={list2} />
    </main>
  );
};

export default Main;
