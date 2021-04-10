import React from "react";
import Contact from "../components/Contact";

import styled from "styled-components";
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  return (
    <>
      <ScrollToTop />
      <Contact />
    </>
  );
};

export default ContactPage;

export const ContactWrapper = styled.div`
  margin-top: 80px;
`;
