import * as React from "react";
import { SlHome } from "react-icons/sl";
import { homeBtn, topBar } from "./components.module.scss";

const HomeButton = ({onClick}) => {

	const onHomeClick = () => {
		onClick();
	};

	return (
		<section className={topBar}>
			<btn className={homeBtn} onClick={() => onHomeClick()}>
				<SlHome />
			</btn>
		</section>
	);
};

export default HomeButton;
