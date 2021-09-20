import { useContext } from "react"
import { Button } from "../components/common";
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

const ImportantButton = styled(Button)`
  cursor: pointer;
  border: 2px solid;
  padding: 4px 8px 4px 8px;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  border-color: #666;
  background-color: #666;
  width: 40%;
`;

const HighlightedMessage = styled.div`
  margin-top: 10px;
  color: #3440eb;
  text-align: center;
`