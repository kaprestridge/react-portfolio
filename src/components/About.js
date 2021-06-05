import React from 'react'
//img
import headshot from '../img/photo_of_kat.jpeg'

const About = () => {
    return(
        <>
        {/* <div class="h-20 w-screen "></div> //This is for the navbar spacing when it is aligned to screen */}

        <div class="flex flex-row items-stretch content-evenly m-20 ">
        <div class="w-2/4 mr-20 bg-red-50 bg-opacity-75 shadow-md rounded-md flex flex-col items-center">
            <h1 class="text-5xl  m-8">Hi, I'm Kathryn</h1>
            <img src={headshot} class="rounded-full m-8 h-64" />
            <p class="m-6">I am an animal lover, board game enthusiast, book worm and problem solver. I am enthusiastic about technology and how we can use it to make the world a better place. I am also passionate about creating spaces for women and minorities in STEM and prioritise surrounding myself with wonderful people.</p>
        </div>
        <div class="w-2/4 mr-20 bg-red-50 bg-opacity-75 shadow-md">
            <h1 class="text-5xl  m-8 mr-20">What I do...</h1>
            <p class="m-6 text-xl">
                I solve problems through building beautiful websites that don't compromise on functionality or accessability.
            </p>
            <div class="bg-olive bg-opacity-75 shadow-md m-8">
                <p>This is where the svgs will go! Nice.</p>
            </div>
            <p class="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda obcaecati sit vel quia, nulla laborum, a, saepe ipsum enim earum vero dolor quisquam dolores numquam provident excepturi et nesciunt.</p>
            
        </div>
</div>
        </>
    )
}

export default About
