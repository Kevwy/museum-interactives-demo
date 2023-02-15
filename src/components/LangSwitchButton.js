import * as React from "react";
import { localeToDisplay } from "../utils/LocaleParser";

import { langBtn } from "./components.module.scss";

const LanguageButton = ({ lang, onClick }) => {
	return (
		<button className={langBtn} lang={lang} onClick={() => onClick(lang)}>
			{localeToDisplay(lang)}
		</button>
	);
};

export default LanguageButton;
