import React from 'react';

function Arch({onZoomClick}) {


  return (
    <div className='page-container'>
        <div className='page-content'>
          <h2>Arch</h2>
          <p>This is the Arch project page. Coming soon!</p>
          <br /><br />
          {/* <div className='img-two'>
            <img src="arch.png" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
            <img src="./img/bmw.jpg" alt="" className="img-zoomer" onClick={(e) => {onZoomClick(e.target.src)}}/>
          </div> */}
        </div>
    </div>
  )
}

export default Arch;