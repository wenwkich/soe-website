import { useContext, useEffect, useMemo } from "react";
import { AppContext } from "../contexts/AppContext";
import { Web3Context } from "../contexts/Web3Context";
import { ConnectMetaMask } from "./ConnectMetaMask";
import { Main } from "./Main";
import { Mint } from "./Mint";
import { QnA } from "./QnA";
import { Change } from "./Change";
import { PAGES } from "../constants";

export const Page = () => {

  const { connected } = useContext(Web3Context);
  const { location, setLocation } = useContext(AppContext);

  useEffect(() => {
    if (!connected) {
      setLocation(PAGES.connect);
    } else {
      setLocation(PAGES.main);
    }
  }, [connected, setLocation]);

  return useMemo(() => {
    switch (location) {
      case PAGES.mint:
        return <Mint />;
      case PAGES.main:
        return <Main />;
      case PAGES.change:
        return <Change />;
      case PAGES.connect:
        return <ConnectMetaMask />;
      case PAGES.qna:
        return <QnA />;
    }
    return <ConnectMetaMask />;
  }, [location]);
}