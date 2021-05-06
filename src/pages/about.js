import React from "react";
import About from "../components/About";

import styled from "styled-components";

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;

export const AboutWrapper = styled.div`
  margin-top: 80px;
`;
