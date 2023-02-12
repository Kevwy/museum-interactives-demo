exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(`
    {
      allExhibitJson {
        edges {
          node {
            slug
            hotspots {
              slug
            }
          }
        }
      }
    }
  `);
  results.data.allExhibitJson.edges.forEach((edge) => {
    const exhibit = edge.node;
    createPage({
      path: `/${exhibit.slug}/`,
      component: require.resolve(`./src/templates/ExhibitTemplate.js`),
      context: {
        slug: exhibit.slug,
      },
    });
  });
};
