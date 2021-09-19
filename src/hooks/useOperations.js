import { useContext, useCallback } from "react";
import { Web3Context } from "../contexts/Web3Context";

export const useOperations = () => {

  const { contract } = useContext(Web3Context);

  const mintSignature = useCallback((tokenId, uri, errHandler) => {
    return contract.mintSignature(tokenId, uri)
      .catch(errHandler);
  }, []);

  const setTokenUri = useCallback(() => {
    return contract.setTokenUri(tokenId, uri, errHandler)
      .catch(errHandler);
  }, []);

  const setImmutableWithUri = useCallback(() => {
    return contract.setImmutableWithUri(tokenId, uri, errHandler)
      .catch(errHandler);
  }, []);

  return {
    mintSignature,
    setTokenUri,
    setImmutableWithUri,
  };
}