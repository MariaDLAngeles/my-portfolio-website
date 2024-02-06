import IconLinks from "./IconLinks"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function LandingPage () {
console.log('landing page')
    
    return (
        <>
        <h1 className="Title">Don&#39;t worry, I&#39;m a professional...</h1>
        <div><p>My name is Maria Angeles and I spend most of my time in the uncomfortable and magnificent spaces where ideas become reality. Check out some of my projects!</p></div>
        <div><IconLinks /></div>
        <div className="social-media-icons">
            <FaInstagram title="Instagram Icon" />
            <FaLinkedin title="LinkedIn Icon" />
            <IoLogoGithub title="GitHub Icon" />
        </div>
        </>
    )
}

export default LandingPage