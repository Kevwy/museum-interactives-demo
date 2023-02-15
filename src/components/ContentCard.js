import * as React from "react";
import {
	contentCard,
	contentTextBox,
	contentText,
} from "./ContentCard.module.scss";

const ContentCard = ({ description, lang }) => {
	//FIXME: #13 orientation was in <div> (DescriptionCard)
	return (
		<div className={contentCard}>
			<div className={contentTextBox}>
				<p className={contentText}>{description[lang]}</p>
			</div>
		</div>
	);
};
export default ContentCard;
