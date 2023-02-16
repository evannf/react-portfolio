import Proj1 from '../assets/Proj1.jpg';
import Proj2 from '../assets/Proj2.jpg';
import SDHome from '../assets/SD-home.png';
// import Proj3 from '../assets/Proj3.jpg';
// import Proj4 from '../assets/Proj4.jpg';
import SocialMetia from '../assets/Soical-Meatia.png'
import PPBB from "../assets/PP-DB.png"
import GCI from '../assets/GCI-Database.png'

export const projectList = [
    {
        name: "Success+Dress",
        desc: "Mock e-commerce website for business attire",
        image: SDHome,
        skill: "React.js, SASS, Axios, React Router, Strapi",
        link: "https://success-dress.net/",
        github: "https://github.com/evannf/shopping-app"
    },
    {
        name: "GCI Villains Database",
        desc: "A database platform cataloging villains from the show The Venture Bros",
        image: GCI,
        skill: "JavaScript, CSS, Express, EJS, MongoDB, Mongoose",
        link: "https://gci-villains-database-ievf3.ondigitalocean.app/",
        github: "https://github.com/evannf/GCI_Villain_Database"
    },
    {
        name: "Social Meatia",
        desc: "Mock social media app based on meat",
        image: SocialMetia,
        skill: "React.js, CSS, Express, Bcrypt, CORS, Dotenv, Axios, MongoDB, Mongoose",
        link: "",
        github: "https://github.com/evannf/capstone_frontend"
    },
    {
        name: "Tug of Words game",
        desc: "Take turns with a friend to unscramble words and defeat the machine!",
        image: Proj2,
        skill: "HTML, CSS, JavaScript",
        link: "https://tugofwords.netlify.app",
        github: "https://github.com/evannf/Tug-of-Words"
    },
    {
        name: "Tamagotchi Project",
        desc: "An app where you take care of a bunny!",
        image: Proj1,
        skill: "HTML, CSS, JavaScript",
        link: "https://bunnigatchi.netlify.app/",
        github: "https://github.com/evannf/tamagotchi-project-"
    },
    {
        name: "Potted Pals",
        desc: "Backend API service for a group project",
        image: PPBB,
        skill: "Node, MongoDB, Mongoose, Express",
        link: "",
        github: "https://github.com/evannf/pottedpals-backend"
    }

]