import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
// import CtaButton from "./cta"
import "./styles/aside.scss"

export default function RightAside(props) {
  return (
    <div className="right-aside-container">
      <div>
        <h3>{props.rightTitle}</h3>
        <p>{props.rightDesc}</p>
        {/* <CtaButton /> */}
        <div className="download-buttons">
          <a
            href="https://apps.apple.com/us/app/leavoice-voice-messenger/id1470220391"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.Appstore} alt="Download on the Appstore" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.holoash.leavoice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.Playstore} alt="Get it on Playstore" />
          </a>
        </div>
      </div>

      <div className="right-image-wrapper">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  )
}
