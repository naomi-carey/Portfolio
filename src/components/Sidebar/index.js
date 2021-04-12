import React from "react";

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="work history" onClick={toggle}>
            Work History
          </SideBarLink>
          <SideBarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/contact">Contact Me</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
