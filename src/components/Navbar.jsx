// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faAddressCard, faDiagramProject } from '@fortawesome/free-solid-svg-icons'
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

// const Navbar = () => {
//     return (
//         <>
//             <header className='sticky'>
//                 <div className='container flex justify-between items items-center p-[2rem]'>
//                     <div className='left '>
//                         <p className='text-[2rem] font-serif font-bold ml-[5rem] lg:text-[2rem] xl:text-[3rem] md:text-[2rem] md:ml-[1.5rem]'>Portfolio.</p>
//                     </div>

//                     <div className='right'>
//                         <nav>
//                             <ul className='flex flex-row justify-aroung gap-[4rem] font-semibold mr-[20px] md:ml-[5rem] md:pr-[2rem]'>
//                                 <div className='flex justify-Center gap-2'>
//                                     <FontAwesomeIcon icon={faHouse} style={{ color: "#FFD438", }} size="xl" />
//                                     <li className='hover:text-navbarColor hover:underline'><NavLink to="/" spy={true} smooth={true} offset={50} duration={500}>Home</NavLink></li>
//                                 </div>

//                                 <div className='flex justify-Center gap-2'>
//                                     <FontAwesomeIcon icon={faAddressCard} style={{ color: "#FFD43B", }} size='xl' />
//                                     <li className='hover:text-navbarColor hover:underline'><NavLink to="/about" spy={true} smooth={true} offset={50} duration={500}>About</NavLink></li>
//                                 </div>

//                                 <div className='flex justify-Center gap-2'>
//                                     <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#FFD43B", }} size='xl'/>
//                                     <li className='hover:text-navbarColor hover:underline'><NavLink to="/projects" spy={true} smooth={true} offset={50} duration={500}>Projects</NavLink></li>
//                                 </div>

//                                 <div className='flex justify-Center gap-2'>
//                                     <FontAwesomeIcon icon={faAddressBook} style={{ color: "#FFD43B", }} size="xl" />
//                                     <li className='hover:text-navbarColor hover:underline'><NavLink to="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</NavLink></li>
//                                 </div>
//                             </ul>
//                         </nav>
//                     </div>

//                 </div>
//             </header>
//         </>
//     )
// }

// export default Navbar





import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faDiagramProject, faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='sticky  max-[426px]:bg-imageBg '>
            <div className='container flex justify-between items-center p-[2rem]'>
                <div className='left'>
                    <p className='text-[2rem] font-serif font-bold ml-[5rem] lg:text-[3rem] xl:ml-[10rem]  md:text-[2rem] md:ml-[1.5rem]   max-[321px]:ml-[1rem]  max-[426px]:ml-[1rem]'>Portfolio.</p>
                </div>

                <div className='right'>
                    <nav className="md:flex hidden">
                        <ul className='flex flex-row justify-around gap-[4rem] font-semibold mr-[20px] lg:ml-[5rem] lg:pr-[2rem] md:ml-[2rem] md:pr-[0rem]'>
                            <div className='flex justify-center gap-2'>
                                <FontAwesomeIcon icon={faHouse} style={{ color: "#FFD438" }} size="xl" />
                                <li className='hover:text-navbarColor hover:underline font-serif text-[1.2rem] cursor-pointer'><NavLink to="/" >Home</NavLink></li>
                            </div>

                            <div className='flex justify-center gap-2'>
                                <FontAwesomeIcon icon={faAddressCard} style={{ color: "#FFD43B" }} size='xl' />
                                <li className='hover:text-navbarColor hover:underline font-serif text-[1.2rem] cursor-pointer'><NavLink to="/about">About</NavLink></li>
                            </div>

                            <div className='flex justify-center gap-2'>
                                <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#FFD43B" }} size='xl' />
                                <li className='hover:text-navbarColor hover:underline font-serif text-[1.2rem] cursor-pointer'><NavLink to="/projects" >Projects</NavLink></li>
                            </div>

                            <div className='flex justify-center gap-2'>
                                <FontAwesomeIcon icon={faAddressBook} style={{ color: "#FFD43B" }} size="xl" />
                                <li className='hover:text-navbarColor hover:underline font-serif text-[1.2rem] cursor-pointer'><NavLink to="/contact">Contact</NavLink></li>
                            </div>
                        </ul>
                    </nav>
                    {/* Toggle button for small screens */}
                    <div className="md:hidden ml-[2rem]">
                        <button onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={isOpen ? faXmark : faSliders} style={{ color: "#FFD43B", }} size="2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <nav>
                        <ul className="bg-white shadow-lg">
                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faHouse} style={{ color: "#FFD438" }} size="x" />
                                <li className='block py-2 px-4 text-gray-800 hover:text-navbarColor font-serif cursor-pointer'><NavLink to="/" onClick={toggleNavbar}>Home</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faAddressCard} style={{ color: "#FFD43B" }} size='x' />
                                <li className='block py-2 px-4 text-gray-800 hover:text-navbarColor font-serif cursor-pointer'><NavLink to="/about" onClick={toggleNavbar}>About</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#FFD43B" }} size='x' />
                                <li className='block py-2 px-2 text-gray-800 hover:text-navbarColor font-serif cursor-pointer'><NavLink to="/projects" onClick={toggleNavbar}>Projects</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faAddressBook} style={{ color: "#FFD43B" }} size="x" />
                                <li className='block py-2 px-3 text-gray-800 hover:text-navbarColor font-serif cursor-pointer'><NavLink to="/contact" onClick={toggleNavbar}>Contact</NavLink></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;



