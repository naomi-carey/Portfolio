import React, { useState } from "react";
import Video from "../../video/black_white.mp4";
import { HeroButton } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
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
    <HeroContainer id="home">
      <HeroBg>
        {window.innerWidth > 425 && (
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Hello, I'm Naomi Carey.
        </HeroH1>
        <HeroH1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          I'm a web developer.
        </HeroH1>

        <HeroBtnWrapper>
          <HeroButton
            to="portfolio"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            View my work
            {hover ? (
              <ArrowDown
                style={{
                  transistion: "all 0.6s ease-in-out",
                  transform: `rotate(${360}deg)`,
                }}
              />
            ) : (
              <ArrowFoward />
            )}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
