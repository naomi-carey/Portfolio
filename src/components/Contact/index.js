import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  Container,
  QuestionWrapper,
  Form,
  ContactLogoBorder,
  FormInputMessage,
} from "./ContactElements";

const Contact = () => {
  const history = useHistory();
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
          // console.log(result.text);

          toast("Thank you!  Your email has been sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          // console.log(error.text);

          toast.error(
            "Your email was not sent successfully.  Please try again.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <ContactLogoBorder>
        <button onClick={() => history.push("/")}>
          <span style={{ fontFamily: "Dancing Script" }}>NC</span>
        </button>
      </ContactLogoBorder>
      <FormContent>
        <FormH1>Have a question or want to work together?</FormH1>
        <Form onSubmit={handleSubmit}>
          <QuestionWrapper>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput id="name" type="text" name="name" required />
          </QuestionWrapper>
          <QuestionWrapper>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput id="email" type="email" name="email" required />
          </QuestionWrapper>
          <QuestionWrapper>
            <FormLabel htmlFor="for">Message</FormLabel>
            <FormInputMessage id="message" name="message" required />
          </QuestionWrapper>
          <FormButton type="submit">Send</FormButton>
          <ToastContainer limit={1} />
        </Form>
      </FormContent>
    </Container>
  );
};

export default Contact;
