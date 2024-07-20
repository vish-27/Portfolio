import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    quiz,
    wise,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    bill,
    larry,
    steve,
    tsp,
    afflux,
    stock,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fast",
      icon: web,
    },
    {
      title: "Responsive",
      icon: mobile,
    },
    {
      title: "Intuitive",
      icon: backend,
    },
    {
      title: "Dynamic",
      icon: creator,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "Afflux IT Solution Pvt. Ltd.",
      icon: afflux,
      iconBg: "#383E56",
      date: "Feb 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Sparks Foundation",
      icon: tsp,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Built basic banking system with front-end of ejs and back-end with node-js.",
        "Integrated it with payment methods.",
        "Build the database in Mongo.db .",
        "Recognise by team for completed the tasks within 30 days.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Success is a lousy teacher. It seduces smart people into thinking they can't lose.                 ",
      name: "Bill Gates",
      image: bill,
    },
    {
      testimonial:
        "Because the people who are crazy enough to think they can change the world are the ones who do.",
      name: "Steve Jobs",
      image: steve,
    },
    {
      testimonial:
        "If you're changing the world, you're working on important things. You're excited to get up in the morning. ",
      name: "Larry Page",
      image: larry,
    },
  ];
  
  const projects = [
    {
      name: "Wise India",
      description:
        "Web-based platform that allows users to vote there opinion of trending world affairs. Architected and developed a scalable web application using React.js, enabling real-time voting and opinion sharing on trending news topics Implemented user authentication and real-time database operations using Firebase, supporting over 1,000 concurrent users",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Cloud Firestore",
          color: "pink-text-gradient",
        },
      ],
      image: wise,
      source_code_link: "https://github.com/",
    },
    {
      name: "Quiz App",
      description: "Quiz app built with React.js, Node.js, and MongoDB. Users upload custom questions. Features card-based interface showing one question at a time, with instant feedback. Demonstrates skills in creating responsive, user-friendly web apps with frontend-backend integration. Showcases full-stack development abilities in modern technologies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automated Stock Trading Bot",
      description:"Developed Python stock trading bot using historical data analysis and machine learning. Implemented sentiment analysis of financial news with NLP to inform trading decisions. Backtested algorithm on 5 years of historical data. Achieved simulated return 15% higher than market indices.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MachineLearning",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };