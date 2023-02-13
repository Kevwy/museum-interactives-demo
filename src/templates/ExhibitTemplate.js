import * as React from "react";
import { graphql } from "gatsby";
import ExhibitContextProvider from "../utils/ExhibitContextProvider";

import "./templates.module.scss"

import ExhibitPage from "../components/ExhibitPage";

const ExhibitTemplate = ({ data }) => {
	return (
		<ExhibitContextProvider>
			<ExhibitPage data={data} />
		</ExhibitContextProvider>
	);
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
				orientation
			}
			image {
				childImageSharp {
					fluid {
						originalImg
						presentationWidth
						presentationHeight
					}
				}
			}
			map {
				childrenMapJson {
					name
					id
					shape
					coords
				}
			}
			orientation
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
						presentationWidth
						presentationHeight
					}
				}
			}
			imageMap
		}
	}
`;
*/