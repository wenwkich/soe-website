import { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { OutlinedButton } from "../components/common";
import { AppContext } from "../contexts/AppContext";
import { useGenSvg } from "../hooks/useGenSvg";
import { useTokenMetadata } from "../hooks/useTokenMetadata";
import { ethers } from "ethers"; 
import { useOperations } from "../hooks/useOperations";
import { DEFAULT_SVG } from "../constants";

export const Change = () => {

  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState(DEFAULT_SVG);
  const { tokenId } = useContext(AppContext);
  const [ tokenMetadata, setTokenMetadata ] = useState({});
  const getTokenMetadata = useTokenMetadata();
  const [txMessage, setTxMessage] = useState("no warnings available");
  const genSvg = useGenSvg();
  const [ mutablePrice, setMutablePrice ] = useState(0);
  const [ immutablePrice, setImmutablePrice ] = useState(0);
  const { setTokenUri, setImmutableWithUri } = useOperations();

  useEffect(() => {
    genSvg(message).then(({ image }) => setImage(image));
  }, [message]);

  useEffect(() => {
    getTokenMetadata(tokenId).then((data) => {
      setTokenMetadata({ ...data });
      if (data.name) setMessage(data.name);
      if (data.image) setImage(data.image);
      if (data.mutablePrice) setMutablePrice(ethers.utils.formatEther(data.mutablePrice));
      if (data.immutablePrice) setImmutablePrice(ethers.utils.formatEther(data.immutablePrice));
    });

  }, [tokenId]);

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
      <div>type your message: </div>
      <Input value={message} cols="40" rows="5" onChange={(e) => setMessage(e.target.value)} />
      <img src={image} alt="SOE" width={400} height={400} />
      <OptionsWrapper>
        <OptionButton 
          onClick={(e) => setTokenUri(
            tokenId, 
            message, 
            tokenMetadata.mutablePrice, 
            handleErr
          )}
        >spend {mutablePrice} eth to change</OptionButton>
        <OptionButton 
          onClick={(e) => setImmutableWithUri(
            tokenId, 
            message, 
            tokenMetadata.immutablePrice, 
            handleErr
          )}
        >spend {immutablePrice} eth to make immutable</OptionButton>
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
  padding: 10px;
  max-width: 100%;
  resize: none;
`;

const MintWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionButton = styled(OutlinedButton)`
  width: 45%;
`;

  const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 763px) {
    & {
      flex-direction: column;
      align-items: center;
    }

    ${OptionButton} {
      margin-bottom: 8px;
    }
  }
`;