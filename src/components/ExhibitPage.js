import React, { useEffect, useContext } from "react";
import { useIdleTimer } from "react-idle-timer";

import { exhibitContext } from "../utils/ExhibitContextProvider";

import TitleCard from "./TitleCard";
import ContentCard from "./ContentCard";
import ImageBox from "./ImageBox";
import LangSwitchButton from "./LangSwitchButton";
import HomeButton from "./HomeButton";
import InteractiveImage from "./WIP/InteractiveImage";

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
		lang,
		setLang,
	] = useContext(exhibitContext);

	// Set initial states
	useEffect(() => {
		setExhibit(data.exhibitJson);
		setFocus(data.exhibitJson);
		setIsLanding(true);
		var hotspots = {};
		data.exhibitJson.hotspots.map((hotspot) => {
			hotspots[hotspot.name] = hotspot;
		});
		setHotspots(hotspots);
	}, []);

	// Mount idle timer

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

	const exhibitImageData = data.exhibitJson.image.childImageSharp.fluid;
	const exhibitImageMap = data.exhibitJson.map.childrenMapJson; //TODO #14: Change -> const exhibitImageMap = JSON.parse(data.exhibitJson.imageMap);

	// event handlers
	const handleLangSwitch = (lang) => {
		setLang(lang);
	};

	const resetToLanding = () => {
		setFocus(exhibit);
		setIsLanding(true); //TODO: declare as handler function in context?
	};


	const handleHotspotClick = (area) => {
		// TODO: refactor! handleHotspotClick or move to encapsulated area
		setFocus(hotspots[area.name]);
		// setFocus(
		// 	data.exhibitJson.hotspots.find((hotspot) => hotspot.name === area.name)
		// );
		setIsLanding(false);
		startTimer(); // start the idle timer
	};

	console.log(` Before render: ${exhibit}`)
	// Component rendering
	if (!exhibit) {
		console.log(`No exhibit state`);
		return;
	}
	if (isLanding) {
		console.log(`isLanding: ${exhibit}`);
		// FIXME: apply layout: horizontal style here
		return (
			<>
				{/* <ImageBox
					imageData={exhibitImageData}
					map={exhibitImageMap}
					alt={exhibit.title.en}
					onClick={handleHotspotClick}
				/> */}
				<InteractiveImage onClick={handleHotspotClick} />
				<TitleCard
					title={exhibit.title}
					subtitle={exhibit.description}
					lang={lang}
				/>
				<LangSwitchButton lang="en" onClick={handleLangSwitch} />
				<LangSwitchButton lang="reo" onClick={handleLangSwitch} />
			</>
		);
	} else {
		// FIXME: apply layout: horizontal style here
		return (
			<>
				<ImageBox
					imageData={focus.image.childImageSharp.gatsbyImageData}
					alt={focus.title}
				/>
				<TitleCard title={focus.title} lang={lang} />
				<ContentCard description={focus.description} lang={lang} />
				<HomeButton onClick={resetToLanding} />
				{/*<LangSwitch />*/}
			</>
		);
	}
};

export default ExhibitPage;
