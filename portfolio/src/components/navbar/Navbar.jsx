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
                        <span>claudiacole1996@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="social-links">
                        <div className="icons">
                            <div className="icon">
                                <a className={(darkmode && " dark ") + (menuOpen && " active ")} href="https://www.linkedin.com/in/claudiacole96/"><AiFillLinkedin/></a>
                            </div>
                            <div className="icon">
                                <a className={(darkmode && " dark ") + (menuOpen && " active ")} href="https://twitter.com/claudiacole96"><AiOutlineTwitter/></a>
                            </div>
                            <div className="icon">
                                <a className={(darkmode && " dark ") + (menuOpen && " active ")} href="https://github.com/claudiacole96"><AiFillGithub/></a>
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