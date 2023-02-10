import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { homeBtn, fixedTop, fullWidth, elevated } from "./styles.module.less";

const HomeButton = ({onClick}) => {

	const onHomeClick = () => {
		onClick();
	};

	return (
		<section className={`${fixedTop} ${fullWidth} ${elevated}`}>
			<btn className={homeBtn} onClick={() => onHomeClick()}>
				<HomeIcon fontSize="large" />
			</btn>
		</section>
	);
};

export default HomeButton;
