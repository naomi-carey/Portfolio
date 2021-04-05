import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/contact">LinkedIn</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/contact">LinkedIn</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/contact">LinkedIn</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to="/contact">LinkedIn</FooterLink>
              <FooterLink to="/contact">GitHub</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Logo</SocialLogo>
            <WebsiteRights>
              MyLogo © {new Date().getFullYear()}
              &nbsp; All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/wtf_is_waldo/?hl=en"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.linkedin.com/in/naomicarey00/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink
                href="https://github.com/naomi-carey"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
