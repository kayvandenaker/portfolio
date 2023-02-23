import './css/App.css';
import './css/Home.css';
import './css/Page.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation} from 'react-router-dom';
import About from './components/About';
import Tiles from './components/Tiles';
import Arch from './components/Arch';
import Bmw from './components/Bmw';
import Fbp from './components/Fbp';
import Immersive from './components/Immersive';
import Head from './components/Head';
import Red from './components/Red';
import Experiments from './components/Experiments';
import Box from './components/Box'


//git add .
//git commit -m "fav-icon"
//git push
 
const menuItems = [
  {
    title: "Tiles",
    href: "tiles",
    color: "#888888",
    year: "2022",
    thumb: { src: "./img/tiles.jpeg", caption: "Connecting with your music collection." }
  },
  {
    title: "Arch",
    href: "arch",
    color: "#978e91",
    year: "2021",
    thumb: { src: "./img/arch.png", caption: "Connecting remote doctors to their patients through an AR enviroment." }
  },

  {
    title: "BMW Group",
    href: "bmw",
    color: "#5a6d7c",
    year: "2021",
    thumb: { src: "./img/bmw.jpg", caption: "Highlights of my work as creative technologist at the BMW Group." }
  },
  {
    title: "Ambient Office",
    href: "ambient-office",
    color: "#9f9184",
    year: "2020",
    thumb: { src: "./img/fbp.jpg", caption: "Connecting remote workers through ambient interactive soundscapes." }
  },
  {
    title: "Team RED",
    href: "team-red",
    color: "#6b605b",
    year: "2019",
    thumb: { src: "./img/red.jpg", caption: "Exploring future energy scenarios together." }
  },
  {
    title: "Experiments",
    href: "experiments",
    color: "#806c5a",
    year: "ongoing",
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

  const [scrollPos, setScrollPos] = useState("");

  const isFrontpage = useLocation().pathname === '/';

  const handleLinkClick = () => {
    setScrollPos(window.pageYOffset);
    document.documentElement.style.setProperty('--comes-from-home', 1);
    window.scrollTo(0, 0);
    
  }

  const handleNextClick = () => {
    document.documentElement.style.setProperty('--comes-from-home', 0);
    window.scrollTo(0, 0);
    console.log("next click");
  }



  return (
      <main onMouseMove={isFrontpage ? (e) => {setMouseX(e.clientX); setMouseY(e.clientY)} : undefined}>
          <Head isFrontpage={isFrontpage} hover={hover} mouseX={mouseX} mouseY={mouseY}/>
          <div className='head'>
            <div id="head-glow" className={(hover !== "") ? "active" : ""} style={{background: "radial-gradient(" + color + "66 0%, " + color + "00 70%)"}}></div>
            <div className='head-about'>
              <div>
              <h1>Kay van den Aker</h1>
              Designer and technologist exploring interactions that fuse digital and physical through prototyping. <br/><br/>Currently working at <a className='white' href='https://www.above.se' target="_blank">Above</a> and mastering Interaction Design at <a className='white' href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a>.
              <br /><br />
              {/* <span className='grey'>↳</span> <Link to="/about" onClick={handleLinkClick}>About / Contact me</Link> */}
              ↳ <span className='white'><Link to="/about" onClick={handleLinkClick}>About / Contact me</Link></span>
              </div>
            </div>
            <div className='head-projects'>
              <span className='work-normal'>Work</span>
              <div onMouseLeave={() => setHover("")}>
                {menuItems.map((el, i) => (
                  <div key={"div-to-" + el.href}>
                  <Link onClick={handleLinkClick} key={"link-to-" + el.href} to={"/" + el.href} onMouseEnter={() => {setHover(el.href); setColor(el.color)}}>
                    <span className='white'>{el.title}</span></Link><span className='grey'> — {el.year}</span>
                  
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='work grey'>Work</div>
          {menuItems.map((el, i) => (
            <Box onLinkClick={handleLinkClick} key={"box-" + el.href} hover={hover} name={el.href} image={el.thumb.src} title={el.title} info={el.thumb.caption}/>
          ))}
          
          <div id='zoom-overlay' className={zoomActive ? "active" : ""} onClick={() => {setZoomActive(false)}}><img src={zoomImg} alt=""/></div>

          <Link to="/" className={isFrontpage ? "exit" : "active exit"} onClick={(e) => {setMouseX(e.clientX); setMouseY(e.clientY); window.scrollTo(0, scrollPos);}}>✗</Link>
          
          <Routes>
            <Route path="/" element={null}/>
            <Route path="/about" element={<About onNextClick={handleNextClick}/>}/>
            <Route path="/tiles" element={<Tiles onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="/arch" element={<Arch onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="/bmw" element={<Bmw onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="/ambient-office" element={<Fbp onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="/team-red" element={<Red onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="/experiments" element={<Experiments onZoomClick={handleZoomClick} onNextClick={handleNextClick}/>}/>
            <Route path="*" element={    
              <div className='page-container'>
                <div className='page-error'>
                  <h1>404: Page not found</h1>
                  <br/>
                  No stress. Just click the cross.
                </div>
              </div>
            }/>
            {/* <Route component={Error} /> */}
          </Routes>
      </main>
  )
}


export default App;

