import { Slider } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import styled from "styled-components";
import { OutlinedButton, Link } from "../components/common";
import { CONTRACT_ADDRESS, DEFAULT_SVG, TOKEN_STATUS_TO_COLOR } from "../constants";
import { AppContext } from "../contexts/AppContext";
import { Web3Context } from "../contexts/Web3Context";
import { useTokenMetadata } from "../hooks/useTokenMetadata";

export const Main = () => {

  const [ tokenId, setTokenId ] = useState(0);
  const [ tmpTokenId, setTmpTokenId ] = useState(0);
  const [ tokenMetadata, setTokenMetadata ] = useState({});
  const { goToMint, goToChange } = useContext(AppContext);
  const { blockNumber, } = useContext(Web3Context);
  const getTokenMetadata = useTokenMetadata();
  const [ loading, setLoading ] = useState(true);

  const contractAddress = CONTRACT_ADDRESS;

  const handleErr = (err) => {
    console.error(err);
  }

  useEffect(() => {
    setLoading(true);
    getTokenMetadata(tokenId, handleErr).then((data) => {
    setTokenMetadata({...data});
    setLoading(false);
    });
  }, [tokenId, getTokenMetadata, setTokenMetadata, setLoading, blockNumber]);

  const tsToStr = (ts) => {
    let date = new Date(ts * 1000).toUTCString();
    if (date === "Invalid Date") return "TBA";
    date = date.substr(0, date.length - 4);
    return `${date} UTC`;
  }

  return (
    <MainWrapper>
      <img src={tokenMetadata.image || DEFAULT_SVG} alt="SOE" width={400} height={400} />
      <Slider
        defaultValue={0}
        sx={{
          width: 400,
          color: '#000',
        }}
        step={1}
        min={0}
        max={41}
        valueLabelDisplay="auto"
        onChange={(e, val) => setTmpTokenId(val)}
        onChangeCommitted={(e) => setTokenId(tmpTokenId)}
      />
      <div>SoE #{tokenId}   
        <span 
          style={{color: TOKEN_STATUS_TO_COLOR[tokenMetadata.status] || "#000"}}
        > { loading ? "..." : tokenMetadata.status }</span>
      </div>
      <div>owned by: {loading ? "..." : tokenMetadata.owner || "null"}</div>
      { tokenMetadata.isMinted ? 
        <Message>message: "{loading ? "..." : tokenMetadata.name}"</Message> :
        <div>mint start time: {loading ? "..." : tsToStr(tokenMetadata.saleStartTime)}</div>
      }
      <OptionsWrapper>
        <OptionButton><Link href={`https://opensea.io/assets/${contractAddress}/${tokenId}`} target="_blank">view on opensea</Link></OptionButton>
        <OptionButton disabled={loading || tokenMetadata.isMinted} onClick={(e) => goToMint(tokenId)}>mint</OptionButton>
        <OptionButton onClick={(e) => goToChange(tokenId)}>change message</OptionButton>
      </OptionsWrapper>
    </MainWrapper>
  )
}

const Message = styled.div`
  max-width: 700px;
  overflow-wrap: break-word;
  text-align: center;
`;

const OptionButton = styled(OutlinedButton)`
  min-width: 25%;

  &[disabled]
  {
    pointer-events: none;
    opacity: 0.7;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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