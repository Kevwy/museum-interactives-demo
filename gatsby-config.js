/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
    title: `Auckland Museum Interactive Displays`,
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "exhibit",
        path: "./data/",
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-less",
  ],

}
