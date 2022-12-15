import React from 'react'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
    const [activeIcon, setActiveIcon] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveIcon("#")} className={activeIcon === "#" ? "active" : ""}>Home</a>
            <a href="#trailer" onClick={() => setActiveIcon("#trailer")} className={activeIcon === "#trailer" ? "active" : ""}>Trailer</a>
            <a href="#about" onClick={() => setActiveIcon("#about")} className={activeIcon === "#about" ? "active" : ""}>About</a>
            <a href="#bios" onClick={() => setActiveIcon("#bios")} className={activeIcon === "#bios" ? "active" : ""}>Bios</a>
            <a href="#screenings" onClick={() => setActiveIcon("#screenings")} className={activeIcon === "#screenings" ? "active" : ""}>Screenings</a>
            <a href="#credits" onClick={() => setActiveIcon("#credits")} className={activeIcon === "#credits" ? "active" : ""}>Credits</a>
        </nav>
    )
}

export default Nav