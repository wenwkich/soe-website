import React, { useCallback, useEffect, useMemo, useState } from "react";

export const PAGES = {
  qna: "qna",
  connect: "connect",
  main: "main",
  change: "change",
  mint: "mint",
}

export const SHOW_BACK_BUTTON = {
  [PAGES.qna]: true,
  [PAGES.connect]: false,
  [PAGES.main]: false,
  [PAGES.change]: true,
  [PAGES.mint]: true
}

export const SHOW_QNA_BUTTON = {
  [PAGES.qna]: false,
  [PAGES.connect]: true,
  [PAGES.main]: true,
  [PAGES.change]: false,
  [PAGES.mint]: false
}

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {

  const [location, setLocation] = useState();
  const [lastLocation, setLastLocation] = useState();
  const [tokenId, setTokenId] = useState(0);
  
  const showBack = useMemo(() => {
    return SHOW_BACK_BUTTON[location];
  }, [location]);

  const showQnA = useMemo(() => {
    return SHOW_QNA_BUTTON[location];
  }, [location]);

  const goBack = useCallback(() => {
    setLocation(lastLocation);
    setLastLocation("");
  }, [lastLocation]);

  const goToQnA = useCallback(() => {
    setLastLocation(location);
    setLocation(PAGES.qna);
  }, [location]);

  const goToMint = useCallback((tokenId) => {
    setLastLocation(location);
    setLocation(PAGES.mint);
    setTokenId(tokenId);
  }, [location]);

  const goToChange = useCallback((tokenId) => {
    setLastLocation(location);
    setLocation(PAGES.change);
    setTokenId(tokenId);
  }, [location]);

  const value = {
    location,
    setLocation,
    tokenId,
    setTokenId,
    showBack, 
    showQnA, 
    goBack, 
    goToQnA,
    goToChange,
    goToMint,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
