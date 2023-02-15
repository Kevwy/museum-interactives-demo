import * as React from "react";
import {
	descriptionContent,
	descriptionCard,
	descriptionTxt,
	horizontal,
	vertical,
} from "./components.module.scss";

const DescriptionCard = ({
	description,
	orientation, //TODO: #13 remove
	lang,
}) => {
	return (
		<div
			className={`${descriptionCard}
			${orientation === "horizontal" ? horizontal : vertical} //TODO: #13 remove
			`}
		>
			<div className={descriptionContent}>
				<p className={descriptionTxt}>{description[lang]}</p>
			</div>
		</div>
	);
};
export default DescriptionCard;
