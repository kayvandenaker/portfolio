import './css/App.css';
import './css/Home.css';
import './css/Page.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation} from 'react-router-dom';
import About from './components/About';
import Arch from './components/Arch';
import Bmw from './components/Bmw';
import Fbp from './components/Fbp';
import Immersive from './components/Immersive';
import Head from './components/Head';
import Red from './components/Red';
import Experiments from './components/Experiments';
import Box from './components/Box'


// import ArchThumb from "./images/arch.jpg";
// import BmwThumb from "./images/bmw.jpg";
// import AmbientThumb from "./images/fbp.jpg";
// import RedThumb from "./images/red.jpg";
// import ExpThumb from "./images/experiments.jpg";

const menuItems = [
  {
    title: "Arch",
    href: "arch",
    color: "#978e91",
    thumb: { src: "./img/arch.png", caption: "Arch connects remote doctors to their patients through an interactive AR enviroment." }
  },
  {
    title: "BMW Group",
    href: "bmw",
    color: "#5a6d7c",
    thumb: { src: "./img/bmw.jpg", caption: "Highlights of my work as design technologist at the BMW Group headquarters in Munich." }
  },
  {
    title: "Ambient Office",
    href: "ambient-office",
    color: "#9f9184",
    thumb: { src: "./img/fbp.jpg", caption: "Connecting remote workers through ambient interactive soundscapes." }
  },
  {
    title: "Team RED",
    href: "team-red",
    color: "#6b605b",
    thumb: { src: "./img/red.jpg", caption: "Collaborating and exploring future energy scenarios together." }
  },
  {
    title: "Immersive Learning",
    href: "immersive-learning",
    color: "#87746d",
    thumb: { src: "./img/immersive.jpg", caption: "Researching the efficiency of virtual reality language learning in high schools." }
  },
  {
    title: "Experiments",
    href: "experiments",
    color: "#806c5a",
    thumb: { src: "./img/experiments.jpg", caption: "A collection of experiments with hardware, software and everything in between." }
  }
];

function App() {

  const [hover, setHover] = useState("");
  const [color, setColor] = useState("");

  const [zoomImg, setZoomImg] = useState("");
  const [zoomActive, setZoomActive] = useState(false);
  const handleZoomClick = (img) => {setZoomImg(img); setZoomActive(true);}

  const [mouseX, setMouseX] = useState("");
  const [mouseY, setMouseY] = useState("");

  const isFrontpage = useLocation().pathname === '/';

  const handleLinkClick = () => {
    document.documentElement.style.setProperty('--comes-from-home', 1);
    window.scrollTo(0, 0);
    console.log("scrolltop;");
  }

  return (
      <main onMouseMove={isFrontpage ? (e) => {setMouseX(e.clientX); setMouseY(e.clientY)} : undefined}>
          <Head isFrontpage={isFrontpage} hover={hover} mouseX={mouseX} mouseY={mouseY}/>
          <div className='head'>
            <div id="head-glow" className={(hover !== "") ? "active" : ""} style={{background: "radial-gradient(" + color + "66 0%, " + color + "00 70%)"}}></div>
            <div className='head-about'>
              <h1>Kay van den Aker</h1>
              Designer and technologist from the Netherlands who explores, iterates and communicates through experience prototyping. Currently working at Rolls-Royce and mastering Interaction Design at Umeå Institute of Design.
              <br /><br />
              <span className='grey'>↳</span> <Link to="/about" onClick={handleLinkClick}>About / Contact me</Link>
            </div>
            <div className='head-projects'>
              <span className='grey'>Work</span>
              <div onMouseLeave={() => setHover("")}>
                {menuItems.map((el, i) => (
                  <Link onClick={handleLinkClick} key={"link-to-" + el.href} to={"/" + el.href} onMouseEnter={() => {setHover(el.href); setColor(el.color)}}>
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className='work grey'>Work</div>
          {menuItems.map((el, i) => (
            <Box onLinkClick={handleLinkClick} key={"box-" + el.href} hover={hover} name={el.href} image={el.thumb.src} title={el.title} info={el.thumb.caption}/>
          ))}
          
          <div id='zoom-overlay' className={zoomActive ? "active" : ""} onClick={() => {setZoomActive(false)}}><img src={zoomImg} alt=""/></div>

          <Link to="/" className={isFrontpage ? "exit" : "active exit"} onClick={(e) => {setMouseX(e.clientX); setMouseY(e.clientY)}}>✗</Link>
          
          <Routes>
            <Route path="/" element={null}/>
            <Route path="/about" element={<About />}/>
            <Route path="/arch" element={<Arch onZoomClick={handleZoomClick} />}/>
            <Route path="/bmw" element={<Bmw onZoomClick={handleZoomClick} />}/>
            <Route path="/ambient-office" element={<Fbp onZoomClick={handleZoomClick} />}/>
            <Route path="/team-red" element={<Red onZoomClick={handleZoomClick} />}/>
            <Route path="/immersive-learning" element={<Immersive onZoomClick={handleZoomClick} />}/>
            <Route path="/experiments" element={<Experiments onZoomClick={handleZoomClick} />}/>
            {/* <Route component={Error} /> */}
          </Routes>
      </main>
  )
}

export default App;