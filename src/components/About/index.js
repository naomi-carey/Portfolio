import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import {
  AboutContainer,
  AboutLogoBorder,
  AboutWrapper,
  AboutH1,
  AboutP,
  AboutHr,
} from "./AboutElements";
// import CvIcon from "../../images/cv3.png";

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
    },
  },
};

function About() {
  const history = useHistory();
  return (
    <AboutContainer id="about">
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <AboutLogoBorder>
          <button onClick={() => history.push("/")}>
            <span style={{ fontFamily: "Dancing Script" }}>NC</span>
          </button>
        </AboutLogoBorder>
      </motion.div>
      <AboutWrapper>
        <motion.div
          className="base container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AboutH1>About me</AboutH1>
          <AboutHr />
        </motion.div>

        <AboutP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          I am a web developer and technical writer living in Denver, CO. I have
          over 15+ years of IT experience in roles such as system support
          engineer, technical writer, and project manager.
        </AboutP>

        <AboutP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1.7 }}
        >
          I am interested in Human Experience Design rather User Experience
          Design. Human Experience Design considers the needs of users,
          customers, active stakeholders & passive stakeholders.
        </AboutP>

        <AboutP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 2.7 }}
        >
          When I'm not developing and building things, you can find me running,
          hiking, cooking, spending time with my family or tossing the ball with
          my dog "Waldo".
        </AboutP>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
