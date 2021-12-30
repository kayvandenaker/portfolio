import React from 'react'
import {Link, useLocation} from 'react-router-dom';

function Box({onLinkClick, hover, name, image, title, info}) {
    return (
        <Link 
            to={name}
            className={`box ${(useLocation().pathname === "/" + name) ? "active" : ""} ${(hover === name) ? "hovered" : ""} ${(useLocation().pathname === "/") ? "" : "inactive"}  `}  
            onClick={onLinkClick}
        >
            <div className='background' style={{backgroundImage: "url(" + image + ""}}></div>
            <div className='info'>
                <span className='title'>{title}</span>
                {info}
            </div>
        </Link>
    )
}

export default Box;