// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.jpg";
import project2 from "./assets/images/projects/img2.jpg";
import project3 from "./assets/images/projects/img3.jpg";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Abimbola",
    LastName: "Aiyedogbon",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "FIGMA",
        para: "Welcome to my Figma hub",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Welcome to my Node.js resource center",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: " We offer competitive pricing for my Photoshop services.",
        logo: ps,
      },
      {
        name: "React js",
        para: "React.js, often simply referred to as React, is a widely-used JavaScript library.",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "sketches in Figma is a crucial step in the design process.",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Python Gemini supports a wide range of applications.",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full Stack developer",
        para: "I am a highly skilled Full Stack Developer, developing, and maintaining web applications. My expertise spans both frontend and backend technologies, enabling me to build robust, user-friendly applications from the ground up. I am a versatile developer with extensive experience in both frontend and backend development.My frontend expertise includes HTML, CSS, JavaScript, and frameworks like React, which I have used to build responsive and interactive web applications. On the backend, I am proficient in Node.js and express, with significant experience in creating scalable and secure server-side applications, managing databases, and developing RESTful APIs.   ",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "I specialize in both UI and UX design. I am proficient in using tools like Sketch, Figma, and Adobe XD to create intuitive and visually appealing interfaces. My approach involves thorough user research, creating detailed wireframes and prototypes, and conducting user testing to refine designs. I have successfully collaborated with developers and stakeholders to deliver products that not only meet user needs but also achieve business objectives.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "We specialize in transforming ordinary images into extraordinary works of art through meticulous editing techniques and creative vision we believe in a collaborative approach to Photoshop editing. We start by understanding your vision and requirements, then meticulously work on each project, keeping you informed and involved every step of the way. Our goal is to exceed your expectations and deliver stunning results that make your images stand out.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY PORTFOLIO",
    image: person_project,
    project_content: [
      {
        title: "Food Delivery App",
        image: project1,
      },
      {
        title: "Social Media Web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Abimbola Aiyedogbonon on React Js project was an absolute pleasure. Their expertise and attention to detail significantly improved our application's performance and usability. Highly recommended! ”",
        img: avatar1,
        name: "Adeoti Mayokun",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm Abimbola Aiyedogbon, versatile developer and designer with expertise in frontend development,backend development, and product design.I'm excited about the opportunity to contribute to projects that require a combination of technical skills  ",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "aiyedogbonabimbola3@gmail.com",
        icon: GrMail,
        link: "mailto:abimbolaa@gmail.com",
      },
      {
        text: "+234 805 057 7053",
        icon: MdCall,
        link: "https://wa.me/2348050577053",
      },
      {
        text: "abimbola",
        icon: BsInstagram,
        link: "https://www.instagram.com/abimbola/",
      },
      {
        text: "abimbola",
        icon: BsGithub,
        link: "https://www.github.com/Bose400/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
