import Icon1 from "../../images/authxrs4.png";
import Icon2 from "../../images/safertravels2.png";
import Icon3 from "../../images/codecafe2.png";
import Icon4 from "../../images/mydocuments.svg";
import { ProjectsIcon } from "./ProjectsElements";
export const projects = [
  {
    image: () => <ProjectsIcon src={Icon1} alt="donotforgetalt" />,
    title: "I AM FROM JSON",
    desc: "React.js / Node.js / Styled Components",
    button: "View the site",
    link: "https://the-authors.netlify.app/",
  },
  {
    image: () => <ProjectsIcon src={Icon2} alt="donotforgetalt" />,
    title: "Safer Travel",
    desc: "React.js / Hooks / CSS",
    button: "View the site",
    link: "https://zen-albattani-4c735b.netlify.app",
  },
  {
    image: () => <ProjectsIcon src={Icon3} alt="donotforgetalt" />,
    title: "Code Cafe",
    desc: "JavaScript / HTML / CSS",
    button: "View the site",
    link: "https://heuristic-payne-285218.netlify.app",
  },
  {
    image: () => <ProjectsIcon src={Icon4} alt="donotforgetalt" />,
    title: "Technical Documentation",
    desc: "Samples of technical documentation.",
    button: "View the site",
    link: "https://zen-albattani-4c735b.netlify.app",
  },
];
