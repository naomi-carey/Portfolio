import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResumeContainer = styled.div`
  ${"" /* min-height: 750px; */}
  ${"" /* min-height: 100vh;
  min-width: 100vw; */}
  width: 100vw;
  height: 100vh;
  position: fixed;
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

export const ResumeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  ${"" /* padding-top: 100px; */}

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    margin-top: 16px;
  }

  @media screen and (min-width: 480px) {
    margin-left: 16px;
    margin-top: 10px;
  }
`;

export const ResumeIcon = styled(Link)`
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

export const ResumeImage = styled.img`
  height: 747px;
  width: 625px;
  object-fit: cover;
  margin-bottom: 10px;
  max-width: 100vw;
  max-height: 100vh;

  @media screen and (max-width: 768px) {
    height: 745px;
    width: 600px;
  }

  @media screen and (max-width: 668px) {
    height: 595px;
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    height: 450px;
    width: 350px;
    padding-top: 20px;
  }
`;
