import CodePage from "./CodePage"
import IconLinks from "./IconLinks"


function LandingPage () {
console.log('landing page')
    
    return (
        <>
        <h1 className="Title">Don&#39;t worry, I&#39;m a professional...</h1>
        <div><p>My name is Maria Angeles and I spend most of my time in the uncomfortable and magnificent spaces where ideas become reality.</p></div>
        <p>Check out some of my projects and connect with me on Social Media!</p>
        <div><IconLinks /></div>
        <p className="bottom-of-landing-page-text">Made with love and React because I&#39;m just scared enough of everything else.</p>
        <br></br>
        <br></br>
        <CodePage />
        
        </>
    )
}

export default LandingPage