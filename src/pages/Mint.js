import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { OutlinedButton } from "../components/common";
import { DEFAULT_SVG } from "../constants";
import { AppContext } from "../contexts/AppContext";
import { useGenSvg } from "../hooks/useGenSvg";
import { useOperations } from "../hooks/useOperations";

export const Mint = () => {

  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState(DEFAULT_SVG);
  const { tokenId } = useContext(AppContext);
  const genSvg = useGenSvg();
  const [ txMessage, setTxMessage ] = useState("no warnings available");
  const { mintSignature } = useOperations();

  useEffect(() => {
    genSvg(message).then(({ image }) => setImage(image));
  }, [message, genSvg]);

  const handleErr = (err) => {
    const errRegex = /"message":\s?"(.*?)"/i;
    const match = err.message.match(errRegex);
    console.log(match)
    if (match) {
      setTxMessage(match[1]);
    }
  }

  return (
    <MintWrapper>
      <div>SoE #{tokenId}</div>
      <div>type your message: </div>
      <Input cols="40" rows="5" onChange={(e) => setMessage(e.target.value)}/>
      <img src={image} alt="SOE" width={300} height={300} />
      <OptionsWrapper>
        <OptionButton 
          onClick={(e) => mintSignature(
            tokenId, 
            message, 
            handleErr,
            () => setTxMessage("successful"),
            () => setTxMessage("loading")
          )}
        >mint for FREE</OptionButton>
      </OptionsWrapper>
      <TxMessage style={{ color: "#DE9300" }}>{txMessage}</TxMessage>
    </MintWrapper>
  )
}

const TxMessage = styled.div`
  max-width: 700px;
  overflow-wrap: break-word;
  text-align: center;
`;

const Input = styled.textarea`
  margin-top: 10px;
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