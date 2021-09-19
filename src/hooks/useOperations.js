import { useContext, useCallback } from "react";
import { Web3Context } from "../contexts/Web3Context";

export const useOperations = () => {

  const { contract } = useContext(Web3Context);

  const mintSignature = useCallback((tokenId, uri, errHandler, successHandler, loadingHandler) => {
    loadingHandler();
    return contract.mintSignature(tokenId, uri)
      .then((tx) => tx.wait().then(successHandler))
      .catch(errHandler);
  }, [contract]);

  const setTokenUri = useCallback((tokenId, uri, price, errHandler, successHandler, loadingHandler) => {
    loadingHandler();
    return contract.setTokenUri(tokenId, uri, { value: price })
      .then((tx) => tx.wait().then(successHandler))
      .catch(errHandler);
  }, [contract]);

  const setImmutableWithUri = useCallback((tokenId, uri, price, errHandler, successHandler, loadingHandler) => {
    loadingHandler();
    return contract.setImmutableWithUri(tokenId, uri, { value: price })
      .then((tx) => tx.wait().then(successHandler))
      .catch(errHandler);
  }, [contract]);

  return {
    mintSignature,
    setTokenUri,
    setImmutableWithUri,
  };
}