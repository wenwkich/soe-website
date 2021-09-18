import abi from './abi.json';

export const CONTRACT_ABI = abi;
export const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
export const CHAIN_ID = process.env.REACT_APP_CHAIN_ID;

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

export const TOKEN_STATUS = {
  NOT_MINTED: "not minted",
  IMMUTABLE: "immutable",
  MUTABLE: "mutable"
}

export const TOKEN_STATUS_TO_COLOR = {
  [TOKEN_STATUS.NOT_MINTED]: "#12DE00",
  [TOKEN_STATUS.IMMUTABLE]: "#DE0000",
  [TOKEN_STATUS.MUTABLE]: "#0400DE"
}