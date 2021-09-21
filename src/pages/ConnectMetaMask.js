import { useContext } from "react"
import { ImportantButton } from "../components/common";
import { Web3Context } from "../contexts/Web3Context"
import { QnA } from "./QnA";
import styled from 'styled-components';

export const ConnectMetaMask = () => {
  const {connect} = useContext(Web3Context);
  return (
    <Wrapper>
      <HighlightedMessage>use "connect metamask" to see the signatures!</HighlightedMessage>
      <ImportantButton onClick={(e) => connect()}>connect metamask</ImportantButton>
      <QnA />
      <HighlightedMessage>use "connect metamask" to see the signatures!</HighlightedMessage>
      <ImportantButton onClick={(e) => connect()}>connect metamask</ImportantButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HighlightedMessage = styled.div`
  margin-top: 10px;
  color: #3440eb;
  text-align: center;
`