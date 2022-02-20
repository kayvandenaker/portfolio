import React from 'react'
import Squares from './Squares'
import { Link} from 'react-router-dom';


function Red({onZoomClick, onNextClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Team RED — Exploring future energy scenarios together.</h2>
          
          <h3>Problem</h3>
          <p>The biggest bottleneck in the energy transition for campuses, such as the Eindhoven University of Technology, is the lack of overview of the current electricity grid, its problems and the impact that sustainable innovations can have on it. 
          </p>

          <h3>Solution</h3>
          <p>
          Team RED is tackles this issue by providing an innovation guiding platform to gain an overview and assist stakeholders in decision making. The map is used to try out various energy scenarios together by simply placing tokens, which represent innovations, on the map. The impact will be immediately visible on the data visualization on the screen underneath.
           <blockquote> By making energy data very tangible and easily to interact with, Team RED allows stakeholders to make faster and better informed decisions.</blockquote>
          </p>
          <img src="./img/red/snap_crop.gif" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <div className='image-details'>Putting an innovation on the map.</div>
          <p>
            The table was used by the TU/e to gain insights into their grid data and discuss with energy stakeholders, it was presented at the entrance of the main building of the campus to allow for students and others to interact with the map as well.
            <br/><br/>
            RED has been presented at various expos such as the Dutch Design Week (twice) and the 4TU contest where we got to pitch our concept to the prime minister of the Netherlands.
          </p>
          <Squares onZoomClick={onZoomClick} img_1="./img/red/render.jpg" img_2="./img/red/tuecontest.jpg" img_3="./img/red/4tu.jpg" img_4="./img/red/ddwtable.jpg"/>


          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/inez.jpg'"}}></div>
            <div>
              “The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” — Prof. I. Lopez Arteaga, Dean TU/e Honors Academy
            </div>
          </div>
          <div className='context quarter'>
            <div><b>Context</b> <br/>2 years, 2017 - 2019<br/>  Student Team <br/> TU/e Honors Academy<br/></div>
            <div><b>Partner</b><br/> <a href='https://www.exentr.com/' target="_blank">Exentr</a></div>
          </div>

          {/* <h2>Concept Video</h2>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/87QHXdIrvMM?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
           */}
          <h2>Highlights & Contribution</h2>
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

          <h3>Experience Prototyping</h3>
          <p>I was responsible for the design and building of the tangible user interface. The battery-powered tokens have a screen to show which innovation is currently loaded onto it. A magnetic connector is used by the token to connect to a building and measure the resistance in the building and thus identifying its location. 
          </p>
          {/* <img src="./img/red/snap_crop.gif" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-LZKdGwGRYs?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          <p>
            This location would then be sent through wifi using an ESP to the back-end to calculate the grid simulation. A magnetic snap connector is used to ease the moving of the tokens and allow for seamless interaction. A simple enclosure was 3D printed to protect the electronics.</p>
          <Squares onZoomClick={onZoomClick} img_1="./img/red/token.png" img_2="./img/red/token2.jpg" img_3="./img/red/table.jpg" img_4="./img/red/snap.jpg"/>

          
          <div className='next'>
            <Link to='/experiments' onClick={onNextClick}>next: Experiments</Link>
          </div>
        
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