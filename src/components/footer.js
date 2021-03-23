import * as React from "react"
import { Link } from "gatsby"

import AppStore from "../images/app_store.svg"
import PlayStore from "../images/google_play_store.svg"

const Footer = () => {
  return (
    <div className="footer-component-container">
      <ul className="left-aside-ul">
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
      </ul>

      <ul className="right-aside-ul">
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
      </ul>
    </div>
  )
}

export default Footer
