import React from "react";

import { FooterStyle, FooterBar } from "./Footer.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Footer = () => {
  return (
    <FooterStyle>
      <Logo img="https://ik.imagekit.io/ppayaz/ppayaz-website/Captura_de_Pantalla_2021-11-09_a_la_s__15.29.02_OJrQih9Bau.png?updatedAt=1636468167564" />
      <FooterBar />
    </FooterStyle>
  );
};
export default Footer;
