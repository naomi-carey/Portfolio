import React, { useState } from "react";

import {
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Container,
  Icon,
  Form,
  ContactLogoBorder,
  FormInputMessage,
} from "./ContactElements";

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <ContactLogoBorder>
              <button>
                <span style={{ fontFamily: "Dancing Script" }}>NC</span>
              </button>
            </ContactLogoBorder>
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Have a question or want to work together?</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput id="name" type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput id="email" type="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputMessage id="message" required />
              <FormButton type="submit">{status}</FormButton>
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
