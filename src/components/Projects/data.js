import Icon1 from "../../images/authxrs4.png";
import Icon2 from "../../images/safertravels2.png";
import Icon3 from "../../images/codecafe2.png";
import Icon4 from "../../images/mydocuments.svg";
import { ProjectsIcon } from "./ProjectsElements";

console.log(Icon1);

export const projects = [
  {
    image: () => <ProjectsIcon pic={Icon1} alt="Authxrs image" />,
    title: "Authxrs",
    desc: "React.js / Node.js / Styled Components",
    button: "View the site",
    link: "https://the-authors.netlify.app/",
  },
  {
    image: () => <ProjectsIcon pic={Icon2} alt="Safer Travels image" />,
    title: "Safer Travel",
    desc: "React.js / Hooks / CSS",
    button: "View the site",
    link: "https://zen-albattani-4c735b.netlify.app",
  },
  {
    image: () => <ProjectsIcon pic={Icon3} alt="Code Cafe image" />,
    title: "Code Cafe",
    desc: "JavaScript / HTML / CSS",
    button: "View the site",
    link: "https://heuristic-payne-285218.netlify.app",
  },
  {
    image: () => <ProjectsIcon pic={Icon4} alt="Documentation image" />,
    title: "Technical Documentation",
    desc: "Samples of technical documentation.",
    button: "View the site",
    link: "https://safejourneys.atlassian.net/l/c/gFWwRqAT",
  },
];
