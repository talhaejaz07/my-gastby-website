exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___modified, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  // Create the paginated blog posts pages

  const postsPerPage = 3;
  const numberOfPages = Math.ceil(data.allMdx.edges.length / postsPerPage);

  for (let i = 0; i < numberOfPages; i++) {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/page-${i + 1}`,
      component: require.resolve("./src/templates/BlogLayout.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    });
  }

  // Create Single Post pages

  //   data.allMdx.edges.forEach((edge) => {
  //     const slug = edge.node.frontmatter.slug;
  //     const id = edge.node.id;

  //     actions.createPages({
  //       path: `/blog/${slug}`,
  //       component: require.resolve("./scr/templates/SinglePostLayout.js"),
  //       context: { id },
  //     });
  //   });
};
