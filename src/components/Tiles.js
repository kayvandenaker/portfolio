import React from 'react';
import { Link} from 'react-router-dom';

function Tiles({onZoomClick, onNextClick}) {

  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Tiles — Connecting with your music collection.</h2>
          <h3>Problem</h3>
          <p>Modern music listening experiences often lack suspense. The black box present in modern technologies such as mobile phones abstract away what's going on behind the interface and don't require any process to interact with; any song in the world is just one click away, no sonic feedback, no haptic feedback and flat visual feedback.</p>
          {/* <img src="./img/tiles/suspense.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/> */}
          
          <h3>Solution</h3>
          <p>
            {/* Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals and facilitates collaborative interaction with medical data. */}
            Tiles is an exploration of how a tangible interface in combination with artificial sounds can convey the message of music listening as the sophisticated process it was intended to be.
            <blockquote>By mechanically moving the top down, music moves from the collection into the player and presents the user with album info and playback controls.</blockquote>
          </p>
          
    
         <video src="./img/tiles/video.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Navigating the music collection, cueing a song and increasing volume.</div>

          <p> Our approach is a device which puts emphasis on the albums; their artworks and information. In contrast to music streaming apps, Tiles provokes a careful selection of music and elegant interactions to enjoy your favorite tunes.</p>
          
          <div className='context quarter'>
            <div><b>Project Info</b> <br/>3 weeks, spring 2022<br/>  Sound Design Course<br/>  <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a><br/></div>
            <div><b>Team</b> <br/>
              <a href="https://emilechuffart.com" target="_blank">Emile Chuffart</a><br/> 
              <a href="https://www.tobias-ertel.de" target="_blank">Tobias Ertel</a><br/> 
              <a href="https://www.koolsson.com" target="_blank">Oscar Olsson</a>
            </div>
          </div>
          
          {/* <h2>Concept Video</h2>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe> */}
          
          <h2>Highlights & Contribution</h2>

          <h3>Experience Prototyping</h3>

          <p>After our initial brainstorming, I made a rough mockup of the interactions with the device in ProtoPie. This allowed us to quickly explore, communicate and iterate our interface ideas.</p>
          <img src="./img/tiles/protopie.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <p>I created a physical experience prototype to try out the tangible user interface in combination with the sounds and the graphical user interface. </p>
          <img src="./img/tiles/prototype.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <p>A beamer was used to quickly show what the screens would display. The capacitive touch sensor, rotary encoder and potentiometer communicate with ProtoPie through an Arduino Leonardo emulating keystrokes.</p>
          <div className='half'>
            <video src="./img/tiles/slider.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
            <video src="./img/tiles/cue.mp4" type="video/mp4" autoPlay={true} muted loop playsInline controls>Your browser does not support the video tag.</video>
          </div>
          <div className='image-details'>Turn on sound to hear the sonic feedback.</div>

          <h3>Model Making</h3>
          <p>This project was a collaboration with the Product Design MFA, so the fancy model you see bellow is mostly their work. I helped with the mechanical parts of the mockup and the video editting.</p>
          <img src="./img/tiles/process.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <img src="./img/tiles/render.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <img src="./img/tiles/back.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <div className='next'>
            <Link to='/team-red' onClick={onNextClick}>next: Team RED</Link>
          </div>

        </div>
    </div>
  )
}

export default Tiles;