import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #010101;
`;

export const ContactLogoBorder = styled.div`
  height: 90px;
  button {
    position: relative;
    width: 90px;
    font-size: 30px;
    height: 48px;
    margin-top: 40px;
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

export const FormContent = styled.div`
  width: -webkit-fill-available;
  min-height: -webkit-fill-available;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 16px 32px 48px 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 40px;
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  margin: 0 auto;
`;

export const FormH1 = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  user-select: none;
`;
export const FormLabel = styled(motion.label)`
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled(motion.input)`
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const FormInputMessage = styled(motion.textarea)`
  padding: 16px 16px;
  height: 150px;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const FormButton = styled(motion.button)`
  background: #009688;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  gap: 8px;
`;
