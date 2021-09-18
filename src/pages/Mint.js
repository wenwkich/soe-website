import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { OutlinedButton } from "../components/common";
import { AppContext } from "../contexts/AppContext";
import { useGenSvg } from "../hooks/useGenSvg";

export const Mint = () => {

  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState();
  const { tokenId } = useContext(AppContext);
  const genSvg = useGenSvg();
  const [ txMessage, setTxMessage ] = useState("no warnings available");

  useEffect(() => {
    genSvg(message).then(({ image }) => setImage(image));
  }, [message]);

  // TODO handle mint
  const handleMint = () => {
    console.log(message);
    console.log(tokenId);
  }

  return (
    <MintWrapper>
      <div>type your message: </div>
      <Input cols="40" rows="5" onChange={(e) => setMessage(e.target.value)}/>
      <img src={image} alt="SOE" width={400} height={400} />
      <OptionsWrapper>
        <OptionButton onClick={(e) => handleMint()}>mint for FREE</OptionButton>
      </OptionsWrapper>
      <div style={{ color: "#DE9300" }}>{txMessage}</div>
    </MintWrapper>
  )
}

const Input = styled.textarea`
  padding: 10px;
  max-width: 95%;
  resize: none;
`;

const MintWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionButton = styled(OutlinedButton)`
  min-width: 50%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 763px) {
    & {
      flex-direction: column;
    }

    ${OptionButton} {
      margin-bottom: 8px;
    }
  }
`;