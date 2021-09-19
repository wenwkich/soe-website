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
    return contract.saleTime(tokenId)
      .catch(errHandler);
  }

  const getMutablePrice = (tokenId, errHandler) => {
    return contract.saleTime(tokenId)
      .catch(errHandler);
  }
  
  const getImmutablePrice = (tokenId, errHandler) => {
    return contract.signatureChangePrice(tokenId)
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
      if (err == "execution reverted: Not valid nft") {
        isMinted = false;
      }
    }
    console.log(owner);
    isMinted = owner && owner != "0x0000000000000000000000000000000000000000";
    const isOwner = owner == account;

    let tokenUri, image, name, description;
    if (isMinted) {
      tokenUri = await getTokenUri(tokenId, errHandler);
      const json = Buffer.from(tokenUri.substring(29), "base64").toString();
      ({ image, name, description } = JSON.parse(json));
    } else {
      image = DEFAULT_SVG;
    }

    const isImmutable = await getIsImmutable(tokenId, errHandler);
    const saleStartTime = await getSaleTime(tokenId, errHandler);

    const immutablePrice = await getImmutablePrice(tokenId);
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
  }, [contract]);
}