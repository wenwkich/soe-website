import { useContext } from "react"
import { AppContext } from "../contexts/AppContext";

export const Main = () => {
  const { goToMint, goToChange } = useContext(AppContext);
  return (
    <>
      <div>this is the main component</div>
      <div className="button" onClick={(e) => goToMint(2)}>Mint</div>
      <div className="button" onClick={(e) => goToChange(2)}>Change</div>
    </>
  )
}