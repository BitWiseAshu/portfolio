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
        <header className='sticky opacity-100'>
            <div className='container flex justify-between items-center p-[2rem]'>
                <div className='left'>
                    <p className='text-[2rem] font-serif font-bold ml-[5rem] lg:text-[3rem] xl:ml-[10rem]  md:text-[2rem] md:ml-[1.5rem] max-[321px]:ml-[1rem]  max-[426px]:ml-[1rem] text-shadow-2xl text-[#581c87] animate-flip-up animate-duration-3000 animate-delay-500'>Portfolio.</p>
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
                        <ul className="bg-white shadow-lg ">
                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faHouse} style={{ color: "#FFD438" }} size="x" />
                                <li className='block py-2 px-4  hover:text-navbarColor hover:underline font-serif cursor-pointer'><NavLink to="/" onClick={toggleNavbar}>Home</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faAddressCard} style={{ color: "#FFD43B" }} size='x' />
                                <li className='block py-2 px-4  hover:text-navbarColor hover:underline font-serif cursor-pointer'><NavLink to="/about" onClick={toggleNavbar}>About</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#FFD43B" }} size='x' />
                                <li className='block py-2 px-2  hover:text-navbarColor hover:underline font-serif cursor-pointer'><NavLink to="/projects" onClick={toggleNavbar}>Projects</NavLink></li>
                            </div>

                            <div className='flex items-center justify-center mr-[8rem]'>
                                <FontAwesomeIcon icon={faAddressBook} style={{ color: "#FFD43B" }} size="x" />
                                <li className='block py-2 px-3 hover:text-navbarColor hover:underline font-serif cursor-pointer'><NavLink to="/contact" onClick={toggleNavbar}>Contact</NavLink></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;





