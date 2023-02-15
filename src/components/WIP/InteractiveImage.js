import React, { useState, useEffect, useContext } from "react";
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";

const InteractiveImage = ({ className, img, config, alt, onClick }) => {
	const { id, imageMap, srcHeight, srcWidth, objectFit, objectPosition } =
		config;

	const handleClick = (hotspot) => {
		onClick(hotspot);
	};

	// const images = withArtDirection(getImage(img), [
	// 	{
	// 		media: "(orientation: landscape)",
	// 		image: getImage(data.smallImage),
	// 	},
	// 	{
	// 		media: "(orientation: portrait)",
	// 		image: {getImage(data.smallImage),}
	// 	},
	// ]);

	const maxDimension = 1080 * 0.8; // fixed

	const resizedImageMap = resizeImageMap(srcHeight, srcWidth);

	const resizeImageMap = (
		srcWidth,
		srcHeight,
		displayWidth,
		displayHeight,
		imageMap
	) => {
		const resizedMap = imageMap;
		imageMap.forEach((area, index) => {
			resizedMap[index].coords = area.coords.map((coordinate, index) => {
				return index % 2 === 0
					? (parseInt(coordinate, 10) / srcWidth) * 100 * displayWidth
					: (parseInt(coordinate, 10) / srcHeight) * 100 * displayHeight;
			});
		});
	};

	const imageMapId = "imageMap";

	return (
		<>
			<GatsbyImage
				className={className}
				id={id}
				image={img}
				alt={alt}
				useMap={`#${imageMapId}`}
				objectFit={objectFit}
				objectPosition={objectPosition}
				layout="fullWidth"
			/>
			<map id="imageMapId" name="imageMapId">
				{imageMap.map((area) => (
					<area
						key={area.id}
						name={area.name}
						alt={area.name}
						shape={area.shape}
						coords={area.coords}
						onClick={() => handleClick(area.name)}
					/>
				))}
			</map>
		</>
	);
};

export default InteractiveImage;
