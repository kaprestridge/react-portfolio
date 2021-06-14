import React from 'react'
import logo from '../img/kp-logo.png'

const Nav = () => {
    return(
        <>
        <nav className="h-20 bg-olive text-red-50 flex flex-row flex-wrap items-center fixed w-screen">
            <img src={logo} alt="Kathryn's logo" class="h-20"></img>
            <p className="m-2">Projects</p><a href="#Projects"> Back to the top </a>
            <p className="m-2">Contact</p>
        </nav>
    </>
    )
}

export default Nav