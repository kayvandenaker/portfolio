import React from 'react'
import Squares from './Squares'

function Immersive({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Immersive Learning</h2>
          <p>Researching the efficiency of virtual reality language learning in high schools.</p>
          
          <h3>Summary</h3>
          <p>We researched whether an virtual reality game could improve the efficiency of learning foreign vocabulary and speaking. We designed and built the game using Unity with which we conducted research on multiple high schools with 24 first and second-year students. They could recall, on average, 3.1% more words in the same amount of study time while having much more fun!
          <br/><br/>
          Read more in the <a href='./files/vr.pdf' target="_blank"><u>research paper</u></a>.
          
          </p>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/Vx_r5u0Rj2I?start=3&rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          <Squares onZoomClick={onZoomClick} img_1="./img/immersive/vr2.png" img_2="./img/immersive/vr.jpg" img_3="./img/immersive/vr.png" img_4="./img/immersive/research.png"/>
          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/erik.jpg'"}}></div>
            <div>“The VR experience was really well made, a full game that is close to what an actual game used in language lessons could look/play like. It's clear a lot of work went into it, and the design of being a spy infiltrating the castle of a French king is very inspiring.” - Prof. E. D. van der Spek, Project Coach TU/e</div>
          </div>
          <div className='context'>
          <b>Context:</b> Design Research Project, TU/e<br/>
          <b>Contribution:</b> Design Researcher & Game Design  <br/>
          <b>Team:</b> Jurrien Brondijk, Natanya Cornet & Niels Jansen  <br/>
          <b>When:</b> Spring 2018<br/>
          <b>Partner:</b> <a href='https://www.unapalomablanca.com/' target="_blank">Una Paloma Blanca</a><br/>
          </div>

        </div>
    </div>
  )
}

export default Immersive;