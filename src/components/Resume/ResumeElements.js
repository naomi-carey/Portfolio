import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResumeContainer = styled.div`
  width: 100vw;

  height: 100vh;
  position: fixed;
  padding: 24px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #010101;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 80 0;
    margin-bottom: 0px;
  }
`;

export const ResumeIcon = styled(Link)`
  height: 48px;
  margin-bottom: 24px;
`;

export const ResumeLogoBorder = styled.div`
  button {
    position: relative;
    width: 90px;
    font-size: 30px;
    height: 48px;
    ${"" /* margin-top: 80px; */}
    margin-left: 31px;
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

export const ResumeWrapper = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 32px;
`;

export const ResumeH1 = styled.h1`
  color: #009688;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-space: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  ${"" /* margin-top: 90px; */}
  user-select: none;
`;

export const ResumeImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(p) => `url(${p.src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* height:100%;
  object-fit: cover;
  margin-bottom: 10px;
  max-width: 100vw;
  @media screen and (max-width: 480px) {
    height: initial;
    width:100%
  } */
`;
