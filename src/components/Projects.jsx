// import React, { useState, useEffect } from 'react';
// import projectsData from '../my_projects.json';
// import Typewriter from './Typewriter'


// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(projectsData);
//   }, []);

//   const handleImageClick = (link) => {
//     window.open(link, '_blank');
//   };
  

//   return (
//     <div className="container mx-auto px-4 py-8 max-[767px]:w-[25rem] max-[400px]:w-[22rem] max-[400px]:px-0 max-[330px]:w-[20rem]"> 
    
//   <h1 className="text-center max-[500px]:text-[2rem] font-semibold text-[#4f4db4] mb-8 font-serif text-[3rem] max-[769px]:ml-[7rem] max-[500px]:ml-[0rem] max-[400px]:text-[1.5rem] max-[400px]:mb-5 max-[400px]:ml-0">
//       <Typewriter text="Welcome to My Projects"  value={1}/>
//     </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] ml-[2rem] mr-[2rem] md:pl-[5rem] lg:pl-0 max-[769px]:w-[48rem] max-[500px]:w-[10rem]">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-[#b89494] transition duration-300 ease-in-out transform hover:-translate-y-2 max-[769px]:w-[20rem]  max-[769px]:pr-[2rem] max-[330px]:w-[18rem]"
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="h-[15rem] w-full object-cover cursor-pointer transform transition duration-300 hover:scale-105"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h2>
//               <p className="text-gray-600">{project.description}</p>
//               <div className="mt-4 xl:space-x-36 md:space-x-0">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline mr-4"
//                 >
//                   <button className='text-textColor cursor-pointer hover:text-hoverColor hover:underline'>View on GitHub</button>
//                 </a>
//                 {project.link && (
//                   <a
//                     href={project.demoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     <button className='text-textColor cursor-pointer hover:text-hoverColor hover:underline'>Click to view live</button>
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
import Typewriter from './Typewriter';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          
          <h1 className="text-center font-semibold text-[#4f4db4] mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <Typewriter text="Welcome to My Projects" value={1} />
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 font-light px-4">
            Explore my collection of innovative projects and creative works
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#4f4db4] transition-colors line-clamp-1">
                  {project.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border border-violet-100 hover:border-violet-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-between items-center pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#4f4db4] to-[#6562c8] text-white hover:from-[#6562c8] hover:to-[#4f4db4] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    View Source
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 rounded-lg bg-white text-[#4f4db4] border border-[#4f4db4] hover:bg-[#4f4db4] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .grid {
            margin: 0 auto;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;