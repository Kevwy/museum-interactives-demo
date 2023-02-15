import * as React from "react";
import { graphql, Link } from "gatsby";
import {
	landingPage,
	exhibitScroller,
	exhibitCard,
	exhibitImageWrapper,
	exhibitInfoCard,
	exhibitTitle,
	exhibitDescription,
} from "./index.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const Home = ({ data }) => {
	const exhibitData = data.allExhibitJson.edges;
	return (
		<div className={landingPage}>
			<div>
				<div>
					<h1>AM interactives</h1>
				</div>
				<div>
					<h2>
						Auckland Museum <br /> Exhibit Database
					</h2>
				</div>
			</div>
			<div className={exhibitScroller}>
				{exhibitData.map((edge) => {
					const exhibit = edge.node;
					return (
						<div className={exhibitCard}>
							<div className={exhibitImageWrapper}>
								<GatsbyImage
									image={exhibit.image.childImageSharp.gatsbyImageData}
									layout="constrained"
									objectFit="contain"
								/>
							</div>
							<div className={exhibitInfoCard}>
								<Link to={`/${exhibit.name}/`}>
									<div className={exhibitTitle}>{exhibit.title.en}</div>
									<div className={exhibitDescription}>
										{exhibit.description.en}
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;

export const query = graphql`
	query Home {
		allExhibitJson {
			edges {
				node {
					name
					title {
						en
					}
					description {
						en
					}
					image {
						childImageSharp {
							gatsbyImageData
						}
					}
				}
			}
		}
	}
`;
