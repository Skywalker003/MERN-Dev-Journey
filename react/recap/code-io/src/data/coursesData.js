import { html, css, js, react, nodejs, express } from "../assets";

const courses = [
  {
    id: 1,
    title: "HTML",
    image: html,
    description:
      "Learn the foundation of web development by building structured and semantic web pages using HTML. Perfect for beginners starting their frontend journey.Beginner",
    difficulty: "Easy",
    level: "Beginner",
  },
  {
    id: 2,
    title: "CSS",
    image: css,
    description:
      "Learn how to style and design websites using CSS. Work with layouts, colors, fonts, and responsive design to create visually appealing pages.",
    difficulty: "Easy",
    level: "Beginner",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
    image: js,
    description:
      "Learn JavaScript fundamentals to make websites interactive. Understand variables, functions, conditions, loops, and DOM manipulation.",
    difficulty: "Medium",
    level: "Beginner → Intermediate",
  },
  {
    id: 4,
    title: "REACT",
    image: react,
    description:
      "Learn React to build fast and reusable user interfaces. Understand components, props, state, and modern frontend development practices.",
    difficulty: "Medium",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "NODE JS",
    image: nodejs,
    description:
      "Learn Node.js to run JavaScript on the server and build backend applications, handle requests, then create simple APIs.",
    difficulty: "Medium",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "EXPRESS JS",
    image: express,
    description:
      "Learn Express.js to build RESTful APIs and backend services. Learn routing, middleware, and server-side application structure.",
    difficulty: "Medium",
    level: "Intermediate",
  },
];

export { courses };