import React from "react"
import styled from "@emotion/styled"

const StyledFlex = styled("div")`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: ${({ justify }) => justify || "space-between"};

  @media (min-width: 720px) {
    margin-top: 8.5rem;
  }
`

const FlexContainer = ({ children, justify }) => {
  return <StyledFlex justify={justify}>{children}</StyledFlex>
}

export default FlexContainer
