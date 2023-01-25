import React from 'react';
import { Link} from 'react-router-dom';

function Experiments({onZoomClick, onNextClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Experiments</h2>
          <p>A collection of experiments with hardware, software and everything in between.</p>
 
          <h3>Tactile touch interfaces</h3>
          <p>Textured textiles as tactile touch interfaces.<br/> Neonode touch sensor as input for ProtoPie, projection mapped onto textile using MadMapper.</p>
          <video controls src="./img/experiments/touchbar.mp4" type="video/mp4" autoPlay={true} className="smallVideo" muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/touchbar2.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Radar presence detection</h3>
          <p>Exploring the possibilities of UWB as radar to detect human presence. <br/> Novelda UWB X4 sensor is talking to ProtoPie through a custom Python bridge. ProtoPie is visualizing the data and controlling a NeoPixel through an Adafruit Feather M0.</p>
          <video controls src="./img/experiments/uwb.mp4" type="video/mp4" autoPlay={true}  muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/uwb2.mp4" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Tactile Slider</h3>
          <p>Slider texture exploration as media controller. <br/>Arduino with Adafruit MPR121 capacitive touch sensor + Processing for the album animations.</p>
          <video controls src="./img/experiments/slider.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/slider.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
  
          <h3>Leap Lines</h3>
          <p>Distortion as the physical enters the digital world. <br/>Loads of particles make the lines in Unity VFX + LeapMotion for the hand tracking.</p>
          <video controls src="./img/experiments/lines.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/lines.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Generative Shaders </h3>
          <p>Using shaders to generate colorful animations.<br/>Made using various noise textures and gradients in Blender.</p>
          <video controls src="./img/experiments/colors.mp4" type="video/mp4" autoPlay={true}  muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/colors.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Timer Concept</h3>
          <p>Micro interaction to go from 0:59 to 1:00.<br/>Made using ProtoPie, tested on iPhone.</p>
          <video controls src="./img/experiments/timer.mp4" type="video/mp4" autoPlay={true} className="smallVideo" muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/timer.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Kinect Kitchen</h3>
          <p>Kitchens can be fun, especially with generative art. <br/>Projection mapping and image processing in TouchDesigner + Kinect for body tracking.</p>
          <video controls src="./img/experiments/kinect.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/kinect.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
    
          <h3>Kona Focus</h3>
          <p>Apple Watch concept for meditation in the Hyundai Kona when it drives autonomously. <br/>Made using ProtoPie.</p>
          <video controls src="./img/experiments/kona.mp4" type="video/mp4" autoPlay={true} className="smallVideo" muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/kona.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
        
          <h3>Immersive Learning</h3>
          <p>Researching whether a virtual reality game improves the efficiency of learning foreign language. <br/>Read more in the <a href='./files/vr.pdf' target="_blank"><u>research paper</u></a> or check the <a href="https://youtu.be/Vx_r5u0Rj2I" target="_blank"><u>full video</u></a>. Game made using Unity 3D (group).</p>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Vx_r5u0Rj2I?start=3&rel=0" frameBorder="0" allowFullScreen="1"></iframe> */}
          <img src="./img/experiments/vr.gif" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <img src="./img/immersive/vr.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
    
          <h3>Desktop Switcher</h3>
          <p>Switching between desktops, clicky style. <br/>Adafruit 32U4 with microswitches emulating keyboard shortcuts ctrl + windows + left/right.</p>
          <video controls src="./img/experiments/desktop.mp4" type="video/mp4" autoPlay={true} className="smallVideo" muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/desktop.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
    
          <h3>MIDI Controller</h3>
          <p>My first <i>real</i> Arduino project from back in 2015; a MIDI Controller for FL Studio. Ancient, but a classic. Illuminated arcade buttons, potentionmeters and 5 segment LED filter level indicators.</p>
          <img src="./img/experiments/midi.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <div className='next'>
            <Link to='/tiles' onClick={onNextClick}>next: Tiles</Link>
          </div>
        </div>
    </div>
  )
}

export default Experiments;