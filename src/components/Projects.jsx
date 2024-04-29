import React, { useState, useEffect } from 'react';
import projectsData from '../my_projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-[5rem] font-semibold text-stone">Projects</h1>
      </div>

      <div className="grid grid-cols-3 gap-8 m-4 p-2 ">
        {projects.map(project => (
          <div key={project.id} className="project flex flex-col m-[2rem] p-[2rem] w-[25rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-imageBg rounded-2xl">
            <img src={project.image} alt={project.name} className="h-[15rem] w-[24rem] mb-2 rounded-[1rem]" onClick={() => handleImageClick(project.link)}/>
            <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
            <p className=" text-justify text-stone">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;