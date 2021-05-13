import React from "react";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";

import styled from "styled-components";

const AboutPage = () => {
  return (
    <>
      <ScrollToTop />
      <About />
    </>
  );
};

export default AboutPage;

export const AboutWrapper = styled.div`
  margin-top: 80px;
`;
