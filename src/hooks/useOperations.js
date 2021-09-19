import { useContext, useCallback } from "react";
import { Web3Context } from "../contexts/Web3Context";

export const useOperations = () => {

  const { contract } = useContext(Web3Context);

  const mintSignature = useCallback((tokenId, uri, errHandler) => {
    return contract.mintSignature(tokenId, uri)
      .catch(errHandler);
  }, []);

  const setTokenUri = useCallback((tokenId, uri, price, errHandler) => {
    return contract.setTokenUri(tokenId, uri, { value: price })
      .catch(errHandler);
  }, []);

  const setImmutableWithUri = useCallback((tokenId, uri, price, errHandler) => {
    return contract.setImmutableWithUri(tokenId, uri, { value: price })
      .catch(errHandler);
  }, []);

  return {
    mintSignature,
    setTokenUri,
    setImmutableWithUri,
  };
}