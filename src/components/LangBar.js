import * as React from "react";
import { langBtn, bottomBar } from "./components.module.scss";

const LangBar = ({ onClick }) => {
	const langSwitch = (lang) => {
		onClick(lang);
	};

	return (
		<section className={bottomBar}>
			<btn className={langBtn} lang="en" onClick={() => langSwitch("en")}>
				ENG
			</btn>
			<btn className={langBtn} lang="reo" onClick={() => langSwitch("reo")}>
				REO
			</btn>
		</section>
	);
};

export default LangBar;
