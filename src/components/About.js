import React from 'react';
import { Link} from 'react-router-dom';


const experienceItems = [
  // {
  //   title: "Prototyper",
  //   company: "ProtoPie",
  //   link: "https://www.protopie.io",
  //   date: "2023 - now",
  //   location: "Remote",
  //   description: "Building demos and writing tutorials focussing on hardware integration."
  // },
  {
    title: "Contractor",
    company: "",
    link: "https://www.protopie.io",
    date: "2022 - now",
    location: "Remote",
    description: "Hapticlabs – Hardware integration, design and demo support. (now) <br/> ProtoPie – Building demos focused on hardware integration. (now) <br/> Rolls-Royce – Digital interior concept for the bespoke innovations department. (5mo)"
  },
  {
    title: "Design Technologist",
    company: "Above",
    link: "https://www.above.se",
    date: "2022 - 2023",
    location: "Malmö, Sweden",
    description: "Internship – Interaction design and experience prototyping."
  },

  {
    title: "Content Creator",
    company: "Arduino",
    link: "https://www.arduino.cc",
    date: "2022",
    location: "Malmö, Sweden",
    description: "Docs website redesign and prototyping. Creating uPython content."
  },
  // {
  //   title: "Design Technologist",
  //   company: "Rolls-Royce Motor Cars",
  //   link: "https://www.rolls-roycemotorcars.com",
  //   date: "2022",
  //   location: "Goodwood, United Kingdom",
  //   description: "Designing and prototyping a digital interior concept for bespoke innovations."
  // },
  {
    title: "Creative Technologist",
    company: "BMW Group",
    link: "https://www.bmwgroup.com",
    date: "2021",
    location: "Munich, Germany",
    description: "Internship – Experience prototyping at the concept car department."
    // description: "Intern at the early-phase design and development department. (concept cars) <br/> Translating designers’ ideas into interactive experience prototypes combining various hardware and software to explore, iterate and validate concepts in the beginning of the design process. (arduino, kinect, unity, madmapper, leap motion, touchdesigner, protopie, fmod)"
  },
  // {
  //   title: "Surf Instructor",
  //   company: "Flowtrack",
  //   link: "https://www.flowtrack.be",
  //   date: "2019",
  //   location: "San Vicente de la Barquera, Spain",
  //   description: ""
  // },
  {
    title: "Design Technologist / Co-Founder",
    company: "Team RED",
    link: "/team-red",
    date: "2017 - 2019",
    location: "Eindhoven, Netherlands",
    description: "Startup focused on the acceleration of the energy transition by providing an interactive map on which the impact of sustainable innovations can be simulated."
  },
]

const educationItems = [
  {
    title: "MFA, Interaction Design",
    university: "Umeå Institute of Design",
    link: "https://www.umu.se/en/umea-institute-of-design/",
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
    description: 'Chairman of Study Association Lucid <br/> Exchange Umeå Institute of Design <br/> Student Council of the Honors Academy'
  },
]

