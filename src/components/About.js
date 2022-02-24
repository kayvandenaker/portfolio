import React from 'react';
import { Link} from 'react-router-dom';

function About({onNextClick}) {
  return (
    <div className='page-container'>
        <div className='page-content about'>
          <div className='about-grid'>
            <div className='profile' style={{backgroundImage: "url('./img/head2.jpg'"}}></div>
            <div>
              <h2>Kay van den Aker</h2>
              <p>Designer at Rolls-Royce / MFA at Umeå Institute of Design
                <span style={{ marginBottom: 0}}>Mostly in Umeå, sporadically Goodwood</span>
              </p>
            </div>
          </div>
          <h3>About</h3>
          {/* My name is Kay van den Aker (he/him). I am an interaction designer and creative technologist from the Netherlands. I am fascinated by the relationship between people and the ever smarter getting world and how design allows us to shape this alliance.
          <br/><br/>
          I combine technical problem solving and creative thinking to design innovative concepts and immersive prototypes. My approach is hands-on and explorative while focused on the users’ and societal needs. */}
          My name is Kay van den Aker (he/him), I'm a designer and technologist who likes to explore interactions in the digital and physical world. My approach is hands-on, iterative and experience prototyping focussed; showing is explaining.
          {/* My approach is very hands-on and experience prototyping focused; showing is explaining, seeing is believing. */}
          <br/><br/>
          Design is a big passion of mine, but there's more to life. I love to travel, explore philosophy or do any sport with water really — surfing, diving and sailing are among my favorites. 💃

          <h3>Contact</h3>
          <div className='about-grid'>
            <div>Email</div><div><a href='mailto:kayvandenaker@gmail.com'>kayvandenaker@gmail.com</a></div>
            <div>LinkedIn</div><div><a href='https://www.linkedin.com/in/kayvandenaker/' target="_blank">wwww.linkedin.com/in/kayvandenaker</a></div>
            <div>Instagram</div><div><a href='https://www.instagram.com/aker.industries/' target="_blank">@aker.industries</a></div>
            {/* <div>Resume</div><div>aker.pdf</div> */}
          </div>
          <h3>Experience</h3>
          <div className='about-grid'>
            <div>2022 - now</div><div>Interaction Designer at Rolls-Royce Motor Cars
              <span>Goodwood, United Kingdom <br/><br/>Designing and prototyping interior concept mockups at the bespoke department, both remote and on-site.</span>
            </div>
            <div>2021</div><div>Creative Technologist at BMW Group 
              <span>Munich, Germany <br/><br/> Intern at the early-phase design and development department. (concept cars) <br/> Translating designers’ ideas into interactive experience prototypes combining various hardware and software to explore, iterate and validate concepts in the beginning of the design process. (arduino, kinect, unity, madmapper, leap motion, touchdesigner, protopie, fmod)</span>
            </div>
            <div>2017 - 2019</div><div>Interaction Designer / Co-Founder at Team RED
            <span>Eindhoven, Netherlands <br/><br/> Student startup focused on the acceleration of the energy transition by providing an interactive map on which the impact of sustainable innovations can be simulated.</span>
            </div>
            {/* <div>2018 - 2019</div><div>Chairman at Study Association Lucid
              <span>Eindhoven, Netherlands<br/><br/> Leading the board, guiding the association and facilitating activities that strengthen the community, support the education and prepare students for their career.</span>
            </div> */}
            <div>2019</div><div>Surf Instructor at Flowtrack
              <span>San Vicente de la Barquera, Spain<br/><br/> Surf Instructor (ISA 1) and Life Saver (ILS) for 13+ and 16+ surf camps.</span>
            </div>
            <div>2018</div><div>Co-Design Facilitator for Newcastle University
              <span>Lunteren, Netherlands<br/><br/> Facilitator for Myto, a co-design event about mitochondrial disease organized by Open Lab from the Newcastle University.</span>
            </div>
          </div>
          <h3>Education</h3>
          <div className='about-grid'>
            <div>2021 - now</div><div>MFA, Interaction Design at Umeå Institute of Design
              <span>Umeå, Sweden</span>
            </div>
            <div>2016 - 2021</div><div>BSc, Industrial Design w/ honors at Eindhoven University of Technology
              <span>Eindhoven, Netherlands <br/><br/> Chairman of Study Association Lucid <br/>Student Council of the Honors Academy<br/>Surf Committee of Avalanche Boarders</span>
            </div>
            <div>2019 - 2020</div><div>Exchange, Industrial Design at Umeå Institute of Design
              <span>Umeå, Sweden</span>
            </div>
          </div>
          <h3>Exhibitions</h3>
          <div className='about-grid'>
            <div>2022</div><div>Dubai Design Week — <Link to='/team-red' onClick={onNextClick}>Arch</Link></div>
            <div>2021</div><div>IAA Mobility — <Link to='/bmw' onClick={onNextClick}>BMW i Vision Circular</Link></div>
            <div>2020</div><div>Dutch Design Week, Drivers of Change exhibition — <Link to='/team-red' onClick={onNextClick}>Team RED</Link></div>
            <div>2019</div><div>Dutch Design Week, Drivers of Change exhibition — <Link to='/team-red' onClick={onNextClick}>Team RED</Link></div>
          </div>
        </div>
    </div>
  )
}

export default About;