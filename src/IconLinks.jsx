import { LuDonut, LuDog } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FiVideo } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";


function IconLinks() {
  return (
    <>
      <div className="project-icons-row">
        <FaCode title="Code Symbol Icon" className="project-icons" />
        <LuDonut title="Donut Icon" className="project-icons" />
        <LuDog title="Dog Icon" className="project-icons" />
        <HiOutlinePaintBrush title="Paint Brush Icon" className="project-icons" />
        <FiVideo title="Video Icon" className="project-icons" />
        </div>
        <div className="social-media-icons-row">
        <a href="https://www.instagram.com/doughnut_days/"><FaSquareInstagram title="Instagram Icon" className="social-media-icons"/></a>
        <FaLinkedin title="LinkedIn Icon" className="social-media-icons"/>
        <IoLogoGithub title="GitHub Icon" className="social-media-icons"/>
      </div>
    </>
  );
}

export default IconLinks;
