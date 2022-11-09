import React from 'react';
import { Link} from 'react-router-dom';


const experienceItems = [
  {
    title: "Design Technologist",
    company: "Above",
    link: "https://www.above.se",
    date: "now",
    location: "Malmö, Sweden",
    description: ""
  },
  {
    title: "Design Technologist",
    company: "Arduino",
    link: "https://www.arduino.cc",
    date: "2022",
    location: "Malmö, Sweden",
    description: "Documentation website research, redesign and prototyping (react.js). Creating content for MicroPython."
  },
  {
    title: "Design Technologist",
    company: "Rolls-Royce Motor Cars",
    link: "https://www.rolls-roycemotorcars.com",
    date: "2022",
    location: "Goodwood, United Kingdom",
    description: "Designing and prototyping a digital interior concept at the bespoke innovations department, mostly remote but sporadically on-site."
  },
  {
    title: "Creative Technologist",
    company: "BMW Group",
    link: "https://www.bmwgroup.com",
    date: "2021",
    location: "Munich, Germany",
    description: "Intern at the early-phase design and development department. (concept cars) <br/> Translating designers’ ideas into interactive experience prototypes combining various hardware and software to explore, iterate and validate concepts in the beginning of the design process. (arduino, kinect, unity, madmapper, leap motion, touchdesigner, protopie, fmod)"
  },
  {
    title: "Surf Instructor",
    company: "Flowtrack",
    link: "https://www.flowtrack.be",
    date: "2019",
    location: "San Vicente de la Barquera, Spain",
    description: ""
  },
  {
    title: "Design Technologist / Co-Founder",
    company: "Team RED",
    link: "/team-red",
    date: "2017 - 2019",
    location: "Eindhoven, Netherlands",
    description: "Student startup focused on the acceleration of the energy transition by providing an interactive map on which the impact of sustainable innovations can be simulated."
  },
  {
    title: "Co-Design Facilitator",
    company: "Newcastle University",
    link: "https://openlab.ncl.ac.uk",
    date: "2018",
    location: "Lunteren, Netherlands",
    description: "Facilitator for Myto, a co-design event about mitochondrial disease organized by Open Lab from the Newcastle University."
  },
]

const educationItems = [
  {
    title: "MFA, Interaction Design",
    university: "Umeå Institute of Design",
    link: "https://www.uid.umu.se/en/",
    date: "2021 - now",
    location: "Umeå, Sweden",
    description: "Class Representative"
  },
  {
    title: "BSc (Hons), Industrial Design",
    university: "Eindhoven University of Technology",
    link: "https://www.tue.nl/en/",
    date: "2016 - 2021",
    location: "Eindhoven, Netherlands",
    description: 'Chairman of Study Association Lucid <br/> Student Council of the Honors Academy <br/> Surf Committee of Avalanche Boarders'
  },
  {
    title: "Exchange, Industrial Design",
    university: "Umeå Institute of Design",
    link: "https://www.uid.umu.se/en/",
    date: "2019 - 2020",
    location: "Umeå, Sweden",
    description: ""
  }
]

function About({onNextClick}) {
  return (
    <div className='page-container'>
        <div className='page-content about'>
          <div className='about-grid'>
            <div className='profile' style={{backgroundImage: "url('./img/head2.jpg'"}}></div>
            <div>
              <h2>Kay van den Aker</h2>
              <p>Design Technologist at Above | MFA IxD at Umeå Institute of Design
                <span style={{ marginBottom: 0}}>Located in Malmö, Sweden</span>
              </p>
            </div>
          </div>
          <h3>About</h3>
          Designer and technologist exploring interactions that fuse digital and physical. Thrives in ambiguous environments using a hands-on and iterative approach focused on experience prototyping; putting concepts in the world by gluing together various hard- and software.
          <br/><br/>
          Outside the design and tech world, you can find me travelling, exploring philosophy or doing water sports - surfing, diving and sailing are among my favorites. 💃
        

          <h3>Contact</h3>
          <div className='about-grid'>
            <AboutContent linkName="kayvandenaker@gmail.com" link="mailto:kayvandenaker@gmail.com" detail="Email"/>
            <AboutContent linkName="linkedin.com/in/kayvandenaker" link="https://www.linkedin.com/in/kayvandenaker" detail="LinkedIn"/>
            <AboutContent linkName="@kayvandenaker" link="https://twitter.com/kayvandenaker" detail="Twitter"/>
            <AboutContent linkName="@aker.industries" link="https://www.instagram.com/aker.industries/" detail="Instagram"/>
          </div>

          <h3>Experience</h3>
          <div className='about-grid'> 
            {experienceItems.map((el, i) => (
              <AboutContent title={el.title} linkName={el.company} link={el.link} subtitle={el.location} description={el.description} detail={el.date} key={i} />
            ))}
          </div>

          <h3>Education</h3>
          <div className='about-grid'> 
            {educationItems.map((el, i) => (
              <AboutContent title={el.title} linkName={el.university} link={el.link} subtitle={el.location} description={el.description} detail={el.date} key={i} />
            ))}
          </div>

          <h3>Exhibitions, Publications and Features</h3>
          
          <div className='about-grid'>
            <div><Link to='/tiles' onClick={onNextClick}>Tiles</Link></div>
            <div>
              <a href='https://www.protopie.io/blog/building-interactive-music-device-with-protopie/' target="_blank">ProtoPie Blog</a><br/>
              <a href='https://www.stirpad.com/news/stir-news/tiles-introduces-a-unique-and-engaging-analogue-music-experience/' target="_blank">STIR</a><br/>
              <a href='https://designwanted.com/tiles-connects-you-deeper-with-your-music-collection/' target="_blank">Design Wanted</a><br/>
              <a href='https://www.instagram.com/p/CcnQVeXJFVu/' target="_blank">Yanko Design</a><br/>
              <a href='https://www.instagram.com/p/CchqnE9D4lO/' target="_blank">Megosu</a><br/>
              <a href='https://blog-espritdesign.com/high-tech/tablette/tiles-quand-le-son-devient-interactif-68283' target="_blank">Blog Esprit Design</a>
            </div>
            <div><Link to='/arch' onClick={onNextClick}>Arch</Link></div><div><a href='https://www.dubaidesignweek.ae' target="_blank">Dubai Design Week</a><sup>'22</sup></div>
            <div><Link to='/bmw' onClick={onNextClick}>BMW Group</Link></div><div><a href='https://www.iaa.de' target="_blank">BMW i Vision Circular, IAA Mobility</a><sup>'21</sup></div>
            <div><Link to='/team-red' onClick={onNextClick}>Team RED</Link></div>
            <div>
              <a href='https://ddw.nl' target="_blank">Drivers of Change exhibition, Dutch Design Week</a><sup>'20</sup><br/>
              <a href='https://ddw.nl' target="_blank">Drivers of Change exhibition, Dutch Design Week</a><sup>'19</sup>
            </div>
            {/* <div><Link to='/team-red' onClick={onNextClick}>Team RED</Link></div><div><a href='https://ddw.nl' target="_blank">Drivers of Change exhibition, Dutch Design Week</a><sup>'19</sup></div> */}
          </div>

        </div>
    </div>
  )
}

function AboutContent({title, linkName, link, subtitle, description, detail, key}) {
  return (
    <React.Fragment key={key}>
    <div>{detail}</div>
    <div>
      {title ? title + " at" : ""} <a href={link} target="_blank">{linkName}</a>
      {subtitle ? <span>{subtitle} {description ? <><span dangerouslySetInnerHTML={{__html: description}}></span></> : ""}</span> : "" }
    </div>
  </React.Fragment>
  )
}

export default About;