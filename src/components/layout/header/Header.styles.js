import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%px;
  box-shadow: 0 2px 8px 0 #ccc;
  margin: 0px;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  a:hover {
    color: #6e0ad6;
    transition: color 0.5s;
  }
`;

export const HeaderLink = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 24px;
  font-family: helvetica;
  color: #6f6f6f;
  line-height: 2.2;
`;
export const AnunciarLink = styled.div`
  position: relative;
  background-color: #6e0ad6;
  height: 100%;
  padding: 12px;
  a:hover {
    color: white;
    transition: color 0.5s;
  }
`;

export const Anunciar = styled.a`
  color: white;
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  margin-right: 10px;
  font-family: helvetica;
  line-height: 2.2;
`;
export const EntrarLink = styled.div`
  position: relative;
  background-color: white;
  height: 100%;
  padding: 12px;
  a:hover {
    color: #8d29f5;
    transition: color 0.5s;
  }
`;

export const Entrar = styled.a`
  color: #6e0ad6;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  font-family: helvetica;
  margin-right: 24px;
`;
