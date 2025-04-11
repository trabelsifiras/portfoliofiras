export type Skill = {
  category: string;
  items: string[];
};

export type Experience = {
  company: string;
  period: string;
  position: string;
  projects: {
    name: string;
    details: string[];
    technicalEnvironment: string;
  }[];
};

export type Education = {
  institution: string;
  period: string;
  degree: string;
};

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  position: string;
  address: string;
  mobile: string;
  email: string;
  linkedin: string;
  github: string;
};

export type CVData = {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
};

export const cvData: Record<string, CVData> = {
  en: {
    personalInfo: {
      firstName: "Firas",
      lastName: "Trabelsi",
      position: "Full stack Software Engineer (Java - Angular)",
      address: "Tunis/Tunisia",
      mobile: "+216 25695185",
      email: "trabelsi.firas.1997@gmail.com",
      linkedin: "https://www.linkedin.com/in/firas-trabelsi-875234156/",
      github: "https://github.com/trabelsifiras"
    },
    skills: [
      {
        category: "Programming Languages",
        items: ["Java", "Javascript", "Typescript"]
      },
      {
        category: "Software Development and Methodologies",
        items: ["Git", "Agile Methodology", "Waterfall", "Scrum"]
      },
      {
        category: "Backend Frameworks and Libraries",
        items: ["Spring Boot", "Spring Security", "Liferay", "JUnit", "Hibernate", "JPA"]
      },
      {
        category: "Frontend Frameworks and Libraries",
        items: ["Angular", "JSF", "JavaFX"]
      },
      {
        category: "Databases and Versioning",
        items: ["MySQL", "PostgreSQL", "Liquibase"]
      },
      {
        category: "Project Management and Design Tools",
        items: ["Jira", "HP ALM", "UML", "Trello", "Azure DevOps"]
      },
      {
        category: "Operating Systems and Version Control",
        items: ["Linux", "Windows", "Bitbucket", "GitLab"]
      },
      {
        category: "DevOps and CI/CD",
        items: ["Jenkins", "Nexus", "SonarQube", "Docker", "GCP"]
      },
      {
        category: "Testing and Automation Tools",
        items: ["Maven", "Selenium", "Jsoup"]
      },
      {
        category: "Languages",
        items: ["English", "French"]
      }
    ],
    experience: [
      {
        company: "Pass Consulting",
        period: "May 2024 - Present",
        position: "Java Software Engineer",
        projects: [
          {
            name: "Shop ERP back-office/front-office BU SPORT",
            details: [
              "Designed and developed new JSF-based interfaces for the back office, making ticket and event management smoother and more intuitive.",
              "Gradually migrated the back office to Angular 17, revamping event, product, organization, and report management for a more modern and responsive experience.",
              "Significantly improved front-office page SEO, optimizing search engine visibility and implementing intelligent masking strategies for certain results.",
              "Implemented an ODT template generation engine for a multi-tenant application, enabling advanced document customization in the back office.",
              "Integrated Liquibase to ensure efficient database versioning, guaranteeing structured and secure updates.",
              "Continuously debugged and enhanced applications, ensuring improved user experience and system stability."
            ],
            technicalEnvironment: "Spring Boot · JEE · Hibernate · MySQL · Liquibase · JAX-RS · JSF · Angular 17 · Javascript · CSS · Jenkins · JUnit · GitLab · Eclipse"
          }
        ]
      },
      {
        company: "Novobit GmbH",
        period: "November 2021 - April 2024",
        position: "Java Software Engineer",
        projects: [
          {
            name: "Digital Audit Management Platform (AMP)",
            details: [
              "Developed an innovative web solution to automate and digitize the TISAX certification process, providing companies with compliance management tools.",
              "Conducted requirement analysis, proposed the technical stack, modeled the solution, and implemented key application modules, including risk management, document handling, and audit functionalities.",
              "Continuously monitored and maintained the platform to ensure reliability and scalability."
            ],
            technicalEnvironment: "Azure DevOps · ActiveMQ · Object-Oriented Programming (OOP) · Spring Boot · PostgreSQL · Angular 11 · Git · Java · REST API · MySQL · HTML/CSS · SQL"
          },
          {
            name: "Volkswagen AG Outsourcing | IBISS PENTA",
            details: [
              "Enhanced Volkswagen's ERP system by optimizing core functionalities using Groovy scripts, automating key business processes for improved efficiency.",
              "Redesigned the user interface with JavaFX, delivering a modern, intuitive, and interactive experience for end users.",
              "Authored comprehensive documentation and conducted technical team training to ensure smooth adoption of new features."
            ],
            technicalEnvironment: "Java · Groovy · JavaFX · Git · Bitbucket · HP ALM · Eclipse · Docker · JUnit · QF-Test"
          },
          {
            name: "WebApp - Microservices Architecture",
            details: [
              "Designed and implemented an application based on 11 microservices, providing an innovative service-oriented solution.",
              "Played a key role in requirement analysis, technical solution proposals, and development of core modules such as identity management, messaging, and document handling.",
              "Continuously monitored and optimized the application to ensure optimal performance."
            ],
            technicalEnvironment: "React · Java · Spring Boot · Spring Security · PostgreSQL · Hibernate · Maven · Kafka"
          }
        ]
      },
      {
        company: "KEYRUS",
        period: "February 2021 - October 2021",
        position: "Software Engineering Intern",
        projects: [
          {
            name: "End of Study Internship - E-commerce Platform & AI Tools",
            details: [
              "Developed a complete e-commerce platform (back-office and front-office) using Liferay for the backend and Angular for the frontend, enabling seamless product and order management.",
              "Implemented an intelligent chatbot using the RASA framework for automated customer support.",
              "Developed a recommendation engine based on three approaches: collaborative filtering, content-based filtering, and basket analysis to enhance user experience."
            ],
            technicalEnvironment: "Liferay DXP · OSGI · JEE · Hibernate · Service Builder (Liferay) · JAX-RS · Angular · Python · RASA · Flask · Bitbucket"
          }
        ]
      },
      {
        company: "GOLDENMARKET",
        period: "May 2020 - August 2020",
        position: "Software Development Intern",
        projects: [
          {
            name: "Medicinal Plants Information Exchange Platform",
            details: [
              "Developed a web platform for exchanging information about medicinal plants, allowing users to share and access herbal remedy knowledge.",
              "Used Java and JSF (JavaServer Faces) for the frontend, providing a dynamic and interactive user interface."
            ],
            technicalEnvironment: "Java · Spring MVC · JSF · Eclipse · MySQL · HTML/CSS · Maven · Selenium"
          }
        ]
      }
    ],
    education: [
      {
        institution: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
        period: "2018 - 2021",
        degree: "Computer Engineering"
      },
      {
        institution: "Faculty of Sciences of Tunis (FST)",
        period: "2016-2018",
        degree: "Engineering Studies Degree"
      }
    ]
  },
  fr: {
    personalInfo: {
      firstName: "Firas",
      lastName: "Trabelsi",
      position: "Ingénieur Logiciel Full Stack (Java - Angular)",
      address: "Tunis/Tunisie",
      mobile: "+216 25695185",
      email: "trabelsi.firas.1997@gmail.com",
      linkedin: "https://www.linkedin.com/in/firas-trabelsi-875234156/",
      github: "https://github.com/trabelsifiras"
    },
    skills: [
      {
        category: "Langages de Programmation",
        items: ["Java", "Javascript", "Typescript"]
      },
      {
        category: "Développement Logiciel et Méthodologies",
        items: ["Git", "Méthodologie Agile", "Waterfall", "Scrum"]
      },
      {
        category: "Frameworks et Bibliothèques Backend",
        items: ["Spring Boot", "Spring Security", "Liferay", "JUnit", "Hibernate", "JPA"]
      },
      {
        category: "Frameworks et Bibliothèques Frontend",
        items: ["Angular", "JSF", "JavaFX"]
      },
      {
        category: "Bases de Données et Versioning",
        items: ["MySQL", "PostgreSQL", "Liquibase"]
      },
      {
        category: "Outils de Gestion de Projet et de Conception",
        items: ["Jira", "HP ALM", "UML", "Trello", "Azure DevOps"]
      },
      {
        category: "Systèmes d'Exploitation et Contrôle de Version",
        items: ["Linux", "Windows", "Bitbucket", "GitLab"]
      },
      {
        category: "DevOps et CI/CD",
        items: ["Jenkins", "Nexus", "SonarQube", "Docker", "GCP"]
      },
      {
        category: "Outils de Test et d'Automatisation",
        items: ["Maven", "Selenium", "Jsoup"]
      },
      {
        category: "Langues",
        items: ["Français", "Anglais"]
      }
    ],
    experience: [
      {
        company: "Pass Consulting",
        period: "Mai 2024 - Présent",
        position: "Ingénieur Logiciel Java",
        projects: [
          {
            name: "Shop ERP back-office/front-office BU SPORT",
            details: [
              "Conception et développement de nouvelles interfaces JSF pour le back office, rendant la gestion des tickets et des événements plus fluide et intuitive.",
              "Migration progressive du back office vers Angular 17, rénovant la gestion des événements, produits, organisations et rapports pour une expérience plus moderne et réactive.",
              "Amélioration significative du SEO des pages front-office, optimisant la visibilité sur les moteurs de recherche et implémentant des stratégies de masquage intelligent pour certains résultats.",
              "Implémentation d'un moteur de génération de modèles ODT pour une application multi-tenant, permettant une personnalisation avancée des documents dans le back office.",
              "Intégration de Liquibase pour assurer un versioning efficace de la base de données, garantissant des mises à jour structurées et sécurisées.",
              "Débogage et amélioration continue des applications, assurant une meilleure expérience utilisateur et stabilité du système."
            ],
            technicalEnvironment: "Spring Boot · JEE · Hibernate · MySQL · Liquibase · JAX-RS · JSF · Angular 17 · Javascript · CSS · Jenkins · JUnit · GitLab · Eclipse"
          }
        ]
      },
      {
        company: "Novobit GmbH",
        period: "Novembre 2021 - Avril 2024",
        position: "Ingénieur Logiciel Java",
        projects: [
          {
            name: "Plateforme de Gestion d'Audit Digital (AMP)",
            details: [
              "Développement d'une solution web innovante pour automatiser et digitaliser le processus de certification TISAX, fournissant aux entreprises des outils de gestion de la conformité.",
              "Conduite de l'analyse des besoins, proposition de la stack technique, modélisation de la solution et implémentation des modules clés de l'application, incluant la gestion des risques, la gestion documentaire et les fonctionnalités d'audit.",
              "Surveillance et maintenance continue de la plateforme pour assurer sa fiabilité et sa scalabilité."
            ],
            technicalEnvironment: "Azure DevOps · ActiveMQ · Programmation Orientée Objet (POO) · Spring Boot · PostgreSQL · Angular 11 · Git · Java · REST API · MySQL · HTML/CSS · SQL"
          },
          {
            name: "Volkswagen AG Outsourcing | IBISS PENTA",
            details: [
              "Amélioration du système ERP de Volkswagen en optimisant les fonctionnalités principales à l'aide de scripts Groovy, automatisant les processus métier clés pour une meilleure efficacité.",
              "Refonte de l'interface utilisateur avec JavaFX, offrant une expérience moderne, intuitive et interactive pour les utilisateurs finaux.",
              "Rédaction d'une documentation complète et formation technique de l'équipe pour assurer une adoption fluide des nouvelles fonctionnalités."
            ],
            technicalEnvironment: "Java · Groovy · JavaFX · Git · Bitbucket · HP ALM · Eclipse · Docker · JUnit · QF-Test"
          },{
            name: "WebApp - Architecture à base de microservices",
            details: [
              "Conception et mise en œuvre d'une application basée sur 11 microservices, offrant une solution innovante orientée services.",
              "Participation clé à l’analyse des besoins, à la proposition de solutions techniques et au développement de modules essentiels tels que la gestion des identités, la messagerie et la gestion documentaire.",
              "Surveillance continue et optimisation de l’application afin de garantir des performances optimales."
            ],
            technicalEnvironment: "React · Java · Spring Boot · Spring Security · PostgreSQL · Hibernate · Maven · Kafka"
          }
        ]
      },
      {
        company: "KEYRUS",
        period: "Février 2021 - Octobre 2021",
        position: "Stagiaire en ingénierie logicielle",
        projects: [
          {
            name: "Stage de fin d’études - Plateforme e-commerce & outils d’IA",
            details: [
              "Développement complet d’une plateforme e-commerce (back-office et front-office) en utilisant Liferay pour le backend et Angular pour le frontend, permettant une gestion fluide des produits et des commandes.",
              "Mise en place d’un chatbot intelligent avec le framework RASA pour un support client automatisé.",
              "Développement d’un moteur de recommandation basé sur trois approches : filtrage collaboratif, filtrage basé sur le contenu et analyse de panier pour améliorer l’expérience utilisateur."
            ],
            technicalEnvironment: "Liferay DXP · OSGI · JEE · Hibernate · Service Builder (Liferay) · JAX-RS · Angular · Python · RASA · Flask · Bitbucket"
          }
        ]
      },
      {
        company: "GOLDENMARKET",
        period: "Mai 2020 - Août 2020",
        position: "Stagiaire en développement logiciel",
        projects: [
          {
            name: "Plateforme d’échange d’informations sur les plantes médicinales",
            details: [
              "Développement d’une plateforme web pour l’échange d’informations sur les plantes médicinales, permettant aux utilisateurs de partager et consulter des connaissances en phytothérapie.",
              "Utilisation de Java et JSF (JavaServer Faces) pour le frontend, offrant une interface utilisateur dynamique et interactive."
            ],
            technicalEnvironment: "Java · Spring MVC · JSF · Eclipse · MySQL · HTML/CSS · Maven · Selenium"
          }
        ]
      }
    ],
    education: [
      {
        institution: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
        period: "2018 - 2021",
        degree: "Ingénierie Informatique"
      },
      {
        institution: "Faculté des Sciences de Tunis (FST)",
        period: "2016-2018",
        degree: "Diplôme d'Études en Ingénierie"
      }
    ]
  }
};