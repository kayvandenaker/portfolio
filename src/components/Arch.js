import React from 'react';
import { Link} from 'react-router-dom';

function Arch({onZoomClick, onNextClick}) {

  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Arch — Connecting remote doctors to their patients through an AR enviroment.</h2>
          <h3>Problem</h3>
          <p>Remote healthcare consultation is a big challenge, the screen of a video call limits the richness of the real world and makes the healthcare experience compromised for both doctor and patient. </p>
          <h3>Solution</h3>
          <p>
            {/* Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals and facilitates collaborative interaction with medical data. */}
            Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through vibration in the central interface.
            <blockquote>The central interface allows for collaborative interaction with AR and lets the doctor focus more on the patient.</blockquote>
          </p>
          
    
         <video src="./img/arch/archinteraction.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <div className='image-details'>Collaboratively interacting with medical data over distance. (doctor left, patient as hologram right)</div>
          <div className='half'>
            <div>
              <video src="./img/arch/archtangibility.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
              <div className='image-details'>Remote patient hearbeat monitoring.</div>
            </div>
            <div>
              <video src="./img/arch/archhandshake.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
              <div className='image-details'>Joining the consultation.</div>
            </div>
          </div>
          <p> Our approach is a full body scan of the people and projecting those in augmented reality at their opponent. This creates an immersive experience of togetherness and allows both doctor and patient to express themselves using their full body.</p>
          
          <div className='context quarter'>
            <div><b>Project Info</b> <br/>10 weeks, autumn 2021<br/>  Professional Product Design<br/>  <a href='https://www.uid.umu.se/en/' target="_blank">Umeå Institute of Design</a><br/></div>
            <div><b>Team</b> <br/>
              <a href="https://lukasmoro.com" target="_blank">Lukas Moro</a><br/> 
              <a href="https://www.josiereilly.com" target="_blank">Josie Reilly</a><br/> 
              <a href="https://www.wtianyiportfolio.com" target="_blank">Tianyi Wang</a>
              </div>
            <div><b>Partner</b><br/> <a href='https://www.regionvasterbotten.se/' target="_blank">Region Västerbotten</a><br/><a href='https://www.nordicrebels.com/' target="_blank">Nordic Rebels</a></div>
          </div>
          
          <h2>Concept Video</h2>
          <br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          
          <h2>Highlights & Contribution</h2>

          <h3>Research</h3>

          <p>We conducted field research in Storuman, a municipality in the southern Lapland region that has been using remote healthcare solutions since the 1990s.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Od75MOOSzv4" frameBorder="0" allowFullScreen="1"></iframe>
          {/* <p>Some of the issues shared by the healthcare team during the field research trip were:
            <ul>
              <li>a large elderly population that taxed limited resources</li>
              <li>a widely-distributed population that required a lot of time traveling to</li>
              <li>slow procurement times for new technology</li>
              <li>poor adoption and integration of new technology</li>
              <li>lack of time for training opportunities to reskill healthcare professionals in new technology</li>
            </ul>
          </p> */}

          <p>We mapped out our personal experiences with remote healthcare and mapped the healthcare system and its stakeholders to gain overview in its complexity.</p>
          <div className='half'>
            <img src="./img/arch/vision.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./img/arch/map.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          </div>

          <h3>Sacrificial Prototyping</h3>
          <p>Generating low-fi prototypes of ideas for the sole sake of sacrificing them for insights. We exposed these interventions to involved stakeholders and observed their approach to and perception of them. We also used them as conversation starters in interviews with doctors.
          <br/><br/>This gave us the opportunity to evaluate the relevance of certain direction very early on in the process and set our direction.</p>
          <img src="./img/arch/sacrificial.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Evaluating</h3>
          <p>
          In a remote workshop, we presented our physical map and our sacrificial prototypes. We gave the participants time to give anonymous, written feedback using a form. When we asked the participants how they envisioned healthcare and how these concepts fit into their mental models, several trends emerged:
          Personalised, Patient-centric, Social and Data Driven.<br/><br/> Next to the workshop we conducted eight remote interviews during the exploration and conceptualization phase of our design process.
          </p>
          <div className='half'>
            <img src="./img/arch/workshop.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./img/arch/interviews.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          </div>


          <h3>Bodystorming</h3>
          <p>This method was used to gather insights in what a collaborative space would look like by acting out remote healthcare consultation scenarios and how technology would assist in this process.</p>
          <img src="./img/arch/bodystorming.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Experience Prototyping</h3>
          <p>I created a prototype to mimic the experience of interacting with the concept with the goal to gain a better understanding of bottlenecks and opportunities.
          <br/><br/>
          The setup consisted of:
            <ul>
              <li>Kinect to film the person and TouchDesigner to cut out the background, this mimics the 3D scan of the patients/doctors body.</li>
              <li>Beamer to project the person on the wall and table, this mimics the AR projection of the other persons body in your room.</li>
              <li>Webcam to film the marker and Processing to add the 3D model onto the video, this mimics the AR projection of 3D models that could be looked at from both doctor’s and patient’s side.</li>
              <li>Pinnacle mockup which has an Arduino and rotary encoder inside which sends zoom and rotation data to the Processing sketch over Serial, this mimics the physical device that allows for collaborative interaction with the AR data.</li>
            </ul>
            </p>
          <video src="./img/arch/archuxprototype.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
            <p>Using a Mac Tactile Engine we were able to mimic a heartbeat and experience what it would feel like to sit in front of someone and get BPM information through such a tangible interface.
          </p>
          <div className='half'>
            <img src="./img/arch/tactile.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./img/arch/setup.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          </div>
          <div className='next'>
            <Link to='/bmw' onClick={onNextClick}>next: BMW Group</Link>
          </div>

        </div>
    </div>
  )
}

export default Arch;