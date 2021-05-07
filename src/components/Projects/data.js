import Icon1 from "../../images/authxrs1.png";
import Icon2 from "../../images/safertravels6.png";
import Icon3 from "../../images/beats3.png";
import Icon4 from "../../images/mydocuments1.png";
import { ProjectsIcon } from "./ProjectsElements";

console.log(Icon1);

export const projects = [
  {
    image: () => <ProjectsIcon pic={Icon1} alt="Authxrs image" />,
    title: "Authxrs",
    desc:
      "Non profit publishing house, offering books, podcasts and short stories.  Project built with React, Node.js, Hooks & Styled Components.",

    button: "View the site",
    link: "https://the-authors.netlify.app/",
  },
  {
    image: () => <ProjectsIcon pic={Icon2} alt="Safer Travels image" />,
    title: "Safer Travel",
    desc:
      "COVID travel application, offering latest statistics and airline tickets.  Project built with React, JavaScript, CSS while utilizing multiple APIs.",
    button: "View the site",
    link: "https://safe-travels.netlify.app/",
  },
  {
    image: () => <ProjectsIcon pic={Icon3} alt="Code Cafe image" />,
    title: "Beats Music",
    desc:
      "Music player app offering ChillHop music.  Project built with React, JavaScript, Hooks & SCSS.",
    button: "View the site",
    link: "https://beats-music-player.netlify.app/",
  },
  {
    image: () => <ProjectsIcon pic={Icon4} alt="Documentation image" />,
    title: "Technical Documentation",
    desc: "Samples of technical documentation.",
    button: "See my Github",
    link: "https://github.com/naomi-carey/Stripe-React-FE-Docs",
  },
];
