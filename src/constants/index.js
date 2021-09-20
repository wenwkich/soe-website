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
  [PAGES.connect]: false,
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

export const DEFAULT_SVG = `data:image/svg+xml;utf8,<svg width="655" height="655" viewBox="0 0 655 655" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M212.069 190.273C212.069 174.959 211.729 164.384 225.217 154.733C241.773 142.885 257.029 139.588 277.089 138.503C311.768 136.629 345.941 133.697 378.881 147.337C399.121 155.718 418.079 170.711 417.708 194.484C417.179 228.333 378.423 256.697 357.516 278.814C333.661 304.049 308.111 329.741 292.804 361.399C290.179 366.827 287.4 377.638 290.647 383.483C291.862 385.669 294.644 386.882 293.42 388.105" stroke="black" stroke-width="3" stroke-linecap="round"/><path d="M290.91 449.119C288.535 449.119 280.444 447.499 279.919 451.173C279.248 455.868 279.02 463.14 281.152 467.402C286.502 478.103 309.495 482.238 318.232 474.592C349.397 447.323 295.289 443.436 276.118 447.27" stroke="black" stroke-width="3" stroke-linecap="round"/></svg>
`;