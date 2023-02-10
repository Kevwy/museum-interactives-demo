import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import {
	landingImgWrapper,
	hotspotImgWrapper,
	horizontal,
	vertical,
} from "./styles.module.less";

const ImageBox = ({ imageData, map = null, orientation, onClick, alt }) => {
	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);

	useEffect(() => {
		if (map) {
			const resizeObserver = new ResizeObserver((event) => {
				setWidth(event[0].contentBoxSize[0].inlineSize);
				setHeight(event[0].contentBoxSize[0].blockSize);
			});
			console.log(`${width}, ${height}`);
			resizeObserver.observe(document.getElementById("resize-watch"));
		}
	});

	if (map) {
		const MAP = {
			name: "workmap",
			areas: map,
		};

		const onAreaClick = (area) => {
			onClick(area);
		};
		const imgWidth = Math.floor(height* imageData.presentationWidth / imageData.presentationHeight)
		return (
			<div
				id="resize-watch"
				className={`${landingImgWrapper} ${
					orientation === "horizontal" ? horizontal : vertical
				}`}
			>
				<ImageMapper
					src={imageData.originalImg}
					map={MAP}
					responsive={true}
					//natural={true}
					imgWidth={imageData.presentationWidth }
					parentWidth={imgWidth}
					onClick={(area) => onAreaClick(area)}
				/>
			</div>
		);
	}
	return (
		<div
			className={`${hotspotImgWrapper} ${
				orientation === "horizontal" ? horizontal : vertical
			}`}
		>
			<GatsbyImage
				image={imageData}
				alt={alt}
				objectFit="outside"
				objectPosition="center"
			/>
		</div>
	);
};

export default ImageBox;
