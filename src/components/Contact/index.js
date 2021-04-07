import React from "react";
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
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Home</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Have a question or want to work together?</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput type="email" required />
              <FormButton type="submit">Submit</FormButton>
              {/* <Text>Forgot password</Text> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
