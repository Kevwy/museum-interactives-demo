import * as React from "react"
import LangBar from "../components/LangBar"


const LandingLayout = ({ children, orientation, onLangBtnClick}) => {
  return (
    <div className={orientation}>
      {children}
      <LangBar onClick={onLangBtnClick}/>
    </div>
  )
}

export default LandingLayout