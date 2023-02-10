import * as React from "react";
import {
	descriptionContent,
	descriptionCard,
	descriptionTxt,
	vertical,
	horizontal,
} from "./styles.module.less";

const DescriptionCard = ({ description, orientation, lang }) => {
	return (
		<div
			className={`${descriptionCard} ${
				orientation === "horizontal" ? horizontal : vertical
			}`}
		>
			<div className={descriptionContent}>
				<p className={descriptionTxt}>
					{description[lang]}
				</p>
			</div>
		</div>
	);
};
export default DescriptionCard;
