import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import StyledBlackBackground from "./dark-background"
import Container from "./container"
import Logo from "../../images/assets/webelonglogo.svg"
import FBIcon from "../../images/assets/fb.svg"
import TWIcon from "../../images/assets/tw.svg"
import IGIcon from "../../images/assets/ig.svg"
import AppStore from "../../images/app_store.svg"
import PlayStore from "../../images/google_play_store.svg"

const Footer = () => {
  return (
    <StyledBlackBackground>
      <Container>
        <FooterWrapper>
          <div>
            <h4>WeBelong</h4>
            <div className="footer-left-aside">
              <ul>
                <li>
                  <a
                    href="https://holoash.com/"
                    target="_top"
                    rel="noopener noreferrer"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@holoash.com"
                    target="_top"
                    rel="noopener noreferrer"
                    //  className="second--link"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <Link to="/ambassador">Ambassador</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Use</Link>
                </li>
              </ul>
            </div>
            <Spacer size="1rem" />
            <Logo />
            <Spacer size="3rem" />
          </div>

          <div className="right-aside">
            <h4>Get the app</h4>
            <div>
              <a
                href="https://apps.apple.com/us/app/leavoice-voice-messenger/id1470220391"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppStore} alt="Download on the Appstore" />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.holoash.leavoice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStore} alt="Get it on Playstore" />
              </a>
            </div>
            <Spacer size="3rem" />
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
          </div>
        </FooterWrapper>
        <CopyRight>
          <p>&copy; 2021, weBelong from HoloAsh, Inc. All rights reserved</p>
        </CopyRight>
      </Container>
    </StyledBlackBackground>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  color: #cbcee5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3em 0;
  .footer-left-aside {
    display: flex;
    margin: 1rem 0;
    ul {
      margin-right: 2em;
    }
  }
  ul li {
    padding: 4px 0;
    list-style: none;
    * {
      color: #cbcee5;
    }
    a {
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .right-aside {
    h4 {
      margin-bottom: 1rem;
    }
    aside {
      margin-top: 1rem;
      a {
        margin-right: 1rem;
      }
    }
  }
`

const CopyRight = styled.div`
  padding: 5px 0;
  text-align: center;
  background: rgba(3, 3, 6, 0.1);
  font-size: 13px;
  color: #cbcee5;
`
const Spacer = styled.div`
  margin-top: ${props => props.size ?? "10px"};
`
