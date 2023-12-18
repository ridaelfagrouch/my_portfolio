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
    title: "Works",
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

export const navLinksFr = [
  {
    id: "Home",
    title: "Accueil",
  },
  {
    id: "About",
    title: "À Propos",
  },
  {
    id: "Experience",
    title: "Expérience",
  },
  {
    id: "Works",
    title: "Travaux",
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
        href: "https://www.typescriptlang.org/",
      },
      {
        icon: tailwind,
        href: "https://tailwindcss.com/",
      },
      {
        icon: nextjs,
        href: "https://nextjs.org/",
      },
      {
        icon: nestjs,
        href: "https://nestjs.com/",
      },
      {
        icon: postgesql,
        href: "https://www.postgresql.org/",
      },
      {
        icon: docker,
        href: "https://www.docker.com/",
      },
      {
        icon: prisma,
        href: "https://www.prisma.io/",
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
        href: "https://wordpress.com/",
      },
      {
        icon: mariadb,
        href: "https://mariadb.org/",
      },
      {
        icon: docker,
        href: "https://www.docker.com/",
      },
      {
        icon: javascript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: html,
        href: "https://www.w3schools.com/html/",
      },
      {
        icon: css,
        href: "https://www.w3schools.com/css/",
      },
    ],
    image: inception,
    source_code_link: "https://github.com/ridaelfagrouch/inception_42",
  },
  {
    name: "TodosApp",
    description:
      "Created a full-stack Todos app with React Native, Express.js, and MySQL, featuring CRUD operations and real-time updates.",
    tech: [
      {
        icon: reactnative,
        href: "https://reactnative.dev/",
      },
      {
        icon: javascript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: css,
        href: "https://www.w3schools.com/css/",
      },
      {
        icon: expressjs,
        href: "https://expressjs.com/",
      },
      {
        icon: mysql,
        href: "https://www.mysql.com/",
      },
    ],
    image: todosApp,
    source_code_link: "https://github.com/ridaelfagrouch/crud-todo-app",
  },
  {
    name: "movie LandingPage",
    description:
      "Crafted an engaging movie landing page using HTML, CSS, and JavaScript.",
    tech: [
      {
        icon: javascript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: html,
        href: "https://www.w3schools.com/html/",
      },
      {
        icon: css,
        href: "https://www.w3schools.com/css/",
      },
    ],
    image: movie_landingPage,
    source_code_link: "https://github.com/ridaelfagrouch/movieStore-landingPage",
  },
  {
    name: "WebServer",
    description:
      "Developed a high-performance custom HTTP server using C++, optimizing request-response cycles, and ensuring robust error handling.",
    tech: [
      {
        icon: cplusplus,
        href: "https://cplusplus.com/",
      },
    ],
    image: webServer,
    source_code_link: "https://github.com/ridaelfagrouch/Webserv_42",
  },
  {
    name: "Minishell",
    description:
      "Developed a custom Bash-like shell in C, enhancing command-line interactions.",
    tech: [
      {
        icon: c,
        href: "https://www.w3schools.com/c/c_intro.php",
      },
    ],
    image: minishell,
    source_code_link: "https://github.com/ridaelfagrouch/minishell_42",
  },
  {
    name: "Cub3d",
    description: "Designed dynamic views within complex maze environments.",
    tech: [
      {
        icon: c,
        href: "https://www.w3schools.com/c/c_intro.php",
      },
    ],
    image: cub3d,
    source_code_link: "https://github.com/ridaelfagrouch/cub3D_42",
  },
  {
    name: "Philosopher",
    description:
      "Successfully participated in a project involving concurrent programming and synchronization",
    tech: [
      {
        icon: c,
        href: "https://www.w3schools.com/c/c_intro.php",
      },
    ],
    image: philosopher,
    source_code_link: "https://github.com/ridaelfagrouch/philosophers_42",
  },
  {
    name: "Fdf",
    description: "Created visually stunning 3D landscape representations.",
    tech: [
      {
        icon: c,
        href: "https://www.w3schools.com/c/c_intro.php",
      },
    ],
    image: fdf,
    source_code_link: "https://github.com/ridaelfagrouch/FDF_42",
  }
];

export { technologies, projects };
