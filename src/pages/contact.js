import React from "react";
import Contact from "../components/Contact";

import styled from "styled-components";

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;

export const ContactWrapper = styled.div`
  margin-top: 80px;
`;
