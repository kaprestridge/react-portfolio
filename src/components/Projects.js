import React from 'react'
import projects from '../data/projects-data'


const Projects = () => {
    return(
        <div id="Projects" className="flex flex-col items-center lg:items-stretch">
            <div id= "projects-card" className="m-10 w-3/4 lg:w-auto bg-red-50 bg-opacity-75 shadow-md rounded-md flex flex-col items-center">
                <h1 className="text-5xl  m-10">Here are some recent projects I have worked on...</h1>
                <div className="flex flex-row flex-wrap items-center lg:items-stretch">
                {projects.map((project, index) => (
                        <div key={index} className="bg-olive bg-opacity-75 shadow-lg m-8 w-3/4 lg:w-1/4">
                            <h3 className="text-xl">{project.name}</h3>
                            <p>{project.image}</p>
                            <p>{project.url}</p>
                            <p>{project.description}</p>
                        </div>
                        
                ))}
                </div>

                
            </div>
        </div>
    )
}

export default Projects