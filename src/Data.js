import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://dribbble.com/tags/website" target="_blank"><FaDribbble /></a>,
  <a href="https://www.instagram.com/kepler.web.studio/" target="_blank"><FaInstagram /></a>,
  <a href="https://www.linkedin.com" target="_blank"><FaLinkedin /></a>,
  <a href="https://medium.com" target="_blank"><BsMedium /></a>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kepler Web"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "coming"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "keplerwebstudio@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm"
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm"
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm"
  }
]
export const finishes = [
  {
    id: 1,
    number: '2+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "1+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "50+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "1+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "human",
    hrefG:'https://github.com/Jack15432/J-Portfolio',
    hrefP: "https://jack15432.github.io/J-Portfolio/",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "human",
    hrefG:'https://github.com/Jack15432/Will-Portfolio',
    hrefP: "https://jack15432.github.io/Will-Portfolio/",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "cat",
    hrefG:'https://github.com/Jack15432/Cat-Portfolio',
    hrefP: "https://jack15432.github.io/Cat-Portfolio/",
  },
  
]


export const workNavs = [
  "All", "Human", "Cat", 
]


export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "21250 Stevens Creek Blvd, Cupertino, CA 95014"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "keplerwebstudio@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "coming soon!"
  }
]
