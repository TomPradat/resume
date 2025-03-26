const data = {
  firstname: "Tom",
  lastname: "Pradat",
  birthDate: "08/01/1994",
  wanted_job: "Lead software engineer",
  presentation:
    "As a Software craftsman, I'm convinced that the most important thing in programming is keeping the complexity of softwares as low as possible, writing clear and concise code. I'm passionate about learning and experimenting with new technologies",
  address: {
    street: "54 GreenHills Court",
    zip: "T12FYT9",
    city: "Cork - Ireland",
  },
  phone: "+33 6 82 69 65 95",
  email: "tom.pradat@gmail.com",
  langs: ["French Native", "English C1"],
  hobbies: ["Rock climbing", "Board games", "Traveling", "Hiking", "IT"],
  github: "https://github.com/TomPradat",
  stackshare: "https://stackshare.io/TomPradat",
  linkedin: "https://www.linkedin.com/in/tom-pradat-736b16b1/",
  timeline: [
    {
      start: 2023,
      experiences: [
        {
          sum_up: "Lemon Learning (Remote, France) - Lead Frontend developer",
          projects: [
            "Refactored and implemented features on a Web extension about digital adoption - Typescript, Testing-library, ReactJS",
            "Improved an algorithm that search HTML elements on a web application",
            "Implemented a Chatbot powered by AI",
            "Sharpened the processes and coding standards to boost efficiency",
          ],
        },
      ],
    },
    {
      start: 2021,
      end: 2023,
      duration: "(2 years)",
      experiences: [
        {
          sum_up:
            "Quizzbox Solutions (Clermont-Ferrand, France) - Developer, Lead Developer",
          projects: [
            "Refactored and developed an Online voting application - Typescript, Express, Jest, Socket.io, Redis, MongoDB",
            "Started refactoring the frontend of the Online voting app with ReactJS - Testing-library, ReactJS",
            "Reduced the technical debt on a formation management platform - PHP, Symfony, MariaDB",
            "Dockerized several applications for local development and production - PHP, NodeJS",
            "Improved development processes : code review, git workflow, CI, CD, automatic tests",
            "Improved servers security, set up a monitoring and a logging tool - Debian, Ansible, Zabbix, ELK",
            "Interviewed new developers, developed the team skills through workshops (Docker, Git), managed interns",
            "Supervised (code review, consulting, architecture) the infrastructure (2 people) and web developer teams (6 people)",
            "Worked with the direction on the company structure, security measures and roadmaps",
          ],
        },
      ],
    },
    {
      start: 2019,
      end: 2021,
      duration: "(2 years)",
      experiences: [
        {
          sum_up: "Braincube (Issoire, France) - R&D Engineer",
          projects: [
            "Participated in splitting a monolithic application into small apps and microservices - ReactJS, Material-UI, Cypress, Testing-library",
            "Created and maintained in-house libraries - ReactJS, Webpack, Babel",
          ],
        },
      ],
    },
    {
      start: 2017,
      end: 2019,
      duration: "(2 years)",
      experiences: [
        {
          sum_up: "Domraider (Clermont-Ferrand, France) - Developer",
          projects: [
            "Developed the new design of the Youdot's website - ReactJS, Redux",
            "Participated in splitting a monolithic backend into micro services - React PHP, Symfony4, RabbitMQ, EventStore, Domain Driven Design",
          ],
        },
      ],
    },
    {
      start: 2016,
      end: 2017,
      duration: "(1.5 years)",
      experiences: [
        {
          sum_up:
            "Openstudio (Clermont-Ferrand, France) - Internship as a web developer",
          projects: [
            "Participated in the development of an e-commerce website (150+ shops) - Thelia, Propel",
            "Developed on a project about a game contest website - ReactJS, Silex",
            "Developed the design of a mobile native application - ReactNative, Redux, API REST",
            "Helped Maintaining and improving a website that sells holiday village trips - Symfony3, Doctrine, Twig",
          ],
        },
        {
          sum_up: "Self employed - IT programming",
          projects: [
            "Developed an e-commerce website - Sylius, ReactJS, Redux, TailwindCSS",
          ],
        },
      ],
    },
  ],
  formations: [
    {
      start: 2018,
      name: "English certificate (Bulats C2 level)",
    },
    {
      start: 2015,
      end: 2017,
      name: "Master's degree - Internet strategy and projects management in companies",
    },
    {
      start: 2013,
      end: 2015,
      name: "Bachelor's degree in Mathematics",
      precision:
        "Specialization : Big bang theory, laser science, quantum mechanics",
    },
    {
      start: 2011,
      end: 2013,
      name: 'Scientific preparatory (Maths-Physics) classes to "Grandes Ecoles"',
    },
    {
      start: 2010,
      end: 2011,
      name: "Scientific high school diploma with honors",
      precision: "European section with mathematics specialty",
    },
  ],
  skill_fields: [
    {
      field_name: "Applications and data",
      skills: [
        "PHP 7",
        "Symfony 5",
        "ReactPHP",
        "Javascript",
        "Typescript",
        "NodeJS",
        "ReactJS",
        "HTML/CSS",
        "RabbitMQ",
        "PostgreSQL",
        "MongoDB",
        "Deno",
        "Rust",
        "ElasticSearch",
        "EventStore",
      ],
    },
    {
      field_name: "DevOps",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "Azure Devops",
        "Bash",
        "PHPUnit",
        "CI / CD",
        "Cypress",
        "Jest",
        "Testing-library",
      ],
    },
    {
      field_name: "Tools",
      skills: [
        "Slack",
        "Mattermost",
        "Jira",
        "Asana",
        "VSCode",
        "Insomnia",
        "Zabbix",
        "ELK",
      ],
    },
  ],
};

export default data;
