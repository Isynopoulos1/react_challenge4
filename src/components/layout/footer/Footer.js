import React from "react";

import { FooterStyle, FooterBar, ServicesList, List } from "./Footer.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Footer = () => {
  return (
    <FooterStyle>
      <Logo img="https://ik.imagekit.io/ppayaz/ppayaz-website/Captura_de_Pantalla_2021-11-09_a_la_s__15.29.02_OJrQih9Bau.png?updatedAt=1636468167564" />
      <FooterBar />
      <ServicesList>
        <List>
          <li>Encontre imóveis</li>
          <li>Venda</li>
          <li>Aluguel</li>
          <li>Lançamentos</li>
          <li>Alugar imóvel barato</li>
          <li>Comprar imóvel barato</li>
          <li>Financiamento Imobiliário</li>
        </List>
        <List>
          <li>Anuncie imóveis</li>
          <li>ZAP Pro</li>
          <li>ZAP Estima</li>
          <li>Planos de Anúncio</li>
          <li>Política de Qualidade</li>
          <li>Venda seu Imóvel</li>
        </List>
        <List>
          <li>Institucional</li>
          <li>Quem somos</li>
          <li>Trabalhe conosco</li>
        </List>
      </ServicesList>
    </FooterStyle>
  );
};
export default Footer;
