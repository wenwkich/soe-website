import { useContext } from "react"
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";
import { HeaderButton } from "./common";

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 10%;
`;

export const Header = () => {
  const { 
    showBack, 
    showQnA, 
    goBack, 
    goToQnA
  } = useContext(AppContext); 

  return (
    <HeaderWrapper>
      { showBack && <HeaderButton onClick={(e) => goBack()}>bacc</HeaderButton> }
      { showQnA && <HeaderButton onClick={(e) => goToQnA()}>?</HeaderButton> }
    </HeaderWrapper>
  )
}