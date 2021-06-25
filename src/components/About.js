import React from 'react'
//img
import headshot from '../img/photo_of_kat.jpeg'
//icons
import { DiReact, DiRuby, DiRor, DiSass, DiVisualstudio, DiJsBadge, DiGithubBadge  } from "react-icons/di";
import { SiTailwindcss, SiCss3, SiHtml5, SiHeroku } from "react-icons/si";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const About = () => {

    
    return(
        <>
        <div id= "about" className="h-20 w-screen "></div>

        <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
        <div className="w-3/4 lg:w-2/4 m-10 bg-red-50 bg-opacity-75 shadow-md rounded-md flex flex-col items-center">
            <h1 className="text-5xl  m-8">Hi, I'm Kathryn</h1>
            <img src={headshot} alt="A head-shot of Kathryn looking towards the camera and smiling"className="rounded-full m-8 h-64" />
            <p className="m-6 text-6xl flex space-x-2">
                <a target="_blank" href={"https://www.linkedin.com/in/kaprestridge/"} rel="noopener noreferrer"><AiFillLinkedin /></a>
                <a target="_blank" href={"https://twitter.com/katprestridge"} rel="noopener noreferrer"><AiFillTwitterCircle /> </a>
                <a target="_blank" href={"https://github.com/kaprestridge"} rel="noopener noreferrer"><AiFillGithub /> </a>
            </p>
        </div>
        <div className="w-3/4 lg:w-2/4 m-10 bg-red-50 bg-opacity-75 shadow-md">
            <h1 className="text-5xl m-8">What I do...</h1>
            <p className="m-6 text-xl">
                I solve problems through building beautiful websites that don't compromise on functionality or accessability.
            </p>
            <div className="bg-olive bg-opacity-75 shadow-lg m-8 text-5xl flex flex-row">
                <div className="flex flex-row m-4 flex-wrap"> <SiHtml5 />  <SiCss3 /> <DiSass /> <DiRuby /> <DiRor /> <DiJsBadge /> <DiReact /> <DiVisualstudio /> <DiGithubBadge /> <SiTailwindcss /> <SiHeroku /></div>
            </div>
            <p className="m-6">I am an animal lover, board game enthusiast, book worm and problem solver. 
            I am enthusiastic about technology and how we can use it to make the world a better place,
            with some fun along the way. 
            I am also passionate about creating spaces for women and minorities in STEM and prioritise 
            building strong and supportive communities wherever I am.</p>
            <p className="m-6"> I am currently looking for my next full-time role as
            a developer where I will have opportunities to grow and learn.  </p>
            <div className="h-10"></div>
            
        </div>
</div>
        </>
    )
}

export default About
