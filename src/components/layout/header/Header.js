import React from "react";
//IMPORT STYLES
import {
  HeaderContainer,
  HeaderLink,
  HeaderList,
  AnunciarLink,
  Anunciar,
  EntrarLink,
  Entrar
} from "./Header.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Header = () => {
  const links = [
    {
      url: "https://www.zapimoveis.com.br/venda/",
      name: "Compra"
    },
    {
      url: "https://www.zapimoveis.com.br/aluguel/",
      name: "Aluguel"
    },
    {
      url: "https://www.zapimoveis.com.br/venda/",
      name: "Lançamentos"
    },
    {
      url: "https://www.zapimoveis.com.br/venda/",
      name: "  Descobrir"
    },
    {
      url: "https://www.zapimoveis.com.br/venda/",
      name: "  Central de ajuda"
    }
  ];

  const mappedLinks = links.map(link => {
    return (
      <HeaderLink key={link.name} href={link.url}>
        {link.name}
      </HeaderLink>
    );
  });

  return (
    <HeaderContainer>
      <Logo img="https://ik.imagekit.io/ppayaz/react_challenge3/Captura_de_Pantalla_2021-11-03_a_la_s__15.39.40_u9wrlw2jsY.png?updatedAt=1635950522411" />
      <HeaderList>
        {mappedLinks}
        <AnunciarLink>
          <Anunciar href="https://www.zapimoveis.com.br/venda/">
            Anunciar imóveis
          </Anunciar>
        </AnunciarLink>
        <EntrarLink>
          <Entrar href="https://www.zapimoveis.com.br/venda/">
            Entrar ou cadastrar
          </Entrar>
        </EntrarLink>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
