import { useState } from "react"
import "./works.scss"
import { BsPencil, BsCode } from 'react-icons/bs'
import { FaLaptopCode } from 'react-icons/fa'

export default function Works({darkmode}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: BsPencil,
            title: "About Me",
            description: "Come learn more about me as a developer, a gamer, and an all round problem solver with ideas keeping me busy learning new ways to change the way we look at technology.",
            img: "assets/aboutMeImg.jpg",
            span: "Read More...",
            link: "https://www.linkedin.com/in/claudiacole96/",
        },
        {
            id: "2",
            icon: FaLaptopCode,
            title: "Portfolio Content",
            description: "Check out the code, and videos showing off the projects within this portfolio on their purpose, build, unique qualities, and more.",
            img: "assets/portfoliumLogo.jpg",
            span: "Visit Portfolium",
            link: "https://portfolium.com/claudiacole96",
        },
        {
            id: "3",
            icon: BsCode,
            title: "Github",
            description: "This website uses all the strengths from HTML5, CSS, JavaScript, React.JS, Express.JS, MySQL database, and more. Click the link below to take a look at the code that went to this project and others.",
            img: "assets/coding-screenshot.png",
            span: "See More...",
            link: "https://github.com/claudiacole96/portfolioWebsite",
        },
    ];

    const handleClick = (direction) => {
        direction === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className={"works " + (darkmode && "dark")} id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container">
                        <div className={"item " + (darkmode && "dark")}>
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <d.icon/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.description}</p>
                                    <a href={d.link}>{d.span}</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/down-white.png" alt="" className="arrow left" onClick={() => handleClick("left")}/>
            <img src="assets/down-white.png" alt="" className="arrow right" onClick={() => handleClick("right")}/>
        </div>
    )
}