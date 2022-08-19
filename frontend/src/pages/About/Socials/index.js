import './index.scss';
import { FaLinkedinIn, FaGithub, FaCopyright } from 'react-icons/fa';

const Socials = () => {
    return (
        <>
            <div className="socials">
                <div className="credits"><p><span><FaCopyright /></span> Stephan van der Meijden &#x2022; 2022</p></div>
                <div className="social">
                    <a href="https://nl.linkedin.com/in/stephan-vd-m" target="_blank" rel="noreferrer" className="no_after">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/aevitas1" target="_blank" rel="noreferrer" className="no_after">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Socials;