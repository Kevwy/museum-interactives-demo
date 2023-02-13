import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import {
	landingImgWrapper,
	hotspotImgWrapper,
	horizontal, //TODO: #13 remove
	vertical, //TODO: #13 remove
} from "./components.module.scss";

const ImageBox = ({
	imageData,
	map = null,
	orientation, //TODO: #13 remove
	onClick,
	alt,
}) => {
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
		const imgWidth = Math.floor(
			(height * imageData.presentationWidth) / imageData.presentationHeight
		);
		return (
			<div
				id="resize-watch"
				className={`${landingImgWrapper}
			${orientation === "horizontal" ? horizontal : vertical} //TODO: #13 remove
			`}
			>
				<ImageMapper
					src={imageData.originalImg}
					map={MAP}
					responsive={true}
					imgWidth={imageData.presentationWidth}
					parentWidth={imgWidth}
					onClick={(area) => onAreaClick(area)}
				/>
			</div>
		);
	}
	return (
		<div
			className={`${hotspotImgWrapper}
			${orientation === "horizontal" ? horizontal : vertical} //TODO: #13 remove
			`}
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