import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.45rem;
  background: transparent;
  padding: 25px;
`

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`
const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-left: 15px;
  color: black;
  text-decoration: none;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Content>
      <NavLink to="/">{siteTitle}</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/historias">Histórias</NavLink>
    </Content>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
