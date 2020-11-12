export default {
  firstname: "Tom",
  lastname: "Pradat",
  birthDate: "08/01/1994",
  wanted_job: "Software engineer",
  presentation:
    "On the road to software craftsmanship, I spend a lot of my free time learning and experimenting with new technologies",
  address: {
    street: "22 chemin de Javaude",
    zip: "63540",
    city: "Romagnat - France",
  },
  phone: "+33 6 82 69 65 95",
  email: "tom.pradat@gmail.com",
  langs: ["French C2", "English C1"],
  hobbies: ["IT", "Traveling", "Hiking", "Rock climbing", "Video games"],
  github: "https://github.com/TomPradat",
  stackshare: "https://stackshare.io/TomPradat",
  linkedin: "https://www.linkedin.com/in/tom-pradat-736b16b1/",
  timeline: [
    {
      start: 2019,
      duration: "(1 year)",
      experiences: [
        {
          sum_up: "Braincube (Issoire, France) - R&D Engineer",
          projects: [
            "Splitting a monolithic application in small apps and microservices - ReactJS, Material-UI, Cypress, Testing-library",
            "Creating and maintaining in-house libraries - ReactJS, Webpack, Babel",
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
            "Developing the new design of the Youdot's website - ReactJS, Redux",
            "Splitting a monolithic backend in micro services - React PHP, Symfony4, RabbitMQ, EventStore, Domain Driven Design",
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
            "Development of an e-commerce website (150+ shops) - Thelia, Propel",
            "Creation of a game contest website - ReactJS, Silex",
            "Development of a mobile native application - ReactNative, Redux, API REST",
            "Maintenance and improvements on a website that sells holiday village trips - Symfony3, Doctrine, Twig",
          ],
        },
        {
          sum_up: "Self employed - IT programming",
          projects: [
            "Development of an e-commerce website - Sylius, ReactJS, Redux, TailwindCSS",
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
      name:
        "Master's degree - Internet strategy and projects management in companies",
    },
    {
      start: 2013,
      end: 2015,
      name: "Bachelor's degree in Mathematics",
      precision: "Options : Big bang theory, laser science, quantum mechanics",
    },
    {
      start: 2011,
      end: 2013,
      name:
        'Scientific preparatory (Maths-Physics) classes to "Grandes Ecoles"',
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
      skills: ["Slack", "Asana", "VSCode", "Insomnia"],
    },
  ],
};
