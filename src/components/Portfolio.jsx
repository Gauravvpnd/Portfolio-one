import React from 'react'
import pro4 from './Assets/Portfolio.png'
import pro2 from './Assets/form-validator.png'
import pro3 from './Assets/Localcart.png'
import pro5 from './Assets/Passcard.png'


const Portfolio = () => {
  const portfolios = [
      {
          id: 1,
          src: pro4,
          namee: 'Portfolio website',
          href: "https://gauravvpnd.netlify.app/"
      },
      {
          id: 2,
          src: pro2,
          namee: 'Form Validator',
          href: "https://github.com/Gauravvpnd/Form-validator"
      },
      {
          id: 3,
          src: pro3,
          namee: 'Localcart',
          href: "https://github.com/Gauravvpnd/LocalCart-Ts"
      },
      {
          id: 4,
          src: pro5,
          namee: "ThePasscard",
          href: "https://thepasscard.netlify.app/"
      }
  ]

  return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, namee, href }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noopener noreferrer" >
                  <button className="w-1/2 px-6 py-3 m-4 ">
                      {namee}
                  </button>
                </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Portfolio