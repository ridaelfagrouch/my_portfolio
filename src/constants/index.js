import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  c,
  cplusplus,
  expressjs,
  nestjs,
  nextjs,
  sass,
  postgesql,
  prisma,
  wordpress,
  mariadb,
  reactnative,
  mysql,
  born2beroot,
  cub3d,
  fdf,
  ft_transcendence,
  inception,
  minishell,
  movie_landingPage,
  philosopher,
  todosApp,
  webServer,
} from "../assets";

export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "Works",
    title: "Work",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "Contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: " cplusplus",
    icon: cplusplus,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "postgresql",
    icon: postgesql,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "mariadb",
    icon: mariadb,
  },
];

const projects = [
  {
    name: "Ft_transcendence",
    description:
      "Developed an interactive online gaming platform with real-time chat integration, leveraging single-page application (SPA) design principles for enhanced user experiences.",
    tech: [
      {
        icon: typescript,
      },
      {
        icon: tailwind,
      },
      {
        icon: nextjs,
      },
      {
        icon: nestjs,
      },
      {
        icon: postgesql,
      },
      {
        icon: docker,
      },
      {
        icon: prisma,
      },
    ],
    image: ft_transcendence,
    source_code_link: "https://github.com/",
  },
  {
    name: "Inception",
    description:
      "Proficiently utilized Docker for streamlined system administration.",
    tech: [
      {
        icon: wordpress,
      },
      {
        icon: mariadb,
      },
      {
        icon: docker,
      },
      {
        icon: javascript,
      },
      {
        icon: html,
      },
      {
        icon: css,
      },
    ],
    image: inception,
    source_code_link: "https://github.com/",
  },
  {
    name: "TodosApp",
    description:
      "Created a full-stack Todos app with React Native, Express.js, and MySQL, featuring CRUD operations and real-time updates.",
    tech: [
      {
        icon: reactnative,
      },
      {
        icon: javascript,
      },
      {
        icon: css,
      },
      {
        icon: expressjs,
      },
      {
        icon: mysql,
      },
    ],
    image: todosApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "movie LandingPage",
    description:
      "Crafted an engaging movie landing page using HTML, CSS, and JavaScript.",
    tech: [
      {
        icon: javascript,
      },
      {
        icon: html,
      },
      {
        icon: css,
      },
    ],
    image: movie_landingPage,
    source_code_link: "https://github.com/",
  },
  {
    name: "WebServer",
    description:
      "Developed a high-performance custom HTTP server using C++, optimizing request-response cycles, and ensuring robust error handling.",
    tech: [
      {
        icon: cplusplus,
      },
    ],
    image: webServer,
    source_code_link: "https://github.com/",
  },
  {
    name: "Minishell",
    description:
      "Developed a custom Bash-like shell in C, enhancing command-line interactions.",
    tech: [
      {
        icon: c,
      },
    ],
    image: minishell,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cub3d",
    description: "Designed dynamic views within complex maze environments.",
    tech: [
      {
        icon: c,
      },
    ],
    image: cub3d,
    source_code_link: "https://github.com/",
  },
  {
    name: "Philosopher",
    description:
      "Successfully participated in a project involving concurrent programming and synchronization",
    tech: [
      {
        icon: c,
      },
    ],
    image: philosopher,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fdf",
    description: "Created visually stunning 3D landscape representations.",
    tech: [
      {
        icon: c,
      },
    ],
    image: fdf,
    source_code_link: "https://github.com/",
  },
  {
    name: "Born2beRoot",
    description: "Managed and optimized system configurations.",
    tech: [],
    image: born2beroot,
    source_code_link: "https://github.com/",
  },
];

export { technologies, projects };
