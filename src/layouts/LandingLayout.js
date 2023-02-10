import * as React from "react"
import LangBar from "../components/LangBar"
import {fullScreenWrapper} from "./styles.module.less"


const LandingLayout = ({ children, orientation, onLangBtnClick}) => {
  return (
    <div className={`${fullScreenWrapper} ${orientation}`}>
      {children}
      <LangBar onClick={onLangBtnClick}/>
    </div>
  )
}

export default LandingLayout