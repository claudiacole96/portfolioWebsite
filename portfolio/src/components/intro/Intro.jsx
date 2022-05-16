import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { BiChevronDown } from 'react-icons/bi'

export default function Intro({darkmode}) {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [" Frontend Designer", " Backend Developer", " Responsive Web App", "n Online Store"]
        })
    },[]);

    return (
        <div className={"intro " + (darkmode && "dark")} id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/headshot.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Claudia Evans</h1>
                    <h3>Do you need a<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <span className={darkmode && "dark"}><BiChevronDown/></span>
                </a>
            </div>
        </div>
    )
}