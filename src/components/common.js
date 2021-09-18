import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;

  &:hover {
    color: #666;
  }
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
`;

export const HeaderButton = Button;