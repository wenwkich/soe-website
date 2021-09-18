import { useContext } from "react"
import { OutlinedButton } from "../components/common";
import { Web3Context } from "../contexts/Web3Context"

export const ConnectMetaMask = () => {
  const {connect} = useContext(Web3Context);
  return (
    <div>
      <OutlinedButton onClick={(e) => connect()}>connect metamask</OutlinedButton>
    </div>
  )
}