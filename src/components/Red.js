import React from 'react'
import Squares from './Squares'



function Red({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Team RED</h2>
          <p>Tangible interactable on which stakeholders collaborate and explore energy scenarios together.</p>
          
          <h3>In short…</h3>
          <p>The biggest bottleneck in the energy transition for campuses, such as the Eindhoven University of Technology, is the lack of overview of the current situation, the problems and the impact of sustainable innovations. Team RED is tackling this issue by providing an innovation guiding platform to gain overview and assist stakeholders in decision making.
          {/* <br/><br/> */}
          </p>
          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/inez.jpg'"}}></div>
            <div>
              “The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” - Prof. I. Lopez Arteaga, Dean TU/e Honors Academy
            </div>
          </div>
          <div className='context'>
            <b>Context:</b> Student Team, Energy Transition Track, TU/e Honors Academy<br/>
            <b>Contribution:</b> Lead / Interaction Design & Experience Prototyping <br/>
            <b>When:</b> 2017 - 2019<br/>
            <b>Partner:</b> <a href='https://www.exentr.com/' target="_blank">Exentr</a>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/87QHXdIrvMM?rel=0" frameBorder="0" allowFullScreen="1"></iframe>

          <h2>The Process</h2>
          <h3>Ideation</h3>
          <p>Our initial idea for the platform was digital but after prototyping, we quickly shifted towards physical to allow for a richer multi-user and collaborative experience. 
          </p>
          <img src="./img/red/discussion.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <p>
            
            The tokens represent sustainable innovations such as solar panels or wind turbines, placing them on the map simulates and shows the impact on the energy grid.</p>
          {/* <Squares onZoomClick={onZoomClick} img_hero="./img/red/tokens.jpg" img_1="./img/red/setup.jpg" img_2="./img/red/discussion.png" img_3="./img/red/meeting.jpg" img_4="./img/red/render1.jpg"/> */}
          <img src="./img/red/tokens.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <div className='half'>
            <img src="./img/red/setup.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./img/red/render1.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          </div>

          <h3>Prototyping</h3>
          <p>I was responsible for the design and building of the tangible user interface. The battery-powered tokens have a screen to show which innovation is currently loaded onto it. A magnetic connector is used by the token to connect to a building and measure the resistance in the building and thus identifying its location. 
          </p>
          <img src="./img/red/snap_crop.gif" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <p>
            This location would then be sent through wifi using an ESP to the back-end to calculate the grid simulation. A magnetic snap connector is used to ease the moving of the tokens and allow for seamless interaction. A simple enclosure was 3D printed to protect the electronics.</p>
          <Squares onZoomClick={onZoomClick} img_1="./img/red/token.png" img_2="./img/red/token2.jpg" img_3="./img/red/table.jpg" img_4="./img/red/snap.jpg"/>
          
          <h3>Outcome</h3>
          <p>The table was used by the TU/e to gain insights into their grid data and discuss with energy stakeholders. The map is presented at the entrance of the main building of the campus to allow for students and others to interact with the map as well. 
            </p>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/-LZKdGwGRYs?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
            <p>
            RED has been presented at various expos such as the Dutch Design Week (twice) and the 4TU contest where we got to pitch our concept to the prime minister of the Netherlands.
          {/* <span className='quote'>“The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” - Prof. I. Lopez Arteaga, Dean TU/e Honors Academy</span> */}
          </p>
          
          
          
          <Squares onZoomClick={onZoomClick} img_1="./img/red/render.jpg" img_2="./img/red/tuecontest.jpg" img_3="./img/red/4tu.jpg" img_4="./img/red/ddwtable.jpg"/>
        
        </div>
    </div>
  )
}

export default Red;




// var pressing = "up";

// document.addEventListener('keydown', (e) => {
//   var headers = document.getElementsByTagName("H3");
//   var headerOffsets = [0];
//   for(var i = 0; i < headers.length; i++){
//     headerOffsets[i+1] = headers[i].offsetTop - 96;
//   }
//   if(pressing === "up"){
//     if(e.keyCode === 37) { //left
//       for(var i = 1; i < headerOffsets.length; i++){
//         if(window.scrollY >= headerOffsets[i-1] && window.scrollY <= headerOffsets[i]){
//           console.log(window.scrollY + " is between " + headerOffsets[i-1] + " and " + headerOffsets[i]);
//           window.scrollTo(0, headerOffsets[i-1]);
//           return;
//         }
//       }
//     }
//     if(e.keyCode === 39) { //right
//       for(var j = 1; j < headerOffsets.length; j++){
//         if(window.scrollY >= headerOffsets[j-1] && window.scrollY < headerOffsets[j]){
//           console.log(window.scrollY + " is between " + headerOffsets[j-1] + " and " + headerOffsets[j]);
//           window.scrollTo(0, headerOffsets[j]);
//           return;
//         }
//       }
//     }
//     pressing = "down";
//   }
// });

// document.addEventListener('keyup', (e) => {\
//   pressing = "up";
// });