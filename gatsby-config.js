/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Auckland Museum Interactive Displays`,
	},

	plugins: [
		// GraphQL source
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "exhibits",
				path: "./data/",
			},
		},

		// Data type
		"gatsby-transformer-json",

		// Image transformer
		"gatsby-transformer-sharp",
		"gatsby-plugin-image", // peer dep
		"gatsby-plugin-sharp", // peer dep

		// Netlify and CMS integration
		"gatsby-plugin-netlify",
		"gatsby-plugin-netlify-cms",

		// Stylesheet
		"gatsby-plugin-purgecss",
		{
			resolve: "gatsby-plugin-sass",
			options: {
				useResolveUrlLoader: {
					options: {
						debug: true,
					},
				},
				sassOptions: {
					includePaths: [`${__dirname}`, `${__dirname}/src`],
				},
			},
		},
	],
};