function About({onNextClick}) {
  return (
    <div className='page-container'>
        <div className='page-content about'>
          <div className='about-grid'>
            <div className='profile' style={{backgroundImage: "url('./img/profile2.jpg'"}}></div>
            <div>
              <h2>Kay van den Aker</h2>
              <p>Design Tech Contractor | MFA IxD at <a href="https://www.umu.se/en/umea-institute-of-design/" target="_blank">Umeå Institute of Design</a>
                <span style={{ marginBottom: 0}}>Located in Umeå, Sweden</span>
              </p>
            </div>
          </div>
          <h3>About</h3>
          Design technologist exploring interactions that fuse digital and physical. Thrives in ambiguous environments using a hands-on and iterative approach focused on experience prototyping; putting concepts in the world by gluing together various hard- and software.
          {/* <br/><br/>
          
          Right now he's doing exactly that at <a href="https://www.above.se" target="_blank">Above</a>. Before that, he created content at <a href="https://www.arduino.cc" target="_blank">Arduino</a> and built bespoke innovation concepts at <a href="https://www.rolls-roycemotorcars.com" target="_blank">Rolls-Royce</a> whilst mastering IxD at <a href="https://www.umu.se/en/umea-institute-of-design/" target="_blank">UID</a>. 
          Earlier, he prototyped concept car mockups at <a href="https://www.bmwgroup.com" target="_blank">BMW</a> and did bachelors in ID at the <a href="https://www.tue.nl/en/" target="_blank">TU/e</a>.
          There he also co-founded <Link to="/team-red" onClick={onNextClick}>Team RED</Link>, a startup creating a tool to explore future energy scenarios together.  */}
          <br/><br/>
          Outside the design and tech world, you can find him travelling, exploring philosophy or in the ocean doing various water sports. He's also been a surf instructor in Spain for a bit. 🏄🏼‍♂️
        

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
              // <AboutContent title={el.title} linkName={el.company} link={el.link} subtitle={el.location} description={el.description} detail={el.date} key={i} />
              <AboutContent title={el.title} linkName={el.company} link={el.link} subtitle={el.description}  detail={el.date} key={i} />
            ))}
          </div>

          <h3>Education</h3>
          <div className='about-grid'> 
            {educationItems.map((el, i) => (
              <AboutContent title={el.title} linkName={el.university} link={el.link} subtitle={el.description} detail={el.date} key={i} />
            ))}
          </div>

          <h3>Exhibitions, Publications and Features</h3>
          
          <div className='about-grid'>
            <div><Link to='/tiles' onClick={onNextClick}>Tiles</Link></div>
            <div>
              <a href='https://www.protopie.io/blog/best-prototypes-of-the-year' target="_blank">Best ProtoPie Prototypes</a><sup>'22</sup><br/>
              <a href='https://www.protopie.io/blog/building-interactive-music-device-with-protopie/' target="_blank">ProtoPie Blog</a><br/>
              <a href='https://www.stirpad.com/news/stir-news/tiles-introduces-a-unique-and-engaging-analogue-music-experience/' target="_blank">STIR</a><br/>
              <a href='https://designwanted.com/tiles-connects-you-deeper-with-your-music-collection/' target="_blank">Design Wanted</a><br/>
              <a href='https://www.instagram.com/p/CcnQVeXJFVu/' target="_blank">Yanko Design</a><br/>
              <a href='https://www.instagram.com/p/CchqnE9D4lO/' target="_blank">Megosu</a><br/>
              <a href='https://blog-espritdesign.com/high-tech/tablette/tiles-quand-le-son-devient-interactif-68283' target="_blank">Blog Esprit Design</a>
            </div>
            <div><Link to='/arch' onClick={onNextClick}>Arch</Link></div><div><a href='https://www.dubaidesignweek.ae' target="_blank">Dubai Design Week</a><sup>'22</sup></div>
            <div><Link to='/bmw' onClick={onNextClick}>BMW i Vision Circular</Link></div>
            <div>
              <a href='https://ifdesign.com/en/winner-ranking/project/bmw-i-vision-circular/347328' target="_blank">iF Design Award</a><sup>'22</sup><br/>
              <a href='https://www.dubaidesignweek.ae/programme/2022/bmw-i-circular-vision/' target="_blank">Dubai Design Week</a><sup>'22</sup><br/>
              <a href='https://www.iaa.de' target="_blank">IAA Mobility</a><sup>'21</sup>
            </div>
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
      {title ? title : ""} {title && linkName ? "at" : ""} <a href={link} target="_blank">{linkName}</a>
      {/* {subtitle ? <span>{subtitle} {description ? <><span dangerouslySetInnerHTML={{__html: description}}></span></> : ""}</span> : "" } */}
      {subtitle ? <><span dangerouslySetInnerHTML={{__html: subtitle}}></span></> : ""}
    </div>
  </React.Fragment>
  )
}

export default About;