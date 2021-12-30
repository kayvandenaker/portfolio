import React from 'react';

function Experiments({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Experiments</h2>
          <p>A collection of hard- and software experiments.</p>
          <h3>Tactile Slider</h3>
          <p>Slider texture exploration. Arduino with Adafruit MPR121 capacitive touch sensor + Processing for the album animations.</p>
          <video controls src="./img/experiments/slider.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/slider.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Leap Lines</h3>
          <p>Line ripples. Loads of particles make lines in Unity VFX graph + LeapMotion hand tracking.</p>
          <video controls src="./img/experiments/lines.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/lines.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Kinect Kitchen</h3>
          <p>Kitchens can be fun. Projection mapping and image processing in TouchDesigner + Kinect body tracking.</p>
          <video controls src="./img/experiments/kinect.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/kinect.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Kona Focus</h3>
          <p>Apple Watch app concept for meditation in the Hyundai Kona Electric when it drives autonomously. Made using ProtoPie.</p>
          <video controls src="./img/experiments/kona.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/kona.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Desktop Switcher</h3>
          <p>Switching between desktops, clicky style. Adafruit 32U4 breakout board with microswitches emulating keyboard shortcuts ctrl + windows + left/right.</p>
          <video controls src="./img/experiments/desktop.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <img src="./img/experiments/desktop.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>MIDI Controller</h3>
          <p>My first <i>real</i> Arduino project from back in 2015; a MIDI Controller for FL Studio. Ancient, but a classic. Illuminated arcade buttons, potentionmeters and 5 segment LED filter level indicators.</p>
          <img src="./img/experiments/midi.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
        </div>
    </div>
  )
}

export default Experiments;