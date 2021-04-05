import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import teens from "../../images/teens.png"
import Button from "./button"

const ProgramSection = () => {
  return (
    <StyledBackgroundImage>
      <div className="overlay">
        <Container space={true}>
          <StyledProgram>
            <div className="wrapper">
              <Title>
                What is <span>Ambassador Program?</span>
              </Title>

              <div className="light-wrapper">
                <p>
                  weBelong Ambassador Program is a unique opportunity to help
                  build a movement of self-love, compassion and connecting
                  like-minded people together.{" "}
                </p>
                <p>
                  weBelong aspires to build a social platform where marginalized
                  teens thrive and share their experiences.
                </p>
                <p>
                  By joining the Ambassador Program, you can grow an audience
                  and build a community of like-minded friends. To address that,
                  we need your help to make it work.
                </p>
              </div>
              <div className="buttons">
                <a href="https://holoash.typeform.com/to/cHGS6d7R">
                  <Button>Become an Ambassador</Button>
                </a>
              </div>
            </div>
          </StyledProgram>
        </Container>
      </div>
    </StyledBackgroundImage>
  )
}

export default ProgramSection

const StyledBackgroundImage = styled.div`
  min-height: 50vh;
  background: url(${teens}) no-repeat;
  background-size: cover;
  object-position: bottom;

  .overlay {
    background: rgba(3, 3, 3, 0.8);
  }
`
const Title = styled.h2`
  font-size: 1.5em;
  color: white;
  span {
    color: #9d7dff;
  }

  @media (min-width: 740px) {
    font-size: 2.5em;
    text-align: center;
  }
`

const StyledProgram = styled.div`
  display: flex;
  .wrapper {
    width: 100%;
  }

  .light-wrapper {
    padding: 5px;
    background: #fbd7ff14;
    border-radius: 10px;

    margin: 2rem auto;
    p {
      padding: 1rem;
      color: white;
    }
  }

  @media (min-width: 740px) {
    .wrapper {
      margin: 0 auto;
      max-width: 800px;
      .buttons {
        text-align: center;
      }
    }
    .light-wrapper {
      padding: 15px;
      width: 80%;
    }
  }
`
