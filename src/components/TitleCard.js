import * as React from "react";
import {
	titleCard,
	titleTextBox,
	subtitleTextBox,
	instructionsTextBox,
} from "./TitleCard.module.scss";

//TODO: #11 render instructions conditionally
//TODO: #11 render instructions conditionally
const instructions = {
	en: "Click on the hotspots to learn more",
	reo: "Lorem Epsum"
};


const TitleCard = ({ title, subtitle = null, lang }) => {
	if (subtitle) {
		return (
			<section className={titleCard}>
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
		<section className={titleCard}>
			<h1>{title[lang]}</h1>
		</section>
	);
};

export default TitleCard;
