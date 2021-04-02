import React from "react"
import styled from "@emotion/styled"
import Container from "./container"
import CollapsibleCard from "../collapse-card"
import StyledBlackBackground from "./dark-background"
import { Link } from "gatsby"

const StyledFaq = () => {
  return (
    <StyledBlackBackground>
      <Wrapper>
        <Container space={true}>
          <Heading color="#CBCEE5">FAQ for weBelong Ambassador</Heading>
          <CollapsibleCard title="Q: How can I apply for Ambassador Program?">
            <p>
              A: Thank you for your interest in joining the team! Please file
              all applications to our <Link to="">Typeform</Link> and we’ll
              contact you soon.
            </p>
          </CollapsibleCard>
          <CollapsibleCard title="Q: Can I refer a friend to join Ambassador Program and get perks?">
            <p>
              A: We always appreciate a referral! Feel free to onboard other
              friends and let us know. <Link to="">Here's the link</Link>
            </p>
          </CollapsibleCard>
          <CollapsibleCard title="Q: Can I use the app and build my community for free?">
            <p>
              A: weBelong app is free download. We don’t have any ads so that we
              can provide you a great user experience and full privacy. So, you
              can rest assured.
            </p>
          </CollapsibleCard>
          <CollapsibleCard title="Q: How can I reach you?">
            <p>
              A: If you have any further questions or want to get in touch, you
              can send us an email at{" "}
              <a href="mailto:info@holoash.com">info@holoash.com</a>
            </p>
          </CollapsibleCard>
        </Container>
      </Wrapper>
    </StyledBlackBackground>
  )
}

export default StyledFaq

const Wrapper = styled.div`
  padding: 5rem 0;
  padding-bottom: 1em;
  color: #cbcee5;
  a {
    color: #9d7dff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Heading = styled.h4`
  color: ${props => props.color ?? "black"};
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`
