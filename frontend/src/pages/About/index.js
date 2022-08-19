import './index.scss';
import Socials from "./Socials";

const About = () => {
    return (
        <>
            <div className="about_wrapper">
                <p>To build this I've used:</p>
                <ul>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>MangoDB</li>
                    <li>SCSS</li>
                </ul>
                <p>None of the information shown on this page is added by me.</p>
                <p>Everything is pulled from The Movie DataBase API which is dependant on users adding information.</p>
                <p>I am in no way affiliated with The Movie DataBase and do not own or claim to own any of the information shown on this page.</p>
                <p>I've made this website purely for educational purposes.</p>
                <p>This website uses the TMDB API but is not endorsed or certified by TMDB.</p>
            <Socials />
            </div>
        </>
    )
}

export default About;