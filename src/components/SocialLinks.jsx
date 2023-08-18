import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs'
import { BsFillPersonLinesFill } from "react-icons/bs"
const SocialLinks = () => { 
    const links = [
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin  size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/gaurav-p-814063218/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub  size={30}/>
                </>
            ),
            href: 'https://github.com/Gauravvpnd',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                Twitter <BsTwitter  size={30}/>
                </>
            ),
            href: 'https://twitter.com/gauravvpnd',
            style: 'rounded-tr-md'
            
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill  size={30}/>
                </>
            ),
            href: 'https://drive.google.com/file/d/1oZXUGxSbvTwCj70G29oEeF1zsnQRbACt/view?usp=sharing',
            style: 'rounded-tr-md'
        },
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default SocialLinks