import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useIdleTimer } from "react-idle-timer";

import TitleCard from "../components/TitleCard";
import ContentCard from "../components/ContentCard";
import ImageBox from "../components/ImageBox";
import LangSwitchButton from "../components/buttons/LangSwitchButton";
import HomeButton from "../components/buttons/HomeButton";
// import InteractiveImage from "../components/InteractiveImage";

import { ExhibitContext } from "../contexts/ExhibitContext";

import { hotspotImgWrapper, titleCard } from "./ExhibitTemplate.module.scss";

const ExhibitTemplate = ({ data }) => {
	const [exhibit, setExhibit] = useContext(ExhibitContext);
	setExhibit(data.exhibitJson);

	const [focus, setFocus] = useState(data.exhibitJson);
	const [isLanding, setIsLanding] = useState(true);
	const [lang, setLang] = useState("en");
	const hotspots = data.exhibitJson.hotspots;

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

	// image settings
	const imageFit = "outside";
	const imagePosition = "center";
	const exhibitImageSharp = data.exhibitJson.image.childImageSharp;
	const exhibitImageMap = data.exhibitJson.map.childrenMapJson; //TODO #14: Change -> imageMap : JSON.parse(data.exhibitJson.imageMap),

	/* TODO: InteractiveImage Component logic
	const exhibitImageSettings = {
		id: "imageBase",
		imageMap: data.exhibitJson.map.childrenMapJson,
		srcHeight: exhibitImageSharp.original.height,
		srcWidth: exhibitImageSharp.original.width,
		objectFit: imageFit,
		objectPosition: imagePosition,
	};
	*/

	// event handlers
	const handleLangSwitch = (lang) => {
		setLang(lang);
	};

	const resetToLanding = () => {
		setFocus(exhibit);
		setIsLanding(true); //TODO: declare as handler function in context?
	};

	const handleHotspotClick = (area) => {
		setFocus(hotspots.find((hotspot) => hotspot.name === area.name));
		setIsLanding(false);
		startTimer(); // start the idle timer
	};

	if (isLanding) {
		// Render landing page
		return (
			<>
				<ImageBox
					// imageData={exhibitImageSharp.original.src}
					img={exhibitImageSharp.fluid}
					map={exhibitImageMap}
					alt={data.exhibitJson.title.en}
					srcWidth={exhibitImageSharp.original.width}
					srcHeight={exhibitImageSharp.original.height}
					onClick={handleHotspotClick}
				/>
				{/* //TODO: InteractiveImage component logic
					<InteractiveImage
					className={landingImgWrapper}
					img={exhibitImageSharp.gatsbyImageData}
					config={exhibitImageSettings}
					alt={data.exhibitJson.title.en}
					onClick={handleHotspotClick}
				/> */}
				<TitleCard
					className={titleCard}
					title={data.exhibitJson.title}
					subtitle={data.exhibitJson.description}
					lang={lang}
				/>
				<LangSwitchButton lang="en" onClick={handleLangSwitch} />
				<LangSwitchButton lang="reo" onClick={handleLangSwitch} />
			</>
		);
	} else {
		// Render hotspot page
		return (
			<>
				<GatsbyImage
					className={hotspotImgWrapper}
					image={focus.image.childImageSharp.gatsbyImageData}
					alt={focus.title.en}
					objectFit={imageFit}
					objectPosition={imagePosition}
				/>
				<TitleCard className={titleCard} title={focus.title} lang={lang} />
				<ContentCard description={focus.description} lang={lang} />
				<HomeButton onClick={resetToLanding} />
				{/*<LangSwitch />*/}
			</>
		);
	}
};
export default ExhibitTemplate;

export const query = graphql`
	query GetExhibitBySlug($slug: String!) {
		exhibitJson(slug: { eq: $slug }) {
			title {
				en
				reo
			}
			description {
				en
				reo
			}
			name
			hotspots {
				title {
					en
					reo
				}
				description {
					en
					reo
				}
				name
				image {
					childImageSharp {
						gatsbyImageData(quality: 100)
					}
				}
				slug
			}
			image {
				childImageSharp {
					fluid {
						originalImg
						presentationHeight
						presentationWidth
					}
					gatsbyImageData(quality: 100)
					original {
						height
						width
					}
				}
			}
			map {
				childrenMapJson {
					name
					shape
					coords
					id
				}
			}
		}
	}
`;

/* TODO: #14 Switch to this query
export const query = graphql`
	query GetExhibitByName($name: String!) {
		exhibitJson(name: { eq: $name }) {
			name
			title {
				en
				reo
			}
			description {
				en
				reo
			}
			hotspots {
				title {
					en
					reo
				}
				description {
					en
					reo
				}
				name
				image {
					childImageSharp {
						gatsbyImageData(quality: 100)
					}
				}
			}
			image {
				childImageSharp {
					fluid {
						originalImg
						presentationHeight
						presentationWidth
					}
					gatsbyImageData(quality: 100)
					original {
						height
						width
					}
				}
			}
			map {
				childrenMapJson {
					name
					id
					shape
					coords
					id
				}
			}
			imageMap
		}
	}
`;
*/
