import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
// import Logo from '../components/Logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const[nav , navBar] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]
   
  return (
    <div>
        <div className='flex justify-between items-center w-full h-20 px4text-white bg-black fixed'>
            <div>
          
            {/* <img src={Logo} alt="" srcset="" className='flex items-end cursor-pointer'  /> */}
            <h1 className='text-white text-4xl px-6 font-semibold italic'>
                <a href="https://gauravvpnd.netlify.app/">
                    Gauravvpnd
                </a>
            </h1>
            
            </div>
            <ul className='hidden md:flex'>
                {links.map(({id, link}) => 
                  <li key={id} className='px-4 cursor-pointer capitalize text-gray-400 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                
                )}
            </ul>
            <div onClick={() => navBar(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden' >
               { (nav ? <FaTimes size={30} /> : <FaBars size={30} />) }
                
            </div >

            { (nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-400'>
        {links.map(({id, link}) => 
                  <li key={id} className='capitalize cursor-pointer px-4 py-6 text-gray-400'>
                     <Link to={link} smooth duration={500} onClick={() => navBar(!nav)}>{link}</Link>
                </li>
                
                )}
            
        </ul>
            ) )}
            
        </div>
        


    </div>
  )
}

export default Navbar