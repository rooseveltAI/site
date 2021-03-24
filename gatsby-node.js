// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// module.exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   data.allContentfulBlogPost.edges.forEach(edge => {
//     const slug = edge.node.slug

//     actions.createPage({
//       path: `blog/${slug}`,
//       component: require.resolve(`./src/templates/blog-post.js`),
//       context: { slug: slug },
//     })
//   })
// }
