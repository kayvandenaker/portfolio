import React from 'react'
import Squares from './Squares'

function Immersive({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Immersive Learning</h2>
          <p>Research the efficiency of virtual reality language learning in high schools.</p>
          
          <h3>About</h3>
          <p>We researched whether an interactive VR game would improve the efficiency of learning vocabulary and speaking. We designed and built an interactive VR game using Unity with which we conducted research on multiple high schools with 24 first and second-year students. They could recall 3.1% more words in the same amount of study time while having much more fun!
          <br/><br/>
          <a href='./files/vr.pdf' target="_blank"><u>Research paper</u></a>
          <br/><br/>
          <b>Context:</b> Design Research Project, TU/e<br/>
          <b>When:</b> Spring 2018<br/>
          <b>Partner:</b> <a href='https://www.unapalomablanca.com/' target="_blank">Una Paloma Blanca</a><br/>
          <b>Contribution:</b> Design Researcher & Game Design 
          {/* <br/><br/>
          Contribution: Setting up and conducting research, game design (Unity 3D) and group leader. */}
          {/* <span className='quote'>
          “The VR experience was really well made, a full game that is close to what an actual game used in language lessons could look/play like. It's clear a lot of work went into it, and the design of being a spy infiltrating the castle of a French king is very inspiring.” - Prof. E. D. van der Spek, Project Coach
          </span> */}
          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/erik.jpg'"}}></div>
            <div>“The VR experience was really well made, a full game that is close to what an actual game used in language lessons could look/play like. It's clear a lot of work went into it, and the design of being a spy infiltrating the castle of a French king is very inspiring.” - Prof. E. D. van der Spek, Project Coach TU/e</div>
          </div>

          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Vx_r5u0Rj2I?start=3&rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          <Squares onZoomClick={onZoomClick} img_1="./img/immersive/vr2.png" img_2="./img/immersive/vr.jpg" img_3="./img/immersive/vr.png" img_4="./img/immersive/research.png"/>
        </div>
    </div>
  )
}

export default Immersive;