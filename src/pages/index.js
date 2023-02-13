import * as React from "react";
import { graphql } from "gatsby";
import { landingPage, logoBox } from "./index.module.scss";

const Home = ({ data }) => {
	const exhibitData = data.allExhibitJson.edges;
	return (
		<div className={landingPage}>
			<div className={logoBox}>
				<div>
					<h1>AM interactives</h1>
				</div>
				<div>
					<h2>
						Auckland Museum <br /> Exhibit Database
					</h2>
				</div>
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
					title {
						en
					}
					description {
						en
					}
				}
			}
		}
	}
`;
