import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `Junior Software Developer with comprehensive training from Generation Bootcamp. Bringing 8 years of sales experience and 1 year as IT Support, complemented by ongoing studies in Computer Science. Known for strong teamwork, customer focus, achievement motivation, integrity, problem-solving skills, and the ability to handle pressure. Passionate about pursuing a career as a Full Stack Developer to leverage my diverse skill set and contribute to organizational success.`;

export const ABOUT_TEXT = `I am a Junior Software Developer with comprehensive training from Generation Bootcamp, where I honed my skills in full-stack development. With 8 years of experience in sales and 1 year working in IT support, I bring a diverse background that blends technical know-how with a strong customer-oriented mindset.

Currently, I am pursuing a degree in Computer Science to deepen my understanding and further expand my technical expertise. My passion lies in full-stack development, and I’m eager to leverage my diverse skill set—ranging from problem-solving and teamwork to high-pressure performance and customer focus—toward making meaningful contributions in a development team.

I am driven by achievement and integrity, always looking for ways to improve both personally and professionally. As I continue to grow in the tech industry, I aim to build solutions that not only meet technical requirements but also positively impact users and organizations alike.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - December 2024",
    role: "Junior Software Developer Boot camp",
    company: "Generation Thailand",
    description: `Learned to build web applications using React.js for the frontend, Node.js for the backend, and MongoDB for the database.
    Acquired essential career transition skills, such as growth mindset, communication, and teamwork.
    Final Project: Developed a MERN Stack CRUD web application for E-Commerce. Utilized React with react-router-dom and Axios for API calls on the frontend, Express for handling RESTful APIs on the backend, and Mongoose to connect to MongoDB.`,
    skill: ["HTML", "CSS", "Javascript", "React.js", "mySQL", "Express", "Node.js", "mongoDB"],
  },
  {
    year: "1 May 2023 - 30 June 2024",
    role: "IT Support",
    company: "JIB",
    description: `Resolved hardware and software issues to ensure smooth operation of systems.
    Assembled new computers, ensuring all components were correctly installed and configured.
    Provided support to customers experiencing technical problems, delivering effective solutions and maintaining high levels of customer satisfaction.`,
    skill: ["Windows", "Hardware & Device Management", "Support Tools", "Batch File"],
  },
  {
    year: "1 Feb 2022-30 Apr 2023",
    role: "Sales Promoter",
    company: "HP",
    description: `Managed product pricing and promotional offers to maximize sales.
    Organized and analyzed sales data, tracking daily, weekly, and monthly performance.
    Provided ongoing support to customers, ensuring their satisfaction and addressing any issues promptly.
    Consistently achieved 100% of sales targets, with performance ranging between 80% and 120%`,
    skill: ["Microsoft office", "Communication Skills", "Sales Planning"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  address: "Ayutthaya Thailand",
  phoneNo: "+66 98 946 4474",
  email: "iceparinwat@gmail.com",
};
