import styled from "styled-components";

export const BtnNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  width: 990px;
  grid-gap: 10px;
  margin-top: 20px;
`;

export const BtnBack = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #b785eb;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;
export const BtnNext = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #6e0ad6;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #e5d8f3;
  }
`;

export const IconStyle = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b785eb;
  font-family: "Material Icons";
  font-size: 20px;
`;
export const IconStyle2 = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6e0ad6;
  font-family: "Material Icons";
  font-size: 20px;
`;
