import React from "react";
import Resume from "../components/Resume";

import styled from "styled-components";

const ResumePage = () => {
  return (
    <>
      <Resume />
    </>
  );
};

export default ResumePage;

export const ResumeWrapper = styled.div`
  margin-top: 80px;
`;
