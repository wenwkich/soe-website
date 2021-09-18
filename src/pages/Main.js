import { useContext } from "react"
import styled from "styled-components";
import { OptionButton } from "../components/common";
import { AppContext } from "../contexts/AppContext";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: space-around;
    }

    ${OptionButton} {
      margin-bottom: 8px;
    }
}
`;

export const Main = () => {
  const { goToMint, goToChange } = useContext(AppContext);
  return (
    <MainWrapper>
      <div>image</div>
      <div>scroll bar</div>
      <div>name immutable</div>
      <div>owned by: 0x</div>
      <div>message: "we are"</div>
      <OptionsWrapper>
        <OptionButton>view on opensea</OptionButton>
        <OptionButton onClick={(e) => goToMint(2)}>mint</OptionButton>
        <OptionButton onClick={(e) => goToChange(2)}>change message</OptionButton>
      </OptionsWrapper>
    </MainWrapper>
  )
}