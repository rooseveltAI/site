import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import GooglePlay from "../images/assets/google_play_store.svg"
import AppStore from "../images/assets/app_store.svg"
import Logo from "../images/assets/webelonglogo.svg"
import { FileText, Menu } from "react-feather"
import "./styles/header.scss"
import Container from "./styled-components/container"

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <div className="header-background">
      <Container>
        <header
        // style={{
        //   background: `rgba(3, 3, 6, 0.9)`,
        //   position: `fixed`,
        //   zIndex: 2,
        //   width: `100%`,

        //   // marginBottom: `1.45rem`,
        // }}
        >
          {/* <div 
    // style={{
    //   margin: `0 auto`,
    //   maxWidth: 1115,
    //   padding: `1rem`,
    //   display: `flex`,
    //   justifyContent: `space-between`,
    //   alignItems: `center`,
    // }}
    >
    */}
          <h1>
            <Link
              to="/"
              // style={{
              //   color: `white`,
              //   textDecoration: `none`,
              // }}
            >
              <Logo />
            </Link>
          </h1>

          <button className="menu-btn">
            <Menu />
          </button>

          <div className="right-nav-container">
            <div className="nav-container">
              <Link to="/blog" className="blog-link">
                <p className="read-blog-link">
                  Read our blog{" "}
                  <FileText
                  // style={{
                  //   strokeWidth: "1",
                  //   margin: "0 5px",
                  //   width: "20",
                  //   height: "20",
                  // }}
                  />
                </p>
              </Link>
              <ul style={{ margin: 0 }} className="button-container">
                <li className="button-wrapper">
                  <span>Get the weBelong app</span>
                  <ul className="dropdown">
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.holoash.leavoice"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GooglePlay />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://apps.apple.com/us/app/leavoice-voice-messenger/id1470220391"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AppStore />{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </header>
      </Container>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
