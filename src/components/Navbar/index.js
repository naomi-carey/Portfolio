import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 800) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Home
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="work history"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Work History
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Portfolio
              </NavLinks>
            </NavItem>
            <NavItem>
              {/* <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact
              </NavLinks> */}
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
