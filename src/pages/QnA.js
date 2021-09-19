import styled from "styled-components"

const QnAWrapper = styled.div`
  margin-top: 30px;
  font-size: 1em;
`;

export const QnA = () => {
  return (
    <QnAWrapper>
        <p>
          you seem a little lost... a little qna might help
        </p>
        <p>
          WHAT IS THIS?
          <br />
          - this might be the first of its kind: **mutable** nft with signatures-like visual. only **42** will be minted.
        </p>
        <p>
          HOW DOES SIGNATURES WORK?
          <br />
          - each signature is a visualization of a **hashed** input. works just like identicons. gimme a message/name, ill give you a signature.
        </p>
        <p>
          HOW MUCH IS IT?
          <br />
          - **FREE** to mint, honey.
        </p>
        <p>
          WHY YOU SAY IT'S MUTABLE?
          <br />
          - for token owners, it is possible to change signatures with a fee that doubles every time.
        </p>
        <p>
          HOW DOES THIS GET DOUBLED?
          <br />
          - first rename requires 0.42 eth, second requires 0.84 eth and go on...
        </p>
        <p>
          IS IT POSSIBLE TO MAKE IT IMMUTABLE?
          <br />
          - it is also possible to pay 420 eth (1000x the initial price) to make it immutable.
        </p>
        <p>
          ANY RESERVED TOKEN?
          <br />
          - i will keep the first two tokens, not sure if they will be on sale one day. first token will be immutable.
        </p>
        <p>
          WHEN CAN I MINT?
          <br />
          - time for minting the rest of 40 will be available in day 1, day 2, day 4, day 8, day 16 (8 tokens for each day)... SALE TIME TBA
        </p>
        <p>
          WHEN IS "DAY 1"?
          <br />
          - stay tune in <a href="https://discord.gg/t4Q78ssF" target="_blank">discord</a> to find out
        </p>
        <p>
          CAN I GET IT FROM OPENSEA?
          <br />
          - if you missed the initial 42 mints, it is also available on opensea to trade.
        </p>
        <p>
          SOCIAL MEDIA?
          <br />
          - <a href="https://twitter.com/soe42nft" target="_blank">twitter</a> & <a href="https://discord.gg/t4Q78ssF" target="_blank">discord</a>
        </p>
    </QnAWrapper>
  )
}