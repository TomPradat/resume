export default {
  firstname: "Tom",
  lastname: "Pradat",
  birthDate: "08/01/1994",
  wanted_job: "Développeur",
  presentation:
    "Passionné de sciences et notamment d'informatique depuis des années, j'y consacre beaucoup de temps afin d'assouvir ma soif de connaissance.",
  address: {
    street: "17 avenue de l'union soviétique",
    zip: "63000",
    city: "Clermont-Ferrand"
  },
  phone: "06 82 69 65 95",
  email: "tom.pradat@gmail.com",
  langs: ["Français", "Anglais"],
  hobbies: ["Informatique", "Voyages", "Randonnées", "Escalade", "Jeux vidéos"],
  github: "https://github.com/TomPradat",
  stackshare: "https://stackshare.io/TomPradat",
  timeline: [
    {
      start: 2019,
      experiences: [
        {
          sum_up: "Braincube - Ingénieur R&D",
          projects: [
            "Réécriture d'applications interne au logiciel Braincube - ReactJS",
          ],
        }
      ],
    },
    {
      start: 2017,
      end: 2019,
      experiences: [
        {
          sum_up: "Domraider - Développeur",
          projects: [
            'Réécriture du site internet de la marque "Youdot" - ReactJS/Redux',
            "Découpage d'un backend monolithe en micro services - React PHP/RabbitMQ/Domain Driven Design"
          ]
        }
      ]
    },
    {
      start: 2016,
      end: 2017,
      experiences: [
        {
          sum_up:
            "Openstudio - stage (6 mois) puis alternance (1 an) en qualité de développeur web",
          projects: [
            "Développement d'un site e-commerce (+150 boutiques) - Thelia/Propel",
            "Travail sur un jeu concours - ReactJs/Silex",
            "Développement d'une application mobile avec quiz et défis - ReactNative/Redux/API REST",
            "Développement d'un site de vente de villages vacances - Symfony3/Doctrine/Twig"
          ]
        },
        {
          sum_up: "Auto-entreprise - programmation informatique",
          projects: [
            "Développement d'un site e-commerce - Sylius/ReactJs/Redux"
          ]
        }
      ]
    }
  ],
  formations: [
    {
      start: 2015,
      end: 2017,
      name: "Master Stratégie Internet et Pilotage de Projets en Entreprise"
    },
    {
      start: 2013,
      end: 2015,
      name: "Licence de Mathématiques",
      precision:
        "Options : Théorie du big bang, fonctionnement laser, mécanique quantique"
    },
    {
      start: 2011,
      end: 2013,
      name: "Classe préparatoire MP à Janson de Sailly"
    },
    {
      start: 2010,
      end: 2011,
      name: "Baccalauréat scientifique",
      precision:
        "Mention très bien, option européenne, spécialité mathématiques"
    }
  ],
  skill_fields: [
    {
      field_name: "Applications et data",
      skills: [
        "PHP 7",
        "Symfony 4",
        "ReactPHP",
        "Javascript",
        "NodeJS",
        "ReactJS",
        "HTML/CSS",
        "RabbitMQ",
        "PostgreSQL",
        "MongoDB"
      ]
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
        "Intégration continue"
      ]
    },
    {
      field_name: "Outils",
      skills: ["Slack", "Asana", "ElasticSearch"]
    }
  ]
};
