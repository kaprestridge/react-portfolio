import React from 'react'
import logo from '../img/kp-logo.png'
import {Link} from 'react-scroll'

const Nav = () => {
    return(
        <>
        <nav className="h-20 z-50 bg-olive text-red-50 flex flex-row flex-wrap items-center fixed w-screen">
            <Link to="about" spy={true} smooth={true}>
                <img src={logo} alt="Kathryn's logo" className="h-20 cursor-pointer"></img>
            </Link>
            <Link  to="projects" spy={true} smooth={true} className="cursor-pointer">Projects</Link>
            <p className="m-2 cursor-pointer">Contact</p>
        </nav>
    </>
    )
}

export default Nav