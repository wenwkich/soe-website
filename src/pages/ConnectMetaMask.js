import { useContext } from "react"
import { Web3Context } from "../contexts/Web3Context"

export const ConnectMetaMask = () => {
  const {connect} = useContext(Web3Context);
  return (
    <div className="">
      <div className="button" onClick={(e) => connect()}>connect metamask</div>
    </div>
  )
}