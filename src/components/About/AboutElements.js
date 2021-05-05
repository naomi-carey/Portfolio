import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #010101;
`;

export const AboutLogoBorder = styled.div`
  button {
    position: relative;
    width: 90px;
    font-size: 30px;
    height: 48px;
    margin: 15px 0 15px 31px;
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
  @media not all and (hover: none) and (pointer: coarse) {
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
  }
`;

export const AboutWrapper = styled.div`
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  color: white;
  overflow: hidden;
`;

export const AboutH1 = styled.h1``;

export const AboutP = styled(motion.p)`
  width: 75%;
  font-size: 18px;
  @media screen and (min-width: 320px) {
    font-size: 16px;
  }
  @media screen and (min-width: 280px) {
    font-size: 15px;
  }
`;

export const AboutHr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-bottom: 3px solid #009688;
  margin: 1em 0;
  padding: 0;
`;
