import { useEffect, useState } from "react";
import styled from "styled-components"
import { OutlinedButton } from "../components/common";
import { useGenSvg } from "../hooks/useGenSvg";

export const Mint = () => {

  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState();
  const genSvg = useGenSvg();

  useEffect(() => {
    genSvg(message).then(({ image }) => setImage(image));
  }, [message]);

  // TODO handle mint
  const handleMint = () => {
    console.log(message);
  }

  return (
    <MintWrapper>
      <div>type your message: </div>
      <Input cols="40" rows="5" onChange={(e) => setMessage(e.target.value)}/>
      <img src={image} alt="SOE" width={400} height={400} />
      <OptionsWrapper>
        <OptionButton onClick={(e) => handleMint()}>mint for FREE</OptionButton>
      </OptionsWrapper>
    </MintWrapper>
  )
}

const Input = styled.textarea`
  padding: 10px;
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