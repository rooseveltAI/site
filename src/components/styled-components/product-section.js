import React from "react"
import FlexContainer from "./flex-container"
import Container from "./container"
import thread from "../../images/thread.png"
import wB2 from "../../images/wB2.png"
import styled from "@emotion/styled"

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;
  margin: auto;
`

const StyledProductSection = styled.div`
  padding: 3rem 0;
  .image-box {
    display: flex;
  }
  .box {
    margin-top: 2.5rem;

    width: 100%;
    p {
      margin-top: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 720px) {
    .box {
      margin-top: 0;
      width: 50%;
    }
  }
`
const Heading = styled.h4`
  color: ${props => props.color ?? "black"};
  font-size: 1.3rem;
`

const Spacer = styled.div`
  margin-top: ${props => props.size ?? "10px"};
`

const ProductSection = () => {
  return (
    <StyledProductSection>
      <Container>
        <FlexContainer justify="space-between">
          <div className="image-box">
            <StyledImage src={thread} alt="thread" />
          </div>

          <div className="box">
            <Heading color="#7F5AF0">Calling all the content creators</Heading>
            <Heading>Calling all the thought leaders</Heading>
            <p>Have a passion you want to share?</p>
            <p>
              Or just feel like venting off and want a safe space to meet
              like-minded teens who get it?
            </p>

            <p>
              Join weBelong as the fast-growing app, create your own community
              and have influence on it.
            </p>

            <p>
              Post your thoughts. Join different communities and group
              chats.Build your community. Grow your base.
            </p>
          </div>
        </FlexContainer>

        <FlexContainer justify="space-between">
          <div className="box">
            <Heading color="#7F5AF0">Social media, but evolved</Heading>
            <p>A place to support and help each other.</p>
            <p>
              Not a place to impress, but a place for genuine self-expression.
            </p>
            <Spacer size="2em" />
            <Heading>Finally an algorithm on your side</Heading>
            <p>
              Our algorithm supports first time community leaders and helps more
              people discover you.
            </p>
            <p>
              So that you can focus on what matters -building meaningful
              connections.
            </p>
            <Spacer size="2rem" />
          </div>
          <div className="image-box">
            <StyledImage src={wB2} alt="thread" />
          </div>
        </FlexContainer>
      </Container>
    </StyledProductSection>
  )
}

export default ProductSection
