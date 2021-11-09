import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 232px;
  height: 298px;
  margin-top: 50px;
  color: black;
  box-shadow: 0 2px 8px 0 #ccc;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 30%);
    transition: 0.5s;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 45%;
`;

export const Tittle = styled.h1`
  font-weight: normal;
  font-size: 16px;
  color: #444;
  font-family: helvetica;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: 10px;
`;
export const Price = styled.div`
  font-weight: 600;
  color: #444;
  font-size: 1.5rem;
  line-height: 1.33;
  font-family: helvetica;
  margin-left: 10px;
`;

export const Details = styled.div`
  font-weight: normal;
  color: #6f6f6f;
  font-size: 12px;
  font-family: helvetica;
  margin-left: 10px;
  margin-top: 30px;
`;

export const Icon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-family: "Material Icons";
  font-size: 24px;
`;
