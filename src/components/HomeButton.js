import * as React from "react";
import { SlHome } from "react-icons/sl";
import { homeBtn } from "./components.module.scss";

const HomeButton = ({onClick}) => {
	return (
		<button className={homeBtn} onClick={() => onClick()}>
			<SlHome />
		</button>
	);
};

export default HomeButton;
