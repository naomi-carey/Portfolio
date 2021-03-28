import React, { useState } from "react";
import Video from "../../video/whitedyesm.mp4";
import { HeroButton } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  // HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowDown,
} from "./HeroElements";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello, I'm Naomi.</HeroH1>
        <HeroH1>I'm a web developer.</HeroH1>
        {/* <HeroP>Contact Me</HeroP> */}
        <HeroBtnWrapper>
          <HeroButton
            to="portfolio"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            View my work {hover ? <ArrowDown /> : <ArrowFoward />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
