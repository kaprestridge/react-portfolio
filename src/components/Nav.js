import React from 'react'
import logo from '../img/kp-logo.png'

const Nav = () => {
    return(
        <>
        <nav class="h-20 bg-olive text-red-50 flex flex-row flex-wrap items-center ...">
            <img src={logo} alt="Kathryn's logo" class="h-20"></img>
            <p class="m-2">Projects</p>
            <p class="m-2">Contact</p>
        </nav>
    </>
    )
}

export default Nav