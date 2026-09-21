import ProjectTreeLogo from "./projecttree_logo1.jpg";
import CharusatLogo from "./charusat_logo.png";
import SanskardeepLogo from "./sanskardeep_logo.jpg";
import DarshanResumePDF from "./Darshan_Resume.pdf";

// Bio Section Data
export const Bio = {
  name: "Darshan Chavda",
  roles: [
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Architect",
    "Machine Learning Enthusiast",
    "Piano Artist",
  ],
  description:
    "Passionate Java Backend Developer with hands-on experience in Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs, Microservices, and MySQL/PostgreSQL. Proficient in developing layered enterprise applications with robust validation, DTO architecture, JPA specifications, pagination, and Spring Security. When away from the keyboard, I am an active Piano Artist and fitness enthusiast.",
  email: "darshanchavda1505@gmail.com",
  phone: "+91 70431 74511",
  linkedin: "https://www.linkedin.com/in/darshan-chavda-9097a7245/",
  github: "https://github.com/darshan1924",
  twitter: "https://twitter.com/chavda_darshu",
  resume: DarshanResumePDF,
  instagram: "https://www.instagram.com/darshan_1505/",
  youtube: "https://youtube.com/@darshanchavda1505?si=BKmspeFneDBzAn0C",
};

// Skills Section Data
export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Spring Boot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Spring Framework",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Spring Data JPA",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Spring Security",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
      },
      {
        name: "Hibernate",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
      },
      {
        name: "REST APIs",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      {
        name: "Scikit-Learn",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "TensorFlow",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Keras",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      },
      {
        name: "CNN",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Transfer Learning",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
    ],
  },
  {
    title: "Data Analysis",
    skills: [
      {
        name: "Pandas",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Matplotlib",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      },
      {
        name: "Seaborn",
        image: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Swagger",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      },
      {
        name: "Streamlit",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-plain.svg",
      },
      {
        name: "FastAPI",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
    ],
  },
];


// Experiences Section Data
export const experiences = [
  {
    id: 0,
    img: ProjectTreeLogo,
    role: "Java Intern",
    company: "ProjectTree",
    date: "May 2026 – July 2026",
    location: "Remote",
    desc: "Engineered scalable backend modules for an Enterprise Asset Management System. Designed and developed RESTful APIs using layered architecture, DTOs, request validation, pagination, and sorting. Implemented JPA Specifications for dynamic multi-criteria filtering and integrated Spring Security for robust role-based authorization.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Spring Security",
    ],
    highlights: [
      "Layered Enterprise Architecture & DTO mapping",
      "Dynamic filtering using JPA Specifications",
      "Role-Based Authorization with Spring Security",
    ],
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQGsWqM0cpx5ew/company-logo_200_200/company-logo_200_200/0/1696135035612?e=2147483647&v=beta&t=u81J0diwf7-RqeOhqqHaax_qEL3bgLdGTyGAs4iP7vM",
    role: "Java Automation Trainee",
    company: "SRKay Consulting Group",
    date: "Dec 2024 – Mar 2025",
    location: "Surat, Gujarat",
    desc: "Automated end-to-end UI and REST API test suites using Java, Selenium WebDriver, TestNG, and Postman. Analyzed API payloads, test execution metrics, and backend logs to identify defects early and accelerate debugging cycles.",
    skills: [
      "Core Java",
      "Selenium WebDriver",
      "TestNG",
      "JUnit",
      "Postman",
      "SQL Server",
      "Cucumber",
    ],
    highlights: [
      "Automated UI & REST API test automation suites",
      "Postman API payload validation & regression",
      "SQL Server database verification & defect tracking",
    ],
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS1mv0yMo7XQfU4nOdF10P7kbbWa6gBuoaHwT3INAs2A&s=10",
    role: "Web Developer Intern",
    company: "Augmetic",
    date: "May 2024 – June 2024",
    location: "Remote",
    desc: "Built full-stack web applications with MERN stack technology including FlavorEase. Implemented interactive menu browsing, real-time cart handling, and order lifecycle management while participating in agile team sprints.",
    skills: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "REST APIs"],
    highlights: [
      "Full-stack MERN food platform architecture",
      "Interactive cart & order history management",
      "Agile sprint collaboration and code reviews",
    ],
  },
  {
    id: 3,
    img: ProjectTreeLogo,
    role: "Frontend Engineer Intern",
    company: "ProjectTree",
    date: "May 2023 - June 2023",
    location: "Remote",
    desc: "Studied React and JavaScript. Created projects using React and JavaScript libraries. Gained understanding of industry procedures and client interactions. Learned how to lead and collaborate with a team.",
    skills: ["JavaScript", "ReactJS", "HTML", "CSS"],
    highlights: [
      "Component-driven UI development with React.js",
      "Responsive layout design & client interaction",
      "Collaborative agile workflows and git version control",
    ],
  },
];

// Education Section Data
export const education = [
  {
    id: 0,
    img: CharusatLogo,
    school: "Chandubhai S. Patel Institute of Technology (CHARUSAT)",
    date: "Oct 2021 – May 2025",
    grade: "8.31 CGPA (Distinction)",
    desc: "Bachelor of Technology in Computer Engineering at Charotar University of Science and Technology (CHARUSAT), Anand. Key coursework: Data Structures, Algorithms, Object-Oriented Programming (Java), Machine Learning, Database Management Systems, Operating Systems, and Distributed Systems.",
    degree: "B.Tech in Computer Engineering",
    location: "Anand, Gujarat",
  },
  {
    id: 1,
    img: "https://data.zibma.com/Campus/3/2023/02/W800orH800/7cb5411b-e0bb-4c6a-a175-36fbae1e7e37.png",
    school: "Sarvodaya High School, Ankleshwar",
    date: "May 2021",
    grade: "84%",
    desc: "Completed Higher Secondary Certificate (Class 12th) with Physics, Chemistry, and Mathematics (PCM).",
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    location: "Ankleshwar, Gujarat",
  },
  {
    id: 2,
    img: SanskardeepLogo,
    school: "SMT. P. D. Shroff Sanskardeep Vidhyalaya, Ankleshwar",
    date: "March 2019",
    grade: "82.3%",
    desc: "Completed Secondary School Certificate (Class 10th) with distinction.",
    degree: "Secondary School Certificate (SSC - Class X)",
    location: "Ankleshwar, Gujarat",
  },
];

// Certifications Section Data
export const certifications = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Great Learning",
    date: "2024",
    desc: "Comprehensive certification covering OOP, Collections, Multithreading, Exception Handling, and Data Structures in Java.",
    badge: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: 2,
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera / Google",
    date: "2024",
    desc: "Professional training in empathetic user experience design, wireframing, interactive prototyping, and design systems.",
    badge: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    title: "MongoDB MOOC Certification",
    issuer: "MongoDB University",
    date: "2024",
    desc: "Document database architecture, CRUD operations, indexing, aggregation framework, and schema optimization.",
    badge: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    id: 4,
    title: "BAPS Youth Fellowship Programme",
    issuer: "BAPS (6-Month Residential)",
    date: "June 2025 – Nov 2025",
    desc: "Intensive 6-month residential fellowship focusing on selfless humanitarian service, ethical leadership, moral decision-making, and community development.",
    badge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpGwY_rqKOSHspz_sWKAH3059YbMyK91ZwQbnDbVD6A&s=10",
  },
];

// Projects Section Data
export const projects = [
  {
    id: 1,
    title: "Enterprise Asset Management System",
    description:
      "Enterprise application for managing the complete asset lifecycle including inventory, allocation, maintenance, transfer, and retirement. Implemented REST APIs with layered architecture, DTO mapping, JPA Specifications dynamic filtering, Spring Security role-based authorization, soft deletes, and Thymeleaf integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Spring Data JPA",
      "MySQL",
      "REST APIs",
      "Thymeleaf",
    ],
    github: "https://github.com/darshan1924/enterprise-asset-management-system",
    category: "backend",
  },
  {
    id: 2,
    title: "Bangalore House Price Predictor",
    description:
      "Interactive Streamlit app predicting house prices in Bangalore using Linear Regression.",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/0*cDRFtpTiOJFrfzS5.jpg",
    tags: [
      "Python",
      "Streamlit",
      "scikit-learn",
      "Linear Regression",
      "Data Cleaning",
    ],
    github: "https://github.com/darshan1924/House-Price-Prediction",
    category: "ml",
  },
  {
    id: 3,
    title: "AI-Powered House Price Prediction System",
    description:
      "Microservice-based application where a Spring Boot backend communicates with a Python FastAPI machine learning service. Built REST APIs for prediction and prediction history using Spring Data JPA and PostgreSQL, with Swagger/OpenAPI documentation.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Spring Boot",
      "FastAPI",
      "Scikit-Learn",
      "PostgreSQL",
      "Python",
      "Microservices",
      "Swagger/OpenAPI",
    ],
    github: "https://github.com/darshan1924/house-price-ai-system",
    category: "backend",
  },
  {
    id: 4,
    title: "Musical Instrument Classifier",
    description:
      "A Deep Learning web application utilizing Convolutional Neural Networks (CNN) and MobileNetV2 transfer learning to classify 30 distinct musical instruments with high accuracy.",
    image:
      "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg",
    tags: [
      "TensorFlow",
      "CNN",
      "Transfer Learning",
      "MobileNetV2",
      "Streamlit",
      "Python",
    ],
    github: "https://github.com/darshan1924/Music_Instrument_Classification",
    category: "ml",
  },
  {
    id: 5,
    title: "FlavorEase - Online Food Ordering Platform",
    description:
      "Modern full-stack food delivery application built with MERN stack. Features include real-time menu browsing, cart management, checkout workflow, order history, and JWT authentication.",
    image:
      "https://res.cloudinary.com/djdff8w5b/image/upload/v1720199122/image-for-the-veg-fast-food-web-sign-up-page-background-_kmwwmp.jpg",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "MERN", "JWT"],
    github: "https://github.com/darshan150504/FlavorEase",
    category: "web",
  },
  {
    id: 6,
    title: "WhatsApp Web Clone",
    description:
      "Real-time chat application featuring instant message synchronization via Socket.io, user authentication, active chat rooms, and responsive mobile-friendly UI.",
    image:
      "https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg",
    tags: ["JavaScript", "React.js", "Socket.io", "Node.js", "Express.js"],
    github: "https://github.com/darshan150504/Whatsapp-Clone",
    category: "web",
  },
];
