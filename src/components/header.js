import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export const Header = () => {

  const { 
    showBack, 
    showQnA, 
    goBack, 
    goToQnA
  } = useContext(AppContext); 

  return (
    <>
      { showBack && <div className="header-button-left" onClick={(e) => goBack()}>bacc</div> }
      { showQnA && <div className="header-button-right" onClick={(e) => goToQnA()}>?</div> }
    </>
  )
}