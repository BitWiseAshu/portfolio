import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {
  return (
    <>
        <header>
            <div className='container flex justify-between items items-center p-[2rem]'>
                <div className='left'>
                    <p className='text-[1.5rem] font-bold ml-[5.1rem]'>Portfolio.</p>
                </div>

                <div className='right'>
                    <nav>
                        <ul className='flex flex-row justify-aroung gap-[6rem] font-semibold mr-[20px] '>
                            <li className='hover:text-navbarColor hover:underline'><NavLink to="/"  spy={true} smooth={true} offset={50} duration={500}>Home</NavLink></li>
                            <li className='hover:text-navbarColor hover:underline'><NavLink to="/about" spy={true} smooth={true} offset={50} duration={500}>About</NavLink></li>
                            <li className='hover:text-navbarColor hover:underline'><NavLink to="/projects"  spy={true} smooth={true} offset={50} duration={500}>Projects</NavLink></li>
                            <li className='hover:text-navbarColor hover:underline'><NavLink to="/contact"  spy={true} smooth={true} offset={50} duration={500}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar




// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <>
//         <header>
//             <div className='container flex justify-between items items-center p-[2rem]'>
//                 <div className='left'>
//                     <p className='text-[1.5rem] font-bold ml-[5.1rem]'>Portfolio.</p>
//                 </div>

//                 <div className='right'>
//                     <nav>
//                         <ul className='flex flex-row justify-aroung gap-[6rem] font-semibold mr-[20px] '>
//                             <li className='hover:text-navbarColor'><Link to="/"  spy={true} smooth={true} offset={500} duration={500}>Home</Link></li>
//                             <li className='hover:text-navbarColor'><Link to="/about" spy={true} smooth={true} offset={500} duration={500}>About</Link></li>
//                             <li className='hover:text-navbarColor'><Link to="/projects"  spy={true} smooth={true} offset={500} duration={500}>Projects</Link></li>
//                             <li className='hover:text-navbarColor'><Link to="/contact"  spy={true} smooth={true} offset={500} duration={500}>Contact</Link></li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     </>
//   )
// }

// export default Navbar






// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <header className="bg-gray-900">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
//         <div className="flex items-center">
//           <p className="text-xl lg:text-2xl font-bold text-white">Portfolio.</p>
//         </div>

//         <nav className="md:ml-auto">
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-white">
//             <li><NavLink exact to="/" activeClassName="underline">Home</NavLink></li>
//             <li><NavLink to="/about" activeClassName="underline">About</NavLink></li>
//             <li><NavLink to="/projects" activeClassName="underline">Projects</NavLink></li>
//             <li><NavLink to="/contact" activeClassName="underline">Contact</NavLink></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar




