import { useCallback, useContext } from "react";
import { DEFAULT_SVG, TOKEN_STATUS } from "../constants";
import { Web3Context } from "../contexts/Web3Context"

export const useTokenMetadata = () => {

  const { contract, account } = useContext(Web3Context);

  const getTokenUri = (tokenId, errHandler) => {
    return contract.tokenURI(tokenId)
      .catch(errHandler);
  };

  const getOwner = (tokenId) => {
    return contract.ownerOf(tokenId);
  }

  const getIsImmutable = (tokenId, errHandler) => {
    return contract.isImmutable(tokenId)
      .catch(errHandler);
  }

  const getSaleTime = (tokenId, errHandler) => {
    return contract.saleTime(tokenId);
  }

  const getMutablePrice = (tokenId, errHandler) => {
    return contract.signatureChangePrice(tokenId)
      .catch(errHandler);
  }
  
  const getImmutablePrice = (tokenId, errHandler) => {
    return contract.immutablePrice()
      .catch(errHandler);
  }

  const getStatus = (isMinted, isImmutable) => {
    if (!isMinted) return TOKEN_STATUS.NOT_MINTED;
    if (isImmutable) return TOKEN_STATUS.IMMUTABLE;
    return TOKEN_STATUS.MUTABLE;
  }

  return useCallback(async (tokenId, errHandler) => {
    let isMinted;
    let owner;
    try {
      owner = await getOwner(tokenId);
    } catch (err) {
      isMinted = false;
    }

    // eslint-disable-next-line
    isMinted = owner && owner != "0x0000000000000000000000000000000000000000";
    // eslint-disable-next-line
    const isOwner = owner && owner == account;

    let tokenUri, image, name, description;
    if (isMinted) {
      try {
        tokenUri = await getTokenUri(tokenId, errHandler);
        const json = Buffer.from(tokenUri.substring(29), "base64").toString();
        ({ image, name, description } = JSON.parse(json));
      } catch (err) {
        console.error(err);
      }
    } else {
      image = DEFAULT_SVG;
    }

    let saleStartTime;
    const isImmutable = await getIsImmutable(tokenId, errHandler);
    try {
      saleStartTime = await getSaleTime(tokenId, errHandler);
    } catch (err) {
      saleStartTime = null;
    }

    const immutablePrice = await getImmutablePrice();
    const mutablePrice = await getMutablePrice(tokenId);
    const status = getStatus(isMinted, isImmutable);

    return {
      tokenUri,
      image,
      name, 
      description,
      owner, 
      isMinted,
      isImmutable,
      status,
      saleStartTime,
      isOwner,
      mutablePrice,
      immutablePrice
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);
}