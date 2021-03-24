// import * as React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// // import { Link } from "gatsby"

// import "../styles/blog.scss"

// const BlogPost = ({ data }) => {
//   const post = data.contentfulBlogPost

//   return (
//     <Layout>
//       <SEO title={post.title} />

//       <div className="blog-post-container">
//         <div>
//           <h1>{post.title}</h1>

//           <span className="author-wrapper">
//             <img src={post.author.image.fluid.src} alt={post.author.name} />{" "}
//             <p>{post.author.name}</p>{" "}
//             <span style={{ margin: "0 10px" }}>·</span> <p>{post.createdAt}</p>
//           </span>
//           <div style={{ width: "100%", height: "100%" }}>
//             <img
//               style={{ borderRadius: "10px", width: "100%", height: "100%" }}
//               src={post.heroImage.fluid.src}
//               alt={post.title}
//             />
//           </div>
//         </div>

//         <div
//           style={{ paddingTop: "3em" }}
//           dangerouslySetInnerHTML={{ __html: post.body.body }}
//         />
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query BlogPost($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       id
//       title
//       createdAt(formatString: "MMM DD, YYYY")
//       body {
//         body
//       }
//       heroImage {
//         fluid(maxWidth: 1000) {
//           src
//         }
//       }
//       author {
//         image {
//           fluid(maxWidth: 30) {
//             src
//           }
//         }
//         name
//       }
//     }
//   }
// `
// export default BlogPost
