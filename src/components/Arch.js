import React from 'react';

function Arch({onZoomClick}) {


  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Arch</h2>
          <p>Arch connects remote doctors to their patients through an interactive AR enviroment.</p>
          <h3>Summary</h3>
          <p>Remote healthcare consultation is a big challenge. Arch bridges this gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals and facilitates collaborative interaction with medical data.
          {/* <br/><br/> */}
          </p>
          {/* <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/inez.jpg'"}}></div>
            <div>
              “The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” - Prof. I. Lopez Arteaga, Dean TU/e Honors Academy
            </div>
          </div> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe>
          <div className='context'>
            <b>Context:</b> Design Project, UID<br/>
            <b>Contribution:</b> Research, Interaction Design & Experience Prototyping <br/>
            <b>When:</b> Autumn 2021<br/>
            <b>Partner:</b> <a href='https://www.regionvasterbotten.se/' target="_blank">Region Västerbotten</a>, <a href='https://www.nordicrebels.com/' target="_blank">Nordic Rebels</a>
          </div>

          <h2>Process highlights</h2>
          <h3>Research</h3>
          <p>At the beginning of the project, we mapped out our personal experiences regarding remote healthcare.</p>
          <img src="./img/arch/vision.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          <p>Our field research was conducted in Storuman, a municipality in the southern Lapland region that has been using remote healthcare solutions since the 1990s.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Od75MOOSzv4" frameBorder="0" allowFullScreen="1"></iframe>
          <p>Some of the issues shared by the healthcare team during the field research trip were:
            <ul>
              <li>a large elderly population that taxed limited resources</li>
              <li>a widely-distributed population that required a lot of time traveling to</li>
              <li>slow procurement times for new technology</li>
              <li>poor adoption and integration of new technology</li>
              <li>lack of time for training opportunities to reskill healthcare professionals in new technology</li>
            </ul>
          </p>

          <h3>Stakeholder mapping</h3>
          <p>We mapped the healthcare system and its stakeholders to gain overview in its complexity.</p>
          <img src="./img/arch/map.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Sacrificial Prototyping</h3>
          <p>Generating low-fi prototypes of ideas for the sole sake of sacrificing them for insights. We exposed these interventions to involved stakeholders and observed their approach to and perception of them. We also used them as conversation starters in interviews with doctors.
          <br/><br/>This gave us the opportunity to evaluate the relevance of certain direction very early on in the process and set our direction.</p>
          <img src="./img/arch/sacrificial.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Workshop</h3>
          <p>
          In a 40 minute remote workshop, we presented our physical map and our sacrificial prototypes. We gave the participants time to give anonymous, written feedback using a Google form. When we asked the participants how they envisioned healthcare and how these concepts fit into their mental models, several trends emerged:
          Personalised, Patient-centric, Social and Data Driven.
          {/* <ul>

            <li>Personalised — patients are seeking healthcare that is that is tailored to their personal needs.</li>
            <li>Patient-centric — designing for healthcare professionals must consider the patient’s perspective.</li>
            <li>Social — patients want to feel like they are interacting with a human being and don’t want to feel like just a number in the healthcare system.</li>
            <li>Data-driven — leveraging tech to streamline work processes.</li>
          </ul> */}

          </p>
          <img src="./img/arch/workshop.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Interviews</h3>
          <p>We conducted eight remote interviews during the exploration and conceptualization phase of our design process.</p>
          <img src="./img/arch/interviews.jpeg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Bodystorming</h3>
          <p>This method was used to gather insights in what a collaborative space would look like by acting out remote healthcare consultation scenarios and how technology would assist in this process.</p>
          <img src="./img/arch/bodystorming.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>

          <h3>Experience Prototyping</h3>
          <p>By creating an experience which mimics the experience of interacting with the concept, a better understanding of bottlenecks and opportunities was created.</p>
          {/* <img src="./img/arch/experience.gif" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/> */}
          <p>The setup consisted of:
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

          <h3>Outcome</h3>
          <p>Arch bridges the gap that today’s digital mediums cause. Our approach is a full body scan of the people and projecting those in augmented reality at their opponent. This creates an immersive experience of togetherness and allows both doctor and patient to express themselves using their full body.</p>
          <video src="./img/arch/archhandshake.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <p>Arch simplifies the doctor’s work interface and builds a coherent workflow between the workstation and the central connection point, allowing doctors to keep their focus on communicating with their patients.</p>
          <video src="./img/arch/archtangibility.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          <p>The interactive 3D model supports the doctor in their explanation and the central control allows both doctor and patient to engage.</p>
          <video src="./img/arch/archinteraction.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video>
          {/* <video src="./img/arch/archtransition.mp4" type="video/mp4" autoPlay={true} muted loop playsInline>Your browser does not support the video tag.</video> */}

          <p>To facilitate the interaction of the doctor with the complex medical data, a 2D graphical user interface is present at their desk.</p>
          <iframe className='mac' width="560" height="315" src="https://www.youtube.com/embed/W0dYsp1yQTA" frameBorder="0" allowFullScreen="1"></iframe>
        </div>
    </div>
  )
}

export default Arch;