import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIdleTimer } from "react-idle-timer";
import { getImage, getSrc } from "gatsby-plugin-image";

import { exhibitContext } from "../utils/ExhibitContextProvider";

import TitleCard from "../components/TitleCard";
import DescriptionCard from "../components/DescriptionCard";
import LandingLayout from "../layouts/LandingLayout";
import HotspotLayout from "../layouts/HotspotLayout";
import ImageBox from "../components/ImageBox";

const ExhibitPage = ({ data }) => {
	const [
		exhibit,
		setExhibit,
		focus,
		setFocus,
		hotspots,
		setHotspots,
		isLanding,
		setIsLanding,
		orientation, //TODO #13: Remove
		setOrientation, //TODO #13: Remove
		lang,
		setLang,
	] = useContext(exhibitContext);

	// Mount idle timer
	const resetToLanding = () => {
		setFocus(exhibit);
		setIsLanding(true); //TODO: declare as handler function in context?
	};

	const onIdle = () => {
		resetToLanding();
	};

	const { start: startTimer } = useIdleTimer({
		onIdle,
		timeout: 1000 * 60,
		startOnMount: false,
		startManually: true,
		stopOnIdle: true,
		throttle: 500,
	});

	// Set initial states
	useEffect(() => {
		setExhibit(data.exhibitJson);
		setFocus(data.exhibitJson);
		setOrientation(data.exhibitJson.orientation); //TODO #13: Remove
		setIsLanding(true);
		var hotspots = {};
		data.exhibitJson.hotspots.map((hotspot) => {
			hotspots[hotspot.name] = hotspot;
		});
		setHotspots(hotspots);
	}, []);

	const exhibitImageData = data.exhibitJson.image.childImageSharp.fluid;
	const exhibitImageMap = data.exhibitJson.map.childrenMapJson; //TODO #13: Change -> const exhibitImageMap = JSON.parse(data.exhibitJson.imageMap);

	const switchLang = (lang) => {
		setLang(lang);
	};

	const onAreaClick = (area) => {
		// TODO: refactor! handleHotspotClick or move to encapsulated area
		setFocus(hotspots[area.name]);
		setIsLanding(false);
		startTimer(); // start the idle timer
	};

	if (!exhibit) {
		return;
	}
	if (isLanding) {
		return (
			<LandingLayout
				orientation={orientation}	//TODO #13: Remove
				onLangBtnClick={switchLang}
			>
				<TitleCard
					title={exhibit.title}
					subtitle={exhibit.description}
					lang={lang}
				/>
				<ImageBox
					imageData={exhibitImageData}
					map={exhibitImageMap}
					alt={exhibit.title}
					orientation={orientation}	//TODO #13: Remove
					onClick={onAreaClick}
				/>
			</LandingLayout>
		);
	}
	return (
		<HotspotLayout
			orientation={orientation} //TODO #13: Remove
			onHomeClick={resetToLanding}
			onLangBtnClick={switchLang}
		>
			<TitleCard title={focus.title} lang={lang} />
			<ImageBox
				imageData={focus.image.childImageSharp.gatsbyImageData}
				alt={focus.title}
				orientation={orientation} //TODO #13: Remove
			/>
			<DescriptionCard
				description={focus.description}
				orientation={orientation} //TODO #13: Remove
				lang={lang}
			/>
		</HotspotLayout>
	);
};

export default ExhibitPage;
