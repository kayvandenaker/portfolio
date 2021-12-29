import React from 'react';
import Squares from './Squares'

function Fbp({onZoomClick}) {
  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Ambient Office</h2>
          <p>Connecting remote workers through ambient sounds and rich interaction.</p>
          <h3>About</h3>
          <p>Ambient Office is the result of my thesis, it's a tool which helps remote workers to connect with each other and enhance the feeling of inclusiveness. It does this by providing a visual and auditory overview of a digital office space through which the user can see and hear what coworkers are also working from home and what they are doing. Through a tangible interface, the user can 'walk' through the office and easily start conversations or join conference calls.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nwUdHMbM90k?start=27" frameBorder="0" allowFullScreen="1"></iframe>

          <h3>Problem</h3>
          <p>The pandemic and problems that were arising were a big motivation and inspiration to design for connectivity among remote workers in an attempt to decrease loneliness and give people the feeling of involvement and inclusion with their colleagues.</p>

          <h3>Ideation</h3>
          <p>After brainstorming ideas, a concept that seemed promising was a device which showed a map of a digital office in which all the coworkers and their availability are shown and casual contact could be initiated. <br/><br/> Visuals were used to quickly explore interface ideas of the concept such as a valve to indicate openness and a slider to leave the office. I got inspired by the research of the Interaction Attention Continuum which lead to the sliding dial which lets the user slide through the office and allow for peripheral interaction, for example when the user needs to focus he can slide it down without looking at it, but more precise control is allowed when a user wants to initiate a call for example.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/first.png" img_1="./img/ambient_office/ui.png" img_2="./img/ambient_office/ui2.png" img_3="./img/ambient_office/ui3.png" img_4="./img/ambient_office/ui4.png"/>

          <h3>Experience Prototyping</h3>
          <p>Low-fidelity mockups were created to quickly explore physical and digital aspects of the concept, making these mockups helped to quickly communicate the concepts and get feedback on for example the colours as an indication for availability which was changed to a more natural indicator which is size, as in the real world if someone is further away they are smaller and less available. <br/><br/> A digital prototype was made to explore the integration of sounds and the behaviour of the product. I looked at research on soundscapes to investigate how information can be transferred through sound and allow for peripheral interaction. Also, a quick render was made to explore and communicate which parts of the interface would be digital and physical, this was inspired by the dematerialization in a physical world which states dynamic parts should be digital and static parts physical.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/glass.gif" img_1="./img/ambient_office/TR2.gif" img_2="./img/ambient_office/UI5.png" contain_2="true" img_3="./img/ambient_office/UI7.png" img_4="./img/ambient_office/UI6.png" contain_4="true"/>

          <h3>Deployment Prototype</h3>
          <p>A physical prototype was made to understand the dimensions of the product and the interactions with it. Initially, I wanted to use magnet or hall sensors to identify the position and orientation of the dial but this turned out to be too inaccurate and too much effort at this point in the process. <br/><br/> I decided to create the prototype using a touch monitor to first validate the visual and auditory overview before continuing with the electronics.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/dp0.jpg" img_1="./img/ambient_office/dp1.gif" img_2="./img/ambient_office/dp2.png" img_3="./img/ambient_office/dp3.jpg" img_4="./img/ambient_office/dp4.png"/>

          <h3>User Test 1</h3>
          <p>Users were involved as much as possible throughout the whole design process to validate parts of my design but to also get inspired by their input. <br/><br/>  The first user test was done with 2 other students who had the touch prototype on their desk with the visual overview of the digital office and the accompanying soundscape playing on their laptop speakers. The prototype allowed the users to easily call each other or me. Deploying at this stage showed me the overlap in openness and availability I initially designed, sliding up and down and rotating the dial turned out to be confusing. It also showed me how much they enjoyed the overview and the sounds which was a real conversation starter so that validated part of my initial thoughts about the ease of connecting with each other.</p>
          <h3>Sound Survey</h3>
          <p>A sound survey was used to get a better understanding of how people interpreted the soundscapes, for example, how many people they hear and what they think they are doing. The survey helped to map the volume and quantity of sounds the soundscape should play to match with the visual overview.</p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/ut0.jpg" img_1="./img/ambient_office/ut1.png" img_2="./img/ambient_office/ut2.png" img_3="./img/ambient_office/ut3.png" img_4="./img/ambient_office/ut4.jpg"/>
          <div className='half'>
            <div>
              Sound sample #1 <br/>
              <audio src="./sounds/1.mp3" controls controlsList="nodownload noplaybackrate" />
              Sound sample #2 <br/>
              <audio src="./sounds/2.mp3" controls controlsList="nodownload noplaybackrate" />
            </div>
            <div>
              Sound sample #3 <br/>
              <audio src="./sounds/3.mp3" controls controlsList="nodownload noplaybackrate" />
              Sound sample #4 <br/>
              <audio src="./sounds/4.mp3" controls controlsList="nodownload noplaybackrate" />
            </div>
          </div>

          <h3>Midterm video</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7XITkTCeO3k?start=32" frameBorder="0" allowFullFcreen=""></iframe>

          <h3>User test 2</h3>
          <p>I had a meeting with a company to gain insights into their current problems and if my design was going in the right direction. The CEO validated that the social informal interaction was something which was really lacking but he also stressed the fact that he did not want the product to come over as micromanaging or invasive, I stressed here the fact that all the sounds are fictional and that the device only opens the video calling platform they are already using, MS Teams.
          <br/><br/>
          I pitched the concept to the companies employees and explained I would like to deploy an app version of the concept to validate the soundscape and visual overview. I decided to build an app as this allows me to deploy at many people at the same time but also to work according to the social distancing measures which were in place.
          <br/><br/>
          I sent a manual the day before the deployment to set up Microsoft Teams and make sure everything would work seamlessly. The deployment helped me to gather insights about their behaviour using the product, they explained to me they really liked the overview and found it easier to start informal and formal conversations but the analogue sliding was still confusing to show their openness, they explained that in the real office they go to different parts of the office to show others their availability, for example, go to the conference room when they want to focus.
          <br/><br/>
          This showed me that openness and availability are inherit to the location of the office workers and I decided to transition towards the use of zones to identify yourself with. I also transitioned to a dial to decrease the product in size, make it more scalable and create a more elegant and minimalist aesthetic.
          </p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/de0.jpg" img_1="./img/ambient_office/de1.jpg" img_2="./img/ambient_office/de2.png" img_3="./img/ambient_office/de3.png" img_4="./img/ambient_office/de4.png"/>

          <h3>Outcome</h3>
          <p>
          An interactive mockup was created to communicate and evaluate the concept. A quick MDF mockup was made to explore the shape and dimensions of the prototype, afterwards, a render was used to explore materials such as aluminium and fabric. The enclosure was made using MDF as the sides would be covered by fabric, the front was made using a laser cutter. The dial has a custom gear mechanism I designed so it could ‘float’ over the screen. I used a lathe to create a custom aluminium dial to give the product a premium and polished look. The combination of fabric and aluminium was used as it gives a cosy yet professional aesthetic which suits the home office.
          <br/><br/>
          Finally, all the electronics were mounted and programmed, see the interactive visual bellow the check out what is exactly inside of the Ambient Office. A P5js sketch runs on the Raspberry Pi which is connected to the rotary encoder and button of the dial through an Arduino Nano. The RPi connects to the LCD to show the visual overview and to the audio amplifier to play stereo ambient office sounds.
          <br/><br/>
          <a href='./files/fbp.pdf' target="_blank"><u>Report</u></a>
          <span className='quote'>“Looking back at over a decade of experience I can only say that Kay was among the most self-propelling students I have seen at their final Bachelor's level. His hands-on approach, combined with a sharp academic mind, made that Kay not only had working prototypes from early on in his process, but also that he was capable of backing these experienceable models up with a thorough and solid rationale. He always works with his coaches' advice, is independent and eager to learn. I would recommend him to anyone” - Prof. B. J. Hengeveld, Project Coach</span>
          </p>
          <Squares onZoomClick={onZoomClick} img_hero="./img/fbp.jpg" img_1="./img/ambient_office/ou1.jpeg" img_2="./img/ambient_office/ou2.png" img_3="./img/ambient_office/ou3.jpeg" img_4="./img/ambient_office/ou4.gif"/>
          <Squares onZoomClick={onZoomClick} img_hero="./img/ambient_office/electronics.jpg" img_1="./img/ambient_office/ou5.jpg" img_4="./img/ambient_office/tuiwithcall.gif" img_2="./img/ambient_office/ou7.jpg" img_3="./img/ambient_office/2.gif"/>
          <iframe className='web-prototype' src="./web_prototype/embed.html" style={{width: "1366px", height: "768px", border: "0px", transformOrigin: "top left", transform: "scale(calc(736 / 1366))"}}></iframe>
        </div>
    </div>
  )
}

export default Fbp;