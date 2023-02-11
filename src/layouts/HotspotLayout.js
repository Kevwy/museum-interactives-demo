import * as React from "react";
import HomeButton from "../components/HomeButton";
import { fullScreenWrapper } from "./styles.module.less";

const HotspotLayout = ({ children, orientation, onHomeClick}) => {
  return (
    <div className={orientation}>
      <HomeButton onClick={onHomeClick}/>
      {children}
      {/*<LangSwitch />*/}
    </div>
  );
};

export default HotspotLayout;
