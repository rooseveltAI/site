import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { Menu } from "react-feather"
import Container from "./container"
import Logo from "../../images/assets/webelonglogo.svg"
import PropTypes from "prop-types"
import StyledBlackBackground from "./dark-background"
import Button from "./button"

const Navbar = ({ siteTitle }) => {
  const [visible, setVisible] = useState(false)
  return (
    <StyledBlackBackground>
      <Container>
        <StyledNav>
          <Link to="/">
            <Logo />
          </Link>

          <MenuButton onClick={() => setVisible(prev => !prev)}>
            <Menu />
          </MenuButton>
          <LinkSection show={visible}>
            <li>
              <a href="https://holoash.typeform.com/to/cHGS6d7R">
                <Button>Become an Ambassador</Button>
              </a>
            </li>
          </LinkSection>
        </StyledNav>
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

const StyledNav = styled("div")`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  div {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`

const LinkSection = styled("ul")`
  display: ${props => (props.show ? "block" : "none")};
  width: 100%;
  transition: 0.23s linear;
  li {
    list-style: none;
  }
  @media (min-width: 834px) {
    display: inline-flex;
    width: auto;
    margin-top: 8px;
    align-items: center;
  }
`

const MenuButton = styled("button")`
  display: none;
  border: none;
  border: none;
  background: #ffffff00;
  color: white;
  outline-color: var(--Purple1_Secondary);
  font-size: 1.1em;
  margin-top: 10px;
  padding: 5px 15px;
  line-height: 100%;
  transition: 0.23s ease-out;
  @media (max-width: 834px) {
    display: inline;
    :hover {
      background: #ffffff2a;
    }
  }
`
