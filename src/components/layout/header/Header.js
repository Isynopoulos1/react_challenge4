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
  return (
    <HeaderContainer>
      <Logo />
      <HeaderList>
        <HeaderLink href="https://www.zapimoveis.com.br/venda/">
          Compra
        </HeaderLink>
        <HeaderLink href="https://www.zapimoveis.com.br/venda/">
          Aluguel
        </HeaderLink>
        <HeaderLink href="https://www.zapimoveis.com.br/venda/">
          Lançamentos
        </HeaderLink>
        <HeaderLink href="https://www.zapimoveis.com.br/venda/">
          Descobrir
        </HeaderLink>
        <HeaderLink href="https://www.zapimoveis.com.br/venda/">
          Central de ajuda
        </HeaderLink>
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
