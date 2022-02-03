import React from 'react';
import { Link} from 'react-router-dom';

function Bmw({onZoomClick, onNextClick}) {

  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>BMW Group — Highlights of my work as creative technologist.</h2>
          <p></p>
          <h3>Summary</h3>
          <p>My main role within BMW Group was to explore, iterate and validate design proposals early in the process (mainly for the BMW i Vision Circular). 
            I often found myself with designers, artists, composers and engineers thinkering to make their ideas experience-able. 
            I worked with various hard- and software tools such as Arduino, Kinect, Unity, MadMapper, Leap Motion, TouchDesigner and ProtoPie. 
            
          <br/><br/>
            The process pics are under NDA so these are only the fancy-schmancy visuals.
          </p>
          
          <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/daniel.jpg'"}}></div>
            <div>
                “Kay did a fantastic job within our design team! He helped us shaping future in-car interactions with tons of mockups ( sketched, modeled, 3D Printed, soldered, programmed, iterated). Kay matched perfectly in our team - his behavior was always a professional, nice and appreciated one.
                His skills were already outstanding and even new tools didn’t scared him at all - with the help of team members, tutorials and manuals he showed a perfect learning curve.
                We hope he comes back for his next internship or directly applies for a job!” — Daniel Fischer, UX/UI Designer BMW Group
            </div>
          </div>
          <div className='context quarter'>
            <div><b>Context</b> <br/>6 months, spring 2021<br/>  Internship<br/>  <a href='https://www.bmwgroup.com/' target="_blank">BMW Group</a><br/></div>
            <div><b>Supervisor</b><br/>Daniel Fischer</div>
          </div>

          <h2>What I worked on...</h2>

          <h3>Dashboard animation</h3>
          <p>I was end responsible for the dashboard particle animation; initially I explored various ways of mapping light into the crystal and later, together with artists and composers, creating interactive animations in Unity VFX while integrating the gesture tracking of the engineering team. Low-fi mockups were made throughout the process using Leap Motion, Kinect and TouchDesigner.</p>
          <video controls src="./img/bmw/interacting.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>
            Your browser does not support the video tag.
          </video>

          <h3>Steering Wheel</h3>
          <p>The simplistic steering wheel raised many questions regarding interaction possibilities. I created interactive prototypes of the touchpads using Arduino and capacitive touch sensors which were directly integrated into ProtoPie so the design department could quickly try out and iterate on their UI and interaction concepts.</p>
          <img src="./img/bmw/mfl.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>C-Pillar Lamps</h3>
          <p>The C-Pillar lamps are upcycled from old iDrive components. I received a sketch and turned that into an experience prototype using the original rotary encoder and crystal, an Arduino and a 3D printed enclosure. I created a PCB mockup, the swiveling mechanism and the (final) A-surfaces. </p>
          <img src="./img/bmw/lamp.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Art Bar</h3>
          <p>The Art Bar was something that was never done before so we had to research how such component would function. I 3D printed the lower part of the Art Bar and made a mockup for the illuminated capacitive touch sensors and color recognition camera.</p>
          <img src="./img/bmw/artbar.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Free-form Hover Displays</h3>
          <p>Unfortunately, this project is still ongoing so I cannot share too much, but throughout my internship I researched various technologies for free-from hover touch displays with the goal to more easily and quickly explore display shapes and interactions in interior mockups.</p>
          <img src="./img/bmw/hover.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <span className='details'>image source: www.cnet.com/tech/mobile/touchless-touch-screen-gives-you-control-without-contact-video/</span>

          <div className='next'>
            <Link to='/ambient-office' onClick={onNextClick}>next: Ambient Office</Link>
          </div>

        </div>
    </div>
  )
}

export default Bmw;