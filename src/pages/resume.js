import React from "react";
import Resume from "../components/Resume";
import ScrollToTop from "../components/ScrollToTop";

import styled from "styled-components";

const ResumePage = () => {
  return (
    <>
      <ScrollToTop />
      <Resume />
    </>
  );
};

export default ResumePage;

export const ResumeWrapper = styled.div`
  margin-top: 80px;
`;
