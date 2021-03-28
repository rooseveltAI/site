// // /**
// //  * Layout component that queries for data
// //  * with Gatsby's useStaticQuery component
// //  *
// //  * See: https://www.gatsbyjs.com/docs/use-static-query/
// //  */

// import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import "@fontsource/open-sans"
// import "@fontsource/open-sans/800.css"
// import "@fontsource/nunito"

// import Header from "./header"
// // import Footer from "./footer"

// import Logo from "../images/assets/webelonglogo.svg"
// import FBIcon from "../images/assets/fb.svg"
// import TWIcon from "../images/assets/tw.svg"
// import IGIcon from "../images/assets/ig.svg"

// import "./layout.scss"
// import "./styles/footer.scss"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           // maxWidth: 960,
//           // padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `2rem`,
//           }}
//           className="footer-container"
//         >
//           {/* <Footer /> */}
//           <div className="footer-line" />
//           <section className="footer-credits-wrapper">
//             <Logo />
//             <p>
//               © {new Date().getFullYear()}, weBelong from HoloAsh, Inc. All
//               rights reserved
//             </p>
//             <aside className="icons-wrapper">
//               <a
//                 href="https://twitter.com/webelong_app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <TWIcon width="24px" />
//               </a>

//               <a
//                 href="https://www.facebook.com/webelongapp/?ref=py_c"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FBIcon width="24px" />
//               </a>

//               <a
//                 href="https://www.instagram.com/webelongapp/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <IGIcon width="24px" />
//               </a>
//             </aside>
//           </section>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
