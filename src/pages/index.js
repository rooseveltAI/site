import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"

import "../styles/_global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="weBelong - A Community for people with differences" />
    <Landing />
  </Layout>
)

export default IndexPage
