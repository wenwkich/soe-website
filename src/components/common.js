import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;

  &:hover {
    color: #666;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const OutlinedButton = styled(Button)`
  cursor: pointer;
  border: 2px solid;
  padding: 4px 8px 4px 8px;
  border-radius: 5px;
  text-align: center;

  &:hover {
    color: #fff;
    border-color: #666;
    background-color: #666;
  }

  &:hover > ${Link} {
    color: #fff;
    border-color: #666;
    background-color: #666;
  }
`;

export const ImportantButton = styled(Button)`
  cursor: pointer;
  border: 2px solid;
  padding: 4px 8px 4px 8px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  border-color: #666;
  background-color: #666;
  width: 40%;

  &:hover {
    color: #fff;
    border-color: #333;
    background-color: #333;
  }

  &:hover > ${Link} {
    color: #fff;
    border-color: #333;
    background-color: #333;
  }
`;

export const HeaderButton = Button;