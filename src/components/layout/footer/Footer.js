import React from "react";

import {
  FooterStyle,
  FooterBar,
  ServicesList,
  List1,
  List2,
  List3
} from "./Footer.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Footer = () => {
  return (
    <FooterStyle>
      <Logo img="https://ik.imagekit.io/ppayaz/ppayaz-website/Captura_de_Pantalla_2021-11-09_a_la_s__15.29.02_OJrQih9Bau.png?updatedAt=1636468167564" />
      <FooterBar />
      <ServicesList>
        <List1>
          <ul>Encontre imóveis</ul>
          <ul>Venda</ul>
          <ul>Aluguel</ul>
          <ul>Lançamentos</ul>
          <ul>Alugar imóvel barato</ul>
          <ul>Comprar imóvel barato</ul>
          <ul>Financiamento Imobiliário</ul>
        </List1>
        <List2>
          <ul>Anuncie imóveis</ul>
          <ul>ZAP Pro</ul>
          <ul>ZAP Estima</ul>
          <ul>Planos de Anúncio</ul>
          <ul>Política de Qualidade</ul>
          <ul>Venda seu Imóvel</ul>
        </List2>
        <List3>
          <ul>Institucional</ul>
          <ul>Quem somos</ul>
          <ul>Trabalhe conosco</ul>
        </List3>
      </ServicesList>
    </FooterStyle>
  );
};
export default Footer;
