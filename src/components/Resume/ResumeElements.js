import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #010101;
`;

export const ResumeLogoBorder = styled.div`
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
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResumeImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(p) => `url(${p.src})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
