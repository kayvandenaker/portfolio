import React from 'react'

function Squares({onZoomClick, img_hero, img_1, img_2, img_3, img_4, contain_1, contain_2, contain_3, contain_4}) {
    return(
        <div className='squares-box'>
            {img_hero !== undefined ? <img src={img_hero} alt="" className="img-zoomer" onClick={(e) => {onZoomClick(img_hero)}}/> : ""}
            <div className='squares'>
                <div style={{backgroundImage: "url(" + img_1 + ""}} className={`img-zoomer ${contain_1 ? "contain" : ""}`} onClick={(e) => {onZoomClick(img_1)}}></div>
                <div style={{backgroundImage: "url(" + img_2 + ""}} className={`img-zoomer ${contain_2 ? "contain" : ""}`} onClick={(e) => {onZoomClick(img_2)}}></div>
                <div style={{backgroundImage: "url(" + img_3 + ""}} className={`img-zoomer ${contain_3 ? "contain" : ""}`} onClick={(e) => {onZoomClick(img_3)}}></div>
                <div style={{backgroundImage: "url(" + img_4 + ""}} className={`img-zoomer ${contain_4 ? "contain" : ""}`} onClick={(e) => {onZoomClick(img_4)}}></div>
            </div>
        </div>
    )
}

export default Squares;