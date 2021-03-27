import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import FlexContainer from "./flex-container"
import StyledBlackBackground from "./dark-background"
import { Check } from "react-feather"
import joinwB from "../../images/joinwB.png"

const TeamImage = styled("img")`
  width: 100%;
  height: auto;
  max-width: 560px;

  @media (min-width: 720px) {
    display: inline;
  }
`

const TitleNText = styled.div`
  max-width: 320px;
  margin-bottom: 1.5rem;
  div {
    display: flex;
    align-items: center;
    color: ${props => props.color ?? "white"};
    margin-bottom: 1.5rem;
    h3 {
      margin-left: 10px;
    }
  }

  p {
    color: #cbcee5;
  }
`

const Wrapper = styled.div`
  padding: 3rem 0;
`

const WhyJoin = () => {
  return (
    <StyledBlackBackground bgcolor="#1F2128">
      <Wrapper>
        <Container>
          <FlexContainer alignItems="center">
            <div>
              <TitleNText color="#7EDBC4">
                <div>
                  <Check />
                  <h3>Grow your career</h3>
                </div>
                <p>
                  Join a fast growing startup and get a chance to be among the
                  prominent community leaders.
                </p>
              </TitleNText>
              <TitleNText color="#9D7DFF">
                <div>
                  <Check />
                  <h3>Get Skills</h3>
                </div>
                <p>
                  Gain valuable experience, build your strong audience and reap
                  benefits.
                </p>
              </TitleNText>
              <TitleNText color="#FBD7FF">
                <div>
                  <Check />
                  <h3>Special gifts</h3>
                </div>
                <p>
                  Enter our giveaways for a chance to win gifts and other
                  benefits.
                </p>
              </TitleNText>
            </div>
            <TeamImage src={joinwB} alt="joinwB-team" />
          </FlexContainer>
        </Container>
      </Wrapper>
    </StyledBlackBackground>
  )
}

export default WhyJoin
