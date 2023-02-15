const localeDisplayDict = {
	en: "eng",
	reo: "reo",
};

export const localeToDisplay = (locale) => {
	// Function to parse a locale identifier string into a display friendly string.
	try {
		if (typeof locale !== "string") {
			throw new TypeError(`Invalid argument. Must be of type "string".`);
		}
		if (locale in localeDisplayDict === false) {
			throw new RangeError(
				`"${locale}" is not supported. Add the entry to LocaleParser.localeDisplayDict if further support is intended.`
			);
		}
		return localeDisplayDict[locale];
	} catch (error) {
		console.error(error.message);
	}
};