// import React from 'react'
// import { Link } from 'react-router-dom'
// // import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <>
//         <header>
//             <div className='container flex justify-around items-center p-[2rem]'>
//                 <div className='left ml-[5.1rem] 2xl:ml-[20rem] xl:ml-0'>
//                     <p className='text-[2rem] font-bold 2xl:text-[5rem] xl:text-[2rem] md:text-[2rem]'>Portfolio.</p>
//                 </div>

//                 <div className='right'>
//                     <nav>
//                         <ul className='flex flex-row justify-aroung gap-[6rem] font-semibold mr-[20px] 2xl:ml-[20rem] md:ml-[5rem]'>
//                             <li className='hover:text-navbarColor hover:underline 2xl:text-[3rem] 2xl:font-serif 2xl:mr-[5rem] xl:font-serif md:font-serif '><Link to="/">Home</Link></li>
//                             <li className='hover:text-navbarColor hover:underline 2xl:text-[3rem] 2xl:font-serif 2xl:mr-[5rem] xl:font-serif md:font-serif '><Link to="/about" >About</Link></li>
//                             <li className='hover:text-navbarColor hover:underline 2xl:text-[3rem] 2xl:font-serif 2xl:mr-[5rem] xl:font-serif md:font-serif '><Link to="/projects"  >Projects</Link></li>
//                             <li className='hover:text-navbarColor hover:underline 2xl:text-[3rem] 2xl:font-serif 2xl:mr-[5rem] xl:font-serif md:font-serif '><Link to="/contact" >Contact</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     </>
//   )
// }

// export default Navbar







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-6 md:py-8 flex justify-between items-center">
//         <div>
//           <p className="text-xl md:text-2xl font-bold text-gray-800">Portfolio</p>
//         </div>

//         <nav className="md:flex hidden">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="text-gray-600 hover:text-navbarColor">Home</Link></li>
//             <li><Link to="/about" className="text-gray-600 hover:text-navbarColor">About</Link></li>
//             <li><Link to="/projects" className="text-gray-600 hover:text-navbarColor">Projects</Link></li>
//             <li><Link to="/contact" className="text-gray-600 hover:text-navbarColor">Contact</Link></li>
//           </ul>
//         </nav>

//         <div className="md:hidden">
//           <button onClick={toggleNavbar}>
//             <svg
//               className="w-6 h-6 text-gray-800"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   isOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16m-7 6h7"
//                 }
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <ul className="bg-white shadow-lg mt-2 py-2">
//             <li><Link to="/" className="block py-2 px-4 text-gray-800 hover:text-navbarColor" onClick={toggleNavbar}>Home</Link></li>
//             <li><Link to="/about" className="block py-2 px-4 text-gray-800 hover:text-navbarColor" onClick={toggleNavbar}>About</Link></li>
//             <li><Link to="/projects" className="block py-2 px-4 text-gray-800 hover:text-navbarColor" onClick={toggleNavbar}>Projects</Link></li>
//             <li><Link to="/contact" className="block py-2 px-4 text-gray-800 hover:text-navbarColor" onClick={toggleNavbar}>Contact</Link></li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;


