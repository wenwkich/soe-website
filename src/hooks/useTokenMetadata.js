import { useCallback, useContext } from "react";
import { TOKEN_STATUS } from "../constants";
import { Web3Context } from "../contexts/Web3Context"

export const useTokenMetadata = () => {

  const { contract } = useContext(Web3Context);

  // const getTokenUri = async (tokenId) => {
  //   return await contract.tokenURI(tokenId)
  // };

  const getOwner = async (tokenId) => {
    return "0x";
  }

  const getIsMinted = async (tokenId) => {
    return true;
  }

  const getIsImmutable = async (tokenId) => {
    return true;
  }

  const getStatus = async (tokenId) => {
    if (!getIsMinted(tokenId)) return TOKEN_STATUS.NOT_MINTED;
    if (getIsImmutable(tokenId)) return TOKEN_STATUS.IMMUTABLE;
    return TOKEN_STATUS.MUTABLE;
  }

  const getTokenUri = async (tokenId) => "data:application/json;base64,eyJuYW1lIjogIndlIGFyZSBnb25uYSBtYWtlIGl0IiwgImRlc2NyaXB0aW9uIjogIlNpZ25hdHVyZXMgb24gRXRoZXJldW0gYXJlIG11dGFibGUsIHNpZ25hdHVyZS1saWtlIE5GVHMgZ2VuZXJhdGVkIHdpdGggb3duZXIncyBpbnB1dCIsICJpbWFnZSI6ICJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOakF3SWlCb1pXbG5hSFE5SWpZd01DSWdkbWxsZDBKdmVEMGlNQ0F3SURZd01DQTJNREFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFNBeU1qVWdNekkxSUVNZ016VXdJREkxTUNBek5UQWdNekkxSURFM05TQXlOelVnVXlBek1qVWdNakkxSURJeU5TQXlNalVnVXlBek56VWdNVGMxSURNM05TQXlOelVnVXlBeE5UQWdNekkxSURRd01DQTBOVEFnVXlBME1EQWdOREF3SURNMU1DQXpNREFnVXlBME1qVWdNakkxSURRd01DQXpOelVnVXlBek56VWdNVFV3SURNeU5TQXlNREFnSWlCemRISnZhMlV0ZDJsa2RHZzlJak1pSUhOMGNtOXJaVDBpWW14aFkyc2lJR1pwYkd3OUluUnlZVzV6Y0dGeVpXNTBJaUF2UGp3dmMzWm5QZz09In0=";

  return useCallback(async (tokenId) => {
    const tokenUri = await getTokenUri(tokenId);
    const json = Buffer.from(tokenUri.substring(29), "base64").toString();
    const { image, name, description } = JSON.parse(json);

    const owner = await getOwner(tokenId);
    const status = await getStatus(tokenId);

    return {
      tokenUri,
      image,
      name, 
      description,
      owner, 
      status
    }
  }, [contract]);
}