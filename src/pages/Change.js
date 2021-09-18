import { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { OutlinedButton } from "../components/common";
import { AppContext } from "../contexts/AppContext";
import { useGenSvg } from "../hooks/useGenSvg";
import { useTokenMetadata } from "../hooks/useTokenMetadata";

export const Change = () => {

  const [ message, setMessage ] = useState("");
  const [ image, setImage ] = useState();
  const { tokenId } = useContext(AppContext);
  const [ tokenMetadata, setTokenMetadata ] = useState({});
  const getTokenMetadata = useTokenMetadata();
  const [txMessage, setTxMessage] = useState("no warnings available");
  const genSvg = useGenSvg();

  useEffect(() => {
    genSvg(message).then(({ image }) => setImage(image));
  }, [message]);

  useEffect(() => {
    getTokenMetadata(tokenId).then((data) => {
      setTokenMetadata({ ...data });
      setMessage(data.name);
      setImage(data.image);
    });

  }, [tokenId]);

  // TODO handle mint
  const handleChange = () => {
    console.log(message);
    console.log(tokenId);
  }

  const handleChangeToImmutable = () => {
    console.log(message);
    console.log(tokenId);
  }

  return (
    <MintWrapper>
      <div>type your message: </div>
      <Input value={message} cols="40" rows="5" onChange={(e) => setMessage(e.target.value)} />
      <img src={image} alt="SOE" width={400} height={400} />
      <OptionsWrapper>
        <OptionButton onClick={(e) => handleChange()}>spend {tokenMetadata.mutablePrice} eth to change</OptionButton>
        <OptionButton onClick={(e) => handleChangeToImmutable()}>spend {tokenMetadata.immutablePrice} eth to make immutable</OptionButton>
      </OptionsWrapper>
      <div style={{ color: "#DE9300" }}>{txMessage}</div>
    </MintWrapper>
  )
}

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