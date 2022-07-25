import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import { SectionWrapper, P, H2 } from "../components";

const BlogLayout = ({ pageContext, data }) => {
  const ski = pageContext.skip;
  const lim = pageContext.limit;
  const postsRawData = useStaticQuery(
    graphql`
      query allPageQuery($ski: Int!, $lim: Int!) {
        allMdx(
          skip: $ski
          limit: $lim
          sort: { fields: frontmatter___modified, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                modified(formatString: "DD MMMM, YYYY")
                excerpt
                featureImage {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: WEBP
                      width: 1000
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const { currentPage, numberOfPages } = pageContext;

  let isFirst;
  if (currentPage === 1) {
    isFirst = true;
  } else {
    isFirst = false;
  }
  console.log(isFirst);

  let isLast;
  if (currentPage === numberOfPages) {
    isLast = true;
  } else {
    isLast = false;
  }

  let prevPage;
  if (currentPage - 1 === 1) {
    prevPage = "/blog";
  } else {
    prevPage = `/blog/page-${currentPage - 1}`;
  }

  let nextPage = `/blog/page-${currentPage + 1}`;

  const posts = postsRawData.allMdx.edges.map(nodeFormatting);

  function nodeFormatting(edge) {
    return {
      title: edge.node.frontmatter.title,
      excerpt: edge.node.frontmatter.excerpt,
      slug: edge.node.frontmatter.slug,
      modified: edge.node.frontmatter.modified,
      // featureImage: edge.node.frontmatter.featureImage.childrenImageSharp.map(
      //   (img) => img
      // ),
    };
  }

  return (
    <SectionWrapper>
      <BlogHeroGrid>
        {posts.map((post, index) => {
          return (
            <div className="post" key={index}>
              <Link className="image link" to={`/blog/${post.slug}`}>
                <GatsbyImage
                  className="feature-image"
                  image={post.featureImage}
                  alt={post.title}
                />
              </Link>
              <div className="description">
                <P>
                  <b>Last Modified: </b>
                  {post.modified}
                </P>
                <Link className="link" to={`/blog/${post.slug}`}>
                  <H2>{post.title}</H2>
                </Link>
                <P>{post.excerpt}</P>
                <Link className="link" to={`/blog/${post.slug}`}>
                  <P color="accent400">Read more {">>"} </P>
                </Link>
              </div>
            </div>
          );
        })}
      </BlogHeroGrid>
    </SectionWrapper>
  );
};

const BlogHeroGrid = styled.div`
  display: grid;

  .link {
    text-decoration: none;
  }

  .post {
    background-color: ${(props) => props.theme.color.background100};
    margin-top: ${(props) => props.theme.spacing.large};
    margin-bottom: ${(props) => props.theme.spacing.large};
    border-radius: ${(props) => props.theme.spacing.small};

    display: grid;
    grid-template-columns: 40rem 1fr;
    gap: ${(props) => props.theme.spacing.xSmall};
  }

  .feature-image {
    border-radius: ${(props) => props.theme.spacing.small};
  }

  .description {
    padding: ${(props) => props.theme.spacing.regular};
  }

  ${(props) => props.theme.breakpoint.tablet} {
    .post {
      grid-template-columns: 1fr;
    }
  }
`;

// const pageQuery = graphql`
//   query allPageQuery($skip: Int!, $limit: Int!) {
//     allMdx(
//       skip: $skip
//       limit: $limit
//       sort: { fields: frontmatter___modified, order: DESC }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             slug
//             modified(formatString: "DD MMMM, YYYY")
//             excerpt
//             featureImage {
//               childImageSharp {
//                 gatsbyImageData(
//                   placeholder: BLURRED
//                   formats: WEBP
//                   width: 1000
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogLayout;
