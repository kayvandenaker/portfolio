import React from 'react';
import { Link} from 'react-router-dom';


const experienceItems = [
  {
    title: "Design Technologist Intern",
    company: "Above",
    link: "https://www.above.se",
    date: "upcoming 🍂",
    location: "Malmö, Sweden",
    description: ""
  },
  {
    title: "Junior Content Creator",
    company: "Arduino",
    link: "https://www.arduino.cc",
    date: "upcoming ☀️",
    location: "Malmö, Sweden",
    description: ""
  },
  {
    title: "Interaction Designer",
    company: "Rolls-Royce Motor Cars",
    link: "https://www.rolls-roycemotorcars.com",
    date: "2022",
    location: "Goodwood, United Kingdom",
    description: "Designing and prototyping a digital interior concept at the bespoke department, mostly remote but sporadically on-site."
  },
  {
    title: "Creative Technologist Intern",
    company: "BMW Group",
    link: "https://www.bmwgroup.com",
    date: "2021",
    location: "Munich, Germany",
    description: "Intern at the early-phase design and development department. (concept cars) <br/> Translating designers’ ideas into interactive experience prototypes combining various hardware and software to explore, iterate and validate concepts in the beginning of the design process. (arduino, kinect, unity, madmapper, leap motion, touchdesigner, protopie, fmod)"
  },
  {
    title: "Interaction Designer / Co-Founder",
    company: "Team RED",
    link: "",
    date: "2017 - 2019",
    location: "Eindhoven, Netherlands",
    description: "Student startup focused on the acceleration of the energy transition by providing an interactive map on which the impact of sustainable innovations can be simulated."
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
    title: "BSc, Industrial Design w/ honors",
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
              <p>MFA Interaction Design at Umeå Institute of Design
                <span style={{ marginBottom: 0}}>Located in Umeå, soon Malmö</span>
              </p>
            </div>
          </div>
          <h3>About</h3>
          My name is Kay van den Aker (he/him), I'm a designer and technologist who loves to explore interactions in the digital and physical world. I thrive in ambiguous environments using a hands-on and iterative approach focused on experience prototyping.
          <br/><br/>
          Design is a big passion of mine, but there's more! I love to travel, explore philosophy or do any sport with water — surfing, diving and sailing are among my favorites. 💃
        

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

          <h3>Exhibitions</h3>
          <div className='about-grid'>
            <div>2022</div><div><a href='https://www.dubaidesignweek.ae' target="_blank">Dubai Design Week</a> — <Link to='/arch' onClick={onNextClick}>Arch</Link></div>
            <div>2021</div><div><a href='https://www.iaa.de' target="_blank">IAA Mobility</a> — <Link to='/bmw' onClick={onNextClick}>BMW i Vision Circular</Link></div>
            <div>2020</div><div><a href='https://ddw.nl' target="_blank">Dutch Design Week, Drivers of Change exhibition</a> — <Link to='/team-red' onClick={onNextClick}>Team RED</Link></div>
            <div>2019</div><div><a href='https://ddw.nl' target="_blank">Dutch Design Week, Drivers of Change exhibition</a> — <Link to='/team-red' onClick={onNextClick}>Team RED</Link></div>
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
      {subtitle ? <span>{subtitle} {description ? <><br/><br/><span dangerouslySetInnerHTML={{__html: description}}></span></> : ""}</span> : "" }
    </div>
  </React.Fragment>
  )
}

export default About;