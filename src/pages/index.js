import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Index of Posts</h1>
    <p>this is supposed to be an index of posts!</p>
    <ul>
      {
        data.allMarkdownRemark.edges.map(post => <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title} {post.node.frontmatter.published}</Link></li>)
      }
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query indexQuery {
      allMarkdownRemark(
        limit: 10
        sort: { fields: [frontmatter___date] order: ASC}
        filter: {
          frontmatter: { published: { eq: true } }
        }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  path
                  published
                  date
                }
              }
            }
            }
    }
`;

export default IndexPage
