import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useState, useEffect } from "react";
import ImageMapper from "react-img-mapper";
import { landingImgWrapper } from "./ImageBox.module.scss";

const ImageBox = ({ img, map = null, onClick, alt }) => {
	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((event) => {
			setWidth(event[0].contentBoxSize[0].inlineSize);
			setHeight(event[0].contentBoxSize[0].blockSize);
		});
		console.log(`${width}, ${height}`);
		resizeObserver.observe(document.getElementById("resize-watch"));
	});

	const MAP = {
		name: "workmap",
		areas: map,
	};

	const onAreaClick = (area) => {
		onClick(area);
	};
	const imgWidth = Math.floor(
		(height * img.presentationWidth) / img.presentationHeight
	);
	//FIXME: #13 orientation was in <div> (ImageBox)
	return (
		<div id="resize-watch" className={landingImgWrapper}>
			<ImageMapper
				src={img.originalImg}
				map={MAP}
				responsive={true}
				imgWidth={img.presentationWidth}
				parentWidth={imgWidth}
				onClick={(area) => onAreaClick(area)}
				strokeColor="rgba(0, 0, 0, 0.5)"
			/>
		</div>
	);
};

export default ImageBox;