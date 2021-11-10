import React from "react";

//IMPORT STYLES
import { MainContainer, Tittle, MainText, Subtext } from "./Main.styles";

//IMPORT COMPONENTS
import Items from "../../elements/Items/Items";

const Main = () => {
  const list1 = [
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/bench-accounting-nvzvOPQW0gc-unsplash_l7BgEkVcT.jpeg?updatedAt=1636128123237",
      title: "Aldus PageMaker",
      price: 312340,
      detail: "30m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/kam-idris-_HqHX3LBN18-unsplash_maHESzct_.jpeg?updatedAt=1636407336870",
      title: "Richard McClintock",
      price: 93889,
      detail: "37m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/sven-brandsma-GmRiN7tVW1w-unsplash_NwgTrwvGXA.jpeg?updatedAt=1636407346133",
      title: "Malorum",
      price: 34546,
      detail: "80m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/andy-art-zwZpdhoTbU0-unsplash_bQYE-PLO7.jpeg?updatedAt=1636407272596",
      title: "Cicero",
      price: 204973,
      detail: "34m²"
    }
  ];

  const list2 = [
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/amira-aboalnaga-f9O-1eKGlQM-unsplash_ScFr8tYxj.jpeg?updatedAt=1636128128331",
      title: "Finibus Bonorum ",
      price: 12123,
      detail: "40m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/naomi-hebert-2dcYhvbHV-M-unsplash_2w9hxAmOkj.jpeg?updatedAt=1636128134208",
      title: "H. Rackham",
      price: 76469,
      detail: "30m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/francesca-tosolini-w1RE0lBbREo-unsplash_P0aVWLYt9.jpeg?updatedAt=1636407263250",
      title: "Renaissance",
      price: 17743,
      detail: "20m²"
    },
    {
      image:
        "https://ik.imagekit.io/ppayaz/react_challenge3/kara-eads-L7EwHkq1B2s-unsplash_tvjB5Fvc6.jpeg?updatedAt=1636128030456",
      title: "Aldus",
      price: 709623,
      detail: "35m²"
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
      <Items list={list1} />
      <Items list={list2} />
    </main>
  );
};

export default Main;
