import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Space = css`
  padding: 3rem 15px;
  @media (min-width: 750px) {
    padding: 5rem 15px;
  }
  @media (min-width: 1336px) {
    padding: 6.5rem 15px;
  }
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  @media (min-width: 750px) {
    max-width: 730px;
  }
  @media (min-width: 1336px) {
    max-width: 1115px;
  }

  ${props => props.space && Space}
`
export default Container
