import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};

  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoBorder = styled.div`
  button {
    position: relative;
    width: 90px;
    font-size: 30px;
    height: 48px;

    margin-top: 15px;
    background: none;

    border: none;
    cursor: pointer;
    color: white;
    padding: 0;

    box-sizing: content-box;
    border: 2px solid transparent;
    &:focus {
      outline: none;
    }
  }

  button::before,
  button::after,
  span::before,
  span::after {
    display: block;
    content: "";
    width: 20px;
    height: 10px;
    position: absolute;
  }

  button::before {
    top: -2px;
    left: -2px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition: 0.5s all;
  }
  button::after {
    top: -2px;
    right: -2px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transition: 0.5s all;
  }
  span::before {
    bottom: -2px;
    left: -2px;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    transition: 0.5s all;
  }
  span::after {
    bottom: -2px;
    right: -2px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transition: 0.5s all;
  }

  button:hover::before,
  button:hover::after {
    width: 50px;
    height: 50px;
  }

  button:hover span::before,
  button:hover span::after {
    width: 50px;
    height: 50px;
  }
`;

export const LogoImage = styled.img`
  width: 100px;

  position: absolute;
  top: 15px;
  left: 5%;
  z-index: 101;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #009688;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #009688;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
