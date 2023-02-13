import * as React from "react";
import HomeButton from "../components/HomeButton";

const HotspotLayout = ({
	children,
	orientation, //TODO: #13 remove
	onHomeClick,
}) => {
	return (
		<div className={orientation}>
			{" "}
			{/*TODO: #13 remove orientation class declaration*/}
			{children}
			<HomeButton onClick={onHomeClick} />
			{/*<LangSwitch />*/}
		</div>
	);
};

export default HotspotLayout;
