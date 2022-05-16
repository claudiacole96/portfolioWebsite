import "./portfolio.scss";
import React from 'react';
import { FaLaptopCode } from 'react-icons/fa'

export default function Portfolio({darkmode}) {

    const projectsList = [
        {
            img: "assets/madlib-site.png",
            title: "Madlib Website",
            tools: "HTML5, CSS, JAVASCRIPT",
            link: "https://github.com/claudiacole96/portfolio/tree/main/madlib-website",
            description: "Single-page web application using JavaScript to allow the user to input words and generate a madlib with the user's inputs."
        },
        {
            img: "assets/static-portfolio-site.png",
            title: "Portfolio Site",
            tools: "HTML5, CSS, JAVASCRIPT",
            link: "https://github.com/claudiacole96/portfolio/tree/main/portfolio-site",
            description: "First static portfolio website with multiple pages and css styling."
        },
        {
            img: "assets/igloo-lounge-website.png",
            title: "Igloo Lounge Website",
            tools: "HTML5, CSS, JAVASCRIPT",
            link: "https://github.com/claudiacole96/portfolio/tree/main/first-website",
            description: "Card store websites using multiple pages to show upcoming events and announcements for a local store."
        },
        {
            img: "assets/quote4quoteSS.png",
            title: "Quote4Quote",
            tools: "REACT.JS, JAVASCRIPT, EXPRESS.JS, MYSQL, Node.JS",
            link: "https://github.com/claudiacole96/portfolio/tree/main/Quote4Quote",
            description: "Web application using React, Express, and a mySQL database to store user's input and return a random quote from the database. The more user inputs, the larger the database gets and the more quotes that can be returned"
        },
    ];

    return (
        <div className={"portfolio " + (darkmode && "dark")} id="portfolio">
            <h1>Portfolio</h1>
            
            <div className="container">
                {projectsList.map((i) => (
                    <div className="item-container">
                        <div className="item">
                            <img 
                                src={i.img}
                            alt="" 
                            />
                            <h3>{i.title}</h3>
                        </div>
                        <div className="description">
                            <h4 className="text">{i.description}</h4>
                            <h4 className="tools">Tools Used: <span>{i.tools}</span></h4>
                        </div>
                        <a href={i.link}><FaLaptopCode/></a>
                    </div>
                ))}
            </div>
        </div>
    )
}