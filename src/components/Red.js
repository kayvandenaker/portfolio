import React from 'react'
import Squares from './Squares'

function Red({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Team RED</h2>
          <p>Tangible interactable on which stakeholders collaborate and explore energy scenarios together.</p>
          
          <h3>Problem</h3>
          <p>The biggest bottleneck in the energy transition for campuses, such as the Eindhoven University of Technology, is the lack of overview of the current situation, the problems and the impact of sustainable innovations.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/87QHXdIrvMM?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          
          <h3>Ideation</h3>
          <p>Our initial idea for the overview-enhancing platform was digital but after prototyping, we quickly shifted towards physical to allow for a richer multi-user and collaborative experience. The tokens represent sustainable innovations such as solar panels or wind turbines, placing them on the map simulates and shows the impact on the energy grid.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/red/tokens.jpg" img_1="./img/red/setup.jpg" img_2="./img/red/discussion.png" img_3="./img/red/meeting.jpg" img_4="./img/red/render1.jpg"/>
          
          <h3>Prototyping</h3>
          <p>I was responsible for the design and building of the tangible user interface. The battery-powered tokens have a screen to show which innovation is currently loaded onto it. A magnetic plug was used by the token to connect to a building and measure the resistance in the building and thus identifying its location. This location would then be sent through wifi using an ESP to the back-end to calculate the grid simulation. We transitioned from a 9v plug to a magnetic snap connector to ease the moving of the tokens and allow for a richer interaction. A simple enclosure was 3D printed to protect the electronics and prototype the experience.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/red/snap_crop.gif" img_1="./img/red/token.png" img_2="./img/red/token2.jpg" img_3="./img/red/table.jpg" img_4="./img/red/snap.jpg"/>
          
          <h3>Outcome</h3>
          <p>The table was used by the TU/e to gain insights into their grid data and discuss with energy stakeholders. The map is presented at the entrance of the main building of the campus to allow for students and others to interact with the map as well. RED has been presented at various expos such as the Dutch Design Week twice and the 4TU contest where we got to pitch our concept to the prime minister of the Netherlands.
          <span className='quote'>“The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” - Prof. I. Lopez Arteaga, Dean TU/e Honors Academy</span></p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-LZKdGwGRYs?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          <Squares onZoomClick={onZoomClick} img_hero="" img_1="./img/red/render.jpg" img_2="./img/red/tuecontest.jpg" img_3="./img/red/4tu.jpg" img_4="./img/red/ddwtable.jpg"/>
        
        </div>
    </div>
  )
}

export default Red;