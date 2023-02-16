import * as React from "react";
import {
	titleTextBox,
	subtitleTextBox,
	instructionsTextBox,
} from "./TitleCard.module.scss";

const instructions = {
	en: "click on a hotspot to learn more ➝",
	reo: "lorem Epsum ➝",
};

const TitleCard = ({ className, title, subtitle = null, lang }) => {
	if (subtitle) {
		return (
			<section className={className}>
				<div className={titleTextBox}>
					<h1>{title[lang]}</h1>
				</div>
				<div className={subtitleTextBox}>
					<h2>{subtitle[lang]}</h2>
				</div>
				<div className={instructionsTextBox}>
					<h3>{instructions[lang]}</h3>
				</div>
			</section>
		);
	}
	return (
		<section className={className}>
			<h1>{title[lang]}</h1>
		</section>
	);
};

export default TitleCard;
