import * as React from "react";
import { useEffect, useContext } from "react";
import TitleCard from "../components/TitleCard";
import DescriptionCard from "../components/DescriptionCard";
import LandingLayout from "../layouts/LandingLayout";
import HotspotLayout from "../layouts/HotspotLayout";
import ImageBox from "../components/ImageBox";
import { exhibitContext } from "../utils/ExhibitContextProvider";
import { useIdleTimer } from "react-idle-timer";

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
		orientation,
		setOrientation,
		lang,
		setLang,
	] = useContext(exhibitContext);

	const onIdle = () => {
		resetToLanding();
	};

	const { start } = useIdleTimer({
		onIdle,
		timeout: 1000 * 60,
		startOnMount: false,
		startManually: true,
		stopOnIdle: true,
		throttle: 500,
	});

	useEffect(() => {
		console.debug("Initial useEffect");
		setExhibit(data.exhibitJson);
		setFocus(data.exhibitJson);
		setOrientation(data.exhibitJson.orientation);
		setIsLanding(true);
		var hotspots = {};
		data.exhibitJson.hotspots.map((hotspot) => {
			hotspots[hotspot.name] = hotspot;
		});
		setHotspots(hotspots);
	}, []);

	const exhibitImageData = data.exhibitJson.image.childImageSharp.fluid;
	const exhibitImageMap = data.exhibitJson.map.childrenMapJson;

	const switchLang = (lang) => {
		setLang(lang);
	};

	const onAreaClick = (area) => {
		setFocus(hotspots[area.name]);
		setIsLanding(false);
		start();
	};

	const resetToLanding = () => {
		setFocus(exhibit);
		setIsLanding(true);
	};

	if (!exhibit) {
		return;
	}
	if (isLanding) {
		return (
			<LandingLayout orientation={orientation} onLangBtnClick={switchLang}>
				<TitleCard
					title={exhibit.title}
					subtitle={exhibit.description}
					lang={lang}
				/>
				<ImageBox
					imageData={exhibitImageData}
					map={exhibitImageMap}
					alt={exhibit.title}
					orientation={orientation}
					onClick={onAreaClick}
				/>
			</LandingLayout>
		);
	}
	return (
		<HotspotLayout orientation={orientation} onHomeClick={resetToLanding} onLangBtnClick={switchLang}>
			<TitleCard title={focus.title} lang={lang}/>
			<ImageBox
				imageData={focus.image.childImageSharp.gatsbyImageData}
				alt={focus.title}
				orientation={orientation}
			/>
			<DescriptionCard
				description={focus.description}
				orientation={orientation}
				lang={lang}
			/>
		</HotspotLayout>
	);
};

export default ExhibitPage;
