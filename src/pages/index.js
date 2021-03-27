import * as React from "react"
import AppLayout from "../components/styled-components/app-layout"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Landing from "../components/landing"

import "../styles/_global.scss"
import Banner from "../components/styled-components/Banner"
import ProgramSection from "../components/styled-components/program-section"
import ProductSection from "../components/styled-components/product-section"
import Feature from "../components/features"

const IndexPage = () => (
  <AppLayout>
    <Banner />
    <ProgramSection />
    <Feature />
    <ProductSection />
  </AppLayout>

  // <Layout>
  //   <SEO title="weBelong - A Community for people with differences" />
  //   <Landing />
  // </Layout>
)

export default IndexPage
