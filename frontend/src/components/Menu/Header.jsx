import './Header.css'

import React from 'react'

export default function Header(props) {
    return (
            
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 white">
                <li><a href="/Todo" className="nav-link px-2 btn btn-outline-primary">Home</a></li>
                <li><a href="/About" className="nav-link px-2 text-white">About</a></li>
            </ul>

            
    )
}