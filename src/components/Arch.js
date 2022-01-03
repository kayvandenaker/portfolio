import React from 'react';

function Arch({onZoomClick}) {


  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Arch</h2>
          <p>Arch connects remote doctors to their patients through an interactive AR enviroment.</p>
          <h3>In short…</h3>
          <p>Arch is an augmented reality envrionment which places the patient in the doctors' room, lets the doctor feel the patients' vitals and allows for collaborative interaction with medical 3D data. 
          {/* <br/><br/> */}
          </p>
          {/* <div className='quote'>
            <div className='profile' style={{backgroundImage: "url('./img/quotes/inez.jpg'"}}></div>
            <div>
              “The fact that Kay has successfully combined the two-year Honors program with his regular Bachelor program at the Department of Industrial Design shows that he is an excellent and motivated student.” - Prof. I. Lopez Arteaga, Dean TU/e Honors Academy
            </div>
          </div> */}
          <div className='context'>
            <b>Context:</b> Design Project, UID<br/>
            <b>Contribution:</b> Research, Interaction Design & Experience Prototyping <br/>
            <b>When:</b> Autumn 2021<br/>
            <b>Partner:</b> <a href='https://www.regionvasterbotten.se/' target="_blank">Region Västerbotten</a>, <a href='https://www.nordicrebels.com/' target="_blank">Nordic Rebels</a>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Zwa_QQow_Y?rel=0" frameBorder="0" allowFullScreen="1"></iframe>

          <h2>Process coming soon :)</h2>




        </div>
    </div>
  )
}

export default Arch;