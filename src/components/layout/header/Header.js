import React from "react";

//IMPORT STYLES
import {
  HeaderContainer,
  MenuLink,
  Menu,
  AnunciarLink,
  Anunciar,
  EntrarLink,
  Entrar
} from "./Header.styles";

//IMPORT COMPONENTS
import Logo from "../../elements/Logo/Logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Compra{" "}
        </MenuLink>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Aluguel{" "}
        </MenuLink>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Lançamentos{" "}
        </MenuLink>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Descobrir{" "}
        </MenuLink>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Central de ajuda{" "}
        </MenuLink>
        <AnunciarLink>
          <Anunciar href="https://www.zapimoveis.com.br/venda/">
            {" "}
            Anunciar imóveis{" "}
          </Anunciar>
        </AnunciarLink>
        <EntrarLink>
          <Entrar href="https://www.zapimoveis.com.br/venda/">
            {" "}
            Entrar ou cadastrar{" "}
          </Entrar>
        </EntrarLink>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
