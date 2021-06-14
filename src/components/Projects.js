import React from 'react'
import projects from '../data/projects-data'


const Projects = () => {
    console.log(projects[0].image)
    return(
        <div id="projects" className="flex flex-col items-center lg:items-stretch">
            <div id= "projects-card" className="m-10 w-3/4 lg:w-auto bg-red-50 bg-opacity-75 shadow-md rounded-md flex flex-col items-center">
                <h1 className="text-5xl  m-10">Here are some recent projects I have worked on...</h1>
                <div className="flex flex-row flex-wrap items-center lg:items-stretch">
                {projects.map((project, index) => (
                        <div key={index} className="bg-olive bg-opacity-75 shadow-lg m-8 w-3/4 lg:w-1/4 flex flex-col items-center">
                            <h3 className="text-xl m-4">{project.name}</h3>
                            <a href={project.url} target="_blank">
                                <div className="m-8 w-3/4 items-center flex flex-col"><img src={project.image} alt={project.title}></img></div>
                            </a>
                            <p className="m-4">{project.description}</p>
                        </div>

                        
                ))}
                </div>

                
            </div>
        </div>
    )
}

export default Projects