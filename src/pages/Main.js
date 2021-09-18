import { Slider } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react"
import styled from "styled-components";
import { OutlinedButton } from "../components/common";
import { AppContext } from "../contexts/AppContext";
import { useTokenMetadata } from "../hooks/useTokenMetadata";

export const Main = () => {

  const [ tokenId, setTokenId ] = useState(0);
  const [ tmpTokenId, setTmpTokenId ] = useState(0);
  const [ tokenMetadata, setTokenMetadata ] = useState({});
  const { goToMint, goToChange } = useContext(AppContext);
  const getTokenMetadata = useTokenMetadata();

  useEffect(() => {
    getTokenMetadata(tokenId).then((data) => setTokenMetadata({...data}));
  }, [tokenId]);

  return (
    <MainWrapper>
      <img src={tokenMetadata.image} alt="SOE" width={400} height={400} />
      <Slider
        defaultValue={0}
        sx={{
          width: 300,
          color: '#000',
        }}
        step={1}
        min={0}
        max={41}
        valueLabelDisplay="auto"
        onChange={(e, val) => setTmpTokenId(val)}
        onChangeCommitted={(e) => setTokenId(tmpTokenId)}
      />
      <div>SoE #{tokenId} immutable</div>
      <div>owned by: {tokenMetadata.owner}</div>
      <div>message: "{tokenMetadata.name}"</div>
      <OptionsWrapper>
        <OptionButton>view on opensea</OptionButton>
        <OptionButton onClick={(e) => goToMint(2)}>mint</OptionButton>
        <OptionButton onClick={(e) => goToChange(2)}>change message</OptionButton>
      </OptionsWrapper>
    </MainWrapper>
  )
}

const OptionButton = styled(OutlinedButton)`
  min-width: 25%;
`;

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

  @media (max-width: 763px) {
    & {
      flex-direction: column;
      align-items: space-around;
    }

    ${OptionButton} {
      margin-bottom: 8px;
    }
}
`;