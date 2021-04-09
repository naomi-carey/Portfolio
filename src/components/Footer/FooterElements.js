import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { BsChevronDoubleUp } from "react-icons/bs";

// const rotate = keyframes`
// from {
//   transform: rotate(0deg);
// }

// to {

//   transform: rotate(360deg);
// }

// `;

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transistion: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialChevronWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.div`
  color: #8f9aa7;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px; 
${"" /* background: #262f38; */}
  padding: 3px;
  
 

 
  }

  &:hover {
    background: #fff;
    color: black;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
    ${"" /* animation: ${rotate} 2s linear infinite; */}

    
  }
`;

export const CheveronUpIcon = styled(BsChevronDoubleUp)`
  color: #fff;
  padding: 3px;

  &:hover {
    background: #fff;
    color: black;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  ${"" /* &:hover {
    color: #009688;
    transistion: 0.3s ease-out;
  } */}
`;
