import React from "react"
import styled from "@emotion/styled"
import StyledBlackBackground from "./styled-components/dark-background"
import Container from "./styled-components/container"
import team from "../images/amb.png"
import Button from "./styled-components/button"

const Caption = styled.h1`
  color: ${props => props.color ?? "white"};
  font-size: ${props => props.fontSize ?? "1.8rem"};
  font-weight: bold;
  @media (min-width: 720px) {
    z-index: 3;
    font-size: ${props => props.fontSize ?? "3rem"};
    word-wrap: unset;
  }
`

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 0;
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 14px;
    color: #cbcee5;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
  }
`

const TeamImage = styled("img")`
  display: none;
  width: 100%;
  height: auto;
  max-width: 560px;

  @media (min-width: 720px) {
    display: inline;
  }
`

const Banner = () => {
  return (
    <StyledBlackBackground>
      <Container>
        <StyledBanner>
          <div className="wrapper">
            <Caption color="#7EDBC4">Make an Impact</Caption>
            <Caption>and connect with other Teens.</Caption>
            <p>
              Join our Ambassador program and help us build a social platform
              that brings marginalized teens together
            </p>
            <div className="buttons">
              <Button secondary={true}>Learn more</Button>
              <Button>Become an Ampassador</Button>
            </div>
          </div>
          <TeamImage src={team} alt="webelong-team" />
        </StyledBanner>
      </Container>
    </StyledBlackBackground>
  )
}

export default Banner
