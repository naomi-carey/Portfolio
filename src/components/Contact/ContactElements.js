import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  min-height: 692px;
  ${"" /* position: fixed;  */}
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  ${"" /* overflow: hidden;  */}
  }
  background: #010101;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (min-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ContactLogoBorder = styled.div`
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

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  ${"" /* z-index: 1; */}
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (min-width: 400px) {
    padding: 32px 32px;
  }

  ${
    "" /* @media screen and (max-width: 400px) {
    padding: 20px 32px;
    margin-bottom: 100px;
    
  } */
  }
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  user-select: none;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const FormInputMessage = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  height: 150px;
  border: none;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
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

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
