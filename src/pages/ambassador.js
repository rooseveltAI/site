import * as React from "react"
import SEO from "../components/seo"

import Logo from "../images/assets/webelonglogo.svg"
import AmbassadorImage from "../images/amb.png"

import Footer from "../components/footer"

import FBIcon from "../images/assets/fb.svg"
import TWIcon from "../images/assets/tw.svg"
import IGIcon from "../images/assets/ig.svg"

import "../styles/ambassador.scss"
import Feature from "../components/styled-components/features"
import ProductSection from "../components/styled-components/product-section"
import WhyJoin from "../components/styled-components/why-join"
import ProgramSection from "../components/styled-components/program-section"
import StyledFaq from "../components/styled-components/styled-faq"
import StyledBlackBackground from "../components/styled-components/dark-background"
import Navbar from "../components/styled-components/navbar"

const Ambassador = () => (
  <body id="ambassador-page">
    <SEO title="Ambassador" />

    {/*HEADER */}

    <Navbar />

    <StyledBlackBackground>
      <div className="amb-header-container">
        <div className="aside-text-content">
          <h1 className="amb-h1">
            Make an Impact
            <br />
            <span>and connect with other Teens.</span>
          </h1>
          <p>
            Join our Ambassador program and help us build a social platform that
            brings marginalized teens together
          </p>
          <div className="buttons">
            <a href="#faq">
              <button className="button-purple-stroke">Learn more</button>
            </a>
            <a href="https://holoash.typeform.com/to/cHGS6d7R">
              <button className="button-green-fill">
                Become an Ambassador
              </button>
            </a>
          </div>
        </div>

        <div className="aside-background">
          <img src={AmbassadorImage} alt="Ambassadors" />
        </div>
      </div>
    </StyledBlackBackground>

    <main>
      {/*PROGRAM */}
      <ProgramSection />

      {/*FEATURE */}
      <Feature />

      {/*PRODUCT SECTION */}
      <ProductSection />

      {/*WHY JOIN */}
      <WhyJoin />

      {/*FAQ */}
      <StyledFaq />
    </main>

    <footer className="footer-container">
      <Footer />
      <div className="footer-line" />
      <section className="footer-credits-wrapper">
        <Logo />
        <p>
          © {new Date().getFullYear()}, weBelong from HoloAsh, Inc. All rights
          reserved
        </p>
        <aside className="icons-wrapper">
          <a
            href="https://twitter.com/webelong_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TWIcon width="24px" />
          </a>

          <a
            href="https://www.facebook.com/webelongapp/?ref=py_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FBIcon width="24px" />
          </a>

          <a
            href="https://www.instagram.com/webelongapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IGIcon width="24px" />
          </a>
        </aside>
      </section>
    </footer>
  </body>
)

export default Ambassador
