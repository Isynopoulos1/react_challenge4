import React from "react";

//IMPORT STYLES
import { HeaderContainer, MenuLink, Menu } from "./Header.styles";

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
          Compra{" "}
        </MenuLink>
        <MenuLink href="https://www.zapimoveis.com.br/venda/">
          {" "}
          Compra{" "}
        </MenuLink>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
