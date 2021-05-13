import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1.0,
    },
  },
};

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
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 120,
        }}
      >
        <ContactLogoBorder>
          <button onClick={() => history.push("/")}>
            <span style={{ fontFamily: "Dancing Script" }}>NC</span>
          </button>
        </ContactLogoBorder>
      </motion.div>
      <FormContent>
        <motion.div
          className="base container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FormH1>Have a question or want to work together?</FormH1>
        </motion.div>
        <Form onSubmit={handleSubmit}>
          <QuestionWrapper>
            <FormLabel
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.2, duration: 1.2 }}
              id="name"
              type="text"
              name="name"
              required
              htmlFor="for"
            >
              Name
            </FormLabel>

            <FormInput
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.2, duration: 1.2 }}
              id="name"
              type="text"
              name="name"
              required
            />
          </QuestionWrapper>
          <QuestionWrapper>
            <FormLabel
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.4, duration: 1.4 }}
              htmlFor="for"
            >
              Email
            </FormLabel>

            <FormInput
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.4, duration: 1.4 }}
              id="email"
              type="email"
              name="email"
              required
            />
          </QuestionWrapper>
          <QuestionWrapper>
            <FormLabel
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.6, duration: 1.6 }}
              htmlFor="for"
            >
              Message
            </FormLabel>

            <FormInputMessage
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", delay: 1.6, duration: 1.6 }}
              id="message"
              name="message"
              required
            />
          </QuestionWrapper>
          <FormButton
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 1.7, duration: 1.7 }}
            id="message"
            name="message"
            required
            type="submit"
          >
            Send
          </FormButton>

          <ToastContainer limit={1} />
        </Form>
      </FormContent>
    </Container>
  );
};

export default Contact;
