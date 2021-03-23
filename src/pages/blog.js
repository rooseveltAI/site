import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

import "../styles/blog.scss"

const BlogList = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <div className="page-headers blog-header-image">
      <h1>Blog</h1>
    </div>

    {data.allContentfulBlogPost.nodes.map(node => {
      return (
        <div key={node.id} className="blog-view-container">
          <div style={{ width: "100%", height: "100%" }}>
            <img
              style={{ borderRadius: "10px" }}
              src={node.heroImage.fluid.src}
              alt={node.title}
            />
          </div>

          <div style={{ width: "100%", height: "100%" }}>
            <h3>{node.title}</h3>
            <p>{node.description.description}</p>

            <Link to={`/blog/${node.slug}`}>Read more</Link>

            <span className="author-wrapper">
              <img src={node.author.image.fluid.src} alt={node.author.name} />{" "}
              <p>{node.author.name}</p>{" "}
              <span style={{ margin: "0 10px" }}>·</span>{" "}
              <p>{node.createdAt}</p>
            </span>
          </div>
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allContentfulBlogPost {
      nodes {
        id
        slug
        title
        createdAt(formatString: "MMM DD, YYYY")
        description {
          description
        }
        heroImage {
          fluid(maxWidth: 500) {
            src
          }
        }
        author {
          image {
            fluid(maxWidth: 30) {
              src
            }
          }
          name
        }
      }
    }
  }
`
export default BlogList
