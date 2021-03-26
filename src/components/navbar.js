import * as React from "react"
import styled from "@emotion/styled"
import Container from "./styled-components/container"
import Logo from "../images/assets/webelonglogo.svg"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import StyledBlackBackground from "./styled-components/dark-background"
import Button from "./styled-components/button"

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`

const Navbar = ({ siteTitle }) => {
  return (
    <StyledBlackBackground>
      <Container>
        <StyledNavbar>
          <Link to="/">
            <Logo />
          </Link>

          <Button>Become an Ampassador</Button>
        </StyledNavbar>
      </Container>
    </StyledBlackBackground>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
