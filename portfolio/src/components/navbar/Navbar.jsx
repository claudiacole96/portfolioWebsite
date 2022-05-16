import "./navbar.scss";
import { AiFillMail, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
//import icons from font awesome

export default function Navbar({ menuOpen, setMenuOpen, darkmode }) {
    return (
        <div className={"navbar " + (menuOpen && "active ") + (darkmode && "dark")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="/assets/logo.png" alt="" />
                    </a>
                    <div className="itemContainer">
                        <div className="icon">
                            <AiFillMail/>
                        </div>
                        <span>claudiacoledev@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="social-links">
                        <div className="icons">
                            <div className="icon">
                                <AiFillLinkedin/>
                            </div>
                            <div className="icon">
                                <AiOutlineTwitter/>
                            </div>
                            <div className="icon">
                                <AiFillGithub/>
                            </div>
                    </div>
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}