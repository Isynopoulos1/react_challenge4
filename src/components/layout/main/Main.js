import React from "react";

//IMPORT STYLES
import { MainContainer, Tittle, MainText, Subtext } from "./Main.styles";

//IMPORT COMPONENTS
import Items from "../../elements/Items/Items";

const Main = () => {
  const appartments = [
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237",
      title: "sfkhjaf",
      price: 12123,
      detail: "asfasf"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237",
      title: "sfkhjaf",
      price: 12123,
      detail: "asfasf"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237",
      title: "sfkhjaf",
      price: 12123,
      detail: "asfasf"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237",
      title: "sfkhjaf",
      price: 12123,
      detail: "asfasf"
    }
  ];

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
      <Items />
    </main>
  );
};

export default Main;
