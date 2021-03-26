import * as React from "react"
import AppLayout from "../components/app-layout"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Landing from "../components/landing"

import "../styles/_global.scss"
import Navbar from "../components/navbar"
import Banner from "../components/Banner"
import ProgramSection from "../components/program-section"

const IndexPage = () => (
  <AppLayout>
    <Banner />
    <ProgramSection />
  </AppLayout>

  // <Layout>
  //   <SEO title="weBelong - A Community for people with differences" />
  //   <Landing />
  // </Layout>
)

export default IndexPage
