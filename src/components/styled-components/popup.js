import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import GooglePlay from "../../images/assets/google_play_store.svg"
import AppStore from "../../images/assets/app_store.svg"
import { FileText } from "react-feather"

const Popup = ({ setVisible }) => {
  const disableVisibility = e => {
    e.stopPropagation()
    if (e.target.id === "popup") {
      setVisible(false)
    }
  }

  return (
    <PopupWrapper onClick={disableVisibility} id="popup">
      <Wrapper>
        <Link to="/blog">
          <p className="read-blog-link">
            Read our blog{" "}
            <FileText
              style={{
                strokeWidth: "1",
                margin: "0 5px",
                width: "20",
                height: "20",
              }}
            />
          </p>
        </Link>
        <h3>Get the app</h3>
        <StyledAnchor
          href="https://play.google.com/store/apps/details?id=com.holoash.leavoice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GooglePlay />
        </StyledAnchor>
        <StyledAnchor
          href="https://apps.apple.com/us/app/leavoice-voice-messenger/id1470220391"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppStore />
        </StyledAnchor>
      </Wrapper>
    </PopupWrapper>
  )
}

export default Popup

const PopupWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: rgba(3, 3, 6, 0.8);
`

const Wrapper = styled.div`
  margin: auto;
  width: 300px;
  background: var(--Purple1_Secondary);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;

  h3 {
    color: white;
  }
`
const StyledAnchor = styled.a`
  text-decoration: none;
  margin: 1rem auto;
`
