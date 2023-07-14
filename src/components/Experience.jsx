import React from 'react'
import Aws from './Assets/Aws.png'
import CSS from './Assets/CSS.png'
import Firebase from './Assets/Firebase.png'
import JAVASCRIPT from './Assets/JAVASCRIPT.png'
import Python from './Assets/python.png'
import React111 from './Assets/React111.png'
import Tailwind from './Assets/Tailwind.png'
import HTML from './Assets/HTML.png'
import Material from './Assets/Material.png'

const Experience = () => {
    const exps = [
        {
            id: 1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: JAVASCRIPT,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: React111,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: Python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: Tailwind,
            title: 'TailwindCss',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: Aws,
            title: 'AWS',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: Firebase,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
    
        {
            id: 9,
            src: Material,
            title: 'Material UI',
            style: 'shadow-blue-500'
        },
    ]
    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Experience
              </p>
              <p className="py-6">Skills</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {exps.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Experience