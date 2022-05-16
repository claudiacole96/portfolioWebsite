import Navbar from "./components/navbar/Navbar"
import Menu from "./components/menu/Menu"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { BsLightbulbFill } from 'react-icons/bs'
import { MdNightlight } from 'react-icons/md'
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkmode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(darkmode === false ? true : false);
  };

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkmode={darkmode}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkmode={darkmode}/>
      <div className="sections">
        <Intro darkmode={darkmode}/>
        <Portfolio darkmode={darkmode}/>
        <Works darkmode={darkmode}/>
        <Testimonials darkmode={darkmode}/>
        <Contact darkmode={darkmode}/>
      </div>
      <div className="iconContainer">
        <span className={"darkmodeIcon " + (darkmode && "dark")}>
          <span onClick={() => handleClick()}>
            <MdNightlight className={(darkmode == false ? "active" : "none")}/>
            <BsLightbulbFill className={(darkmode == false ? "none" : "active")}/>
          </span>
        </span>
      </div>
    </div>
  );
}

export default App;
