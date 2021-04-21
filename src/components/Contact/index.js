import emailjs from "emailjs-com";

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ch2q1dr",
        "template_f7cysu9",
        e.target,
        "user_YwOT6EWCIhhCdmqRdSOBg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
              <FormInput id="name" type="text" name="name" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput id="email" type="email" name="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInputMessage id="message" name="message" required />
              {/* <FormButton type="submit">{status}</FormButton> */}
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
