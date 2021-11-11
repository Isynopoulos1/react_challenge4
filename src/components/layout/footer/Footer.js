import React from "react";

import { FooterStyle, FooterBar, ServicesList, List } from "./Footer.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Footer = () => {
  const columns = {
    column1: [
      "Encontre imóveis",
      "Venda",
      "Aluguel",
      "Lançamentos",
      "Alugar imóvel barato",
      "Comprar imóvel barato",
      "Financiamento Imobiliário"
    ],
    column2: [
      "Anuncie imóveis",
      "ZAP Pro",
      "ZAP Estima",
      "Planos de Anúncio",
      "Política de Qualidade",
      "Venda seu Imóvel"
    ],
    column3: ["Institucional", "Quem somos", "Trabalhe conosco"]
  };

  const mappedColumn1 = columns.column1.map(service => {
    return <li key={service}>{service}</li>;
  });

  const mappedColumn2 = columns.column2.map(service => {
    return <li key={service}>{service}</li>;
  });

  const mappedColumn3 = columns.column3.map(service => {
    return <li key={service}>{service}</li>;
  });

  return (
    <FooterStyle>
      <Logo img="https://ik.imagekit.io/ppayaz/ppayaz-website/Captura_de_Pantalla_2021-11-09_a_la_s__15.29.02_OJrQih9Bau.png?updatedAt=1636468167564" />
      <FooterBar />
      <ServicesList>
        <List>{mappedColumn1}</List>
        <List>{mappedColumn2}</List>
        <List>{mappedColumn3}</List>
      </ServicesList>
    </FooterStyle>
  );
};
export default Footer;
