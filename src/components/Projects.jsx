// import React, { useState, useEffect } from 'react';
// import projectsData from '../my_projects.json';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(projectsData);
//   }, []);

//   const handleImageClick = (link) => {
//     window.open(link, '_blank');
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-center text-[5rem] font-semibold text-stone">Projects</h1>
//       </div>

//       <div className="grid grid-cols-3 gap-8 m-4 p-2 ">
//         {projects.map(project => (
//           <div key={project.id} className="project flex flex-col m-[2rem] p-[2rem] w-[25rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-imageBg rounded-2xl">
//             <img src={project.image} alt={project.name} className="h-[15rem] w-[24rem] mb-2 rounded-[1rem]" onClick={() => handleImageClick(project.link)}/>
//             <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
//             <p className=" text-justify text-stone">{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Projects;







// import React, { useState, useEffect } from 'react';
// import projectsData from '../my_projects.json';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(projectsData);
//   }, []);

//   const handleImageClick = (link) => {
//     window.open(link, '_blank');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-center text-4xl font-semibold text-gray-800 mb-8">Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="h-48 w-full object-cover cursor-pointer"
//               onClick={() => handleImageClick(project.link)}
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h2>
//               <p className="text-gray-600">{project.description}</p>
//               <div className="mt-4">
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline mr-4"
//                 >
//                   View on GitHub
//                 </a>
//                 {project.demoLink && (
//                   <a
//                     href={project.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;








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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center max-[500px]:text-[2rem] font-semibold text-aboutColor2 mb-8 font-serif text-[3rem]">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] ml-[2rem] mr-[2rem] ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-[15rem] w-full object-cover cursor-pointer transform transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mr-4"
                >
                  <button className='text-textColor cursor-pointer hover:text-hoverColor hover:underline'>View on GitHub</button>
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;







