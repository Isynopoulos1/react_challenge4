import React from "react";

//IMPORT STYLES
import {
  MainContainer,
  MainImg,
  Tittle,
  MainText,
  Subtext
} from "./Main.styles";

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
    </main>
  );
};

export default Main;
