import React from "react"
import styled from "@emotion/styled"
import StyledBlackBackground from "./styled-components/dark-background"
import Container from "./styled-components/container"
import cnet from "../images/website/cnet.png"
import forbes from "../images/website/forbes.png"
import sr from "../images/website/sr.png"
import techcrunch from "../images/website/techcrunch.png"
import yahoo from "../images/website/techcrunch.png"

const Heading = styled.h3`
  color: #cbcee5;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
  padding: 2rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 45px;
    background: #cbcee5;
    height: 1px;
    top: 50%;
  }

  &::after {
    margin-left: 20px;
  }
  &::before {
    margin-left: -65px;
  }
`

const StyledGrayBackground = styled.div`
  background: #cbcee5;
  padding: 1rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    img {
      margin-top: 1rem;
    }

    @media (min-width: 720px) {
      flex-direction: row;
    }
  }
`

const Feature = () => {
  return (
    <>
      <StyledBlackBackground>
        <Container>
          <Heading>Featured on</Heading>
        </Container>
      </StyledBlackBackground>
      <StyledGrayBackground>
        <Container>
          <div className="wrapper">
            <img src={cnet} alt="cnet" />
            <img src={forbes} alt="forbes" />
            <img src={sr} alt="sr" />
            <img src={techcrunch} alt="techcrunch" />
            <img src={yahoo} alt="yahoo" />
          </div>
        </Container>
      </StyledGrayBackground>
    </>
  )
}

export default Feature
