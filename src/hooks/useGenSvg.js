import { useCallback, useContext } from "react"
import { Web3Context } from "../contexts/Web3Context"


export const useGenSvg = () => {

  const { contract } = useContext(Web3Context);

  return useCallback(async (message) => {
    const svg = await contract.getSvg(message);
    const image = `data:image/svg+xml;utf8,${svg}`;

    return {
      image
    };
  }, [contract]);
}