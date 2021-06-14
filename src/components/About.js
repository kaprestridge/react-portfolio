import React from 'react'
//img
import headshot from '../img/photo_of_kat.jpeg'
//icons
import { DiReact, DiRuby, DiRor, DiSass, DiVisualstudio, DiJsBadge, DiGithubBadge  } from "react-icons/di";
import { SiTailwindcss, SiCss3, SiHtml5, SiHeroku } from "react-icons/si";

const About = () => {
    return(
        <>
        <div className="h-20 w-screen "></div>

        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
        <div className="w-3/4 lg:w-2/4 m-10 bg-red-50 bg-opacity-75 shadow-md rounded-md flex flex-col items-center">
            <h1 className="text-5xl  m-8">Hi, I'm Kathryn</h1>
            <img src={headshot} alt="A head-shot of Kathryn looking towards the camera and smiling"class="rounded-full m-8 h-64" />
            <p className="m-6">I am an animal lover, board game enthusiast, book worm and problem solver. I am enthusiastic about technology and how we can use it to make the world a better place. I am also passionate about creating spaces for women and minorities in STEM and prioritise surrounding myself with wonderful people.</p>
        </div>
        <div className="w-3/4 lg:w-2/4 m-10 bg-red-50 bg-opacity-75 shadow-md">
            <h1 className="text-5xl m-8">What I do...</h1>
            <p className="m-6 text-xl">
                I solve problems through building beautiful websites that don't compromise on functionality or accessability.
            </p>
            <div className="bg-olive bg-opacity-75 shadow-lg m-8 text-5xl flex flex-row">
                <div className="flex flex-row m-5 flex-wrap"> <SiHtml5 />  <SiCss3 /> <DiSass /> <DiRuby /> <DiRor /> <DiJsBadge /> <DiReact /> <DiVisualstudio /> <DiGithubBadge /> <SiTailwindcss /> <SiHeroku /></div>
            </div>
            <p className="m-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non assumenda obcaecati sit vel quia, nulla laborum, a, saepe ipsum enim earum vero dolor quisquam dolores numquam provident excepturi et nesciunt.</p>
            
        </div>
</div>
        </>
    )
}

export default About
