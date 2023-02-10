import * as React from "react";
import {
	langBtn,
	fixedBottom,
	floatLeft,
	floatRight,
	fullWidth,
	elevated,
} from "./styles.module.less";

const LangBar = ({ onClick }) => {
	const langSwitch = (lang) => {
		onClick(lang);
	};

	return (
		<section className={`${fixedBottom} ${fullWidth} ${elevated}`}>
			<btn
				className={`${langBtn} ${floatLeft}`}
				onClick={() => langSwitch("en")}
			>
				ENG
			</btn>
			<btn
				className={`${langBtn} ${floatRight}`}
				onClick={() => langSwitch("reo")}
			>
				REO
			</btn>
		</section>
	);
};

export default LangBar;
