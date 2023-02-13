import * as React from "react"
import LangBar from "../components/LangBar"


const LandingLayout = ({
  children,
  orientation, //TODO: #13 remove
  onLangBtnClick }) => {
	return (
		<div className={orientation}>	{/*TODO: #13 remove orientation class declaration*/}
			{children}
			<LangBar onClick={onLangBtnClick} />
		</div>
	);
};

export default LandingLayout;