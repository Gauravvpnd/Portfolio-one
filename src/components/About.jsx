import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-1'>
                <p className='text-2xl mt-20 font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>
            Hello there! I'm a passionate MERN developer with expertise in building responsive web applications. I pride myself on crafting seamless user experiences and pixel-perfect interfaces With React.js, I can build interactive components and leverage the power of state management for dynamic applications. 
            </p>
            <br />

            <p className='text-xl'>Python has also captured my interest, particularly for data extraction and modeling. I love exploring its vast array of libraries, such as BeautifulSoup, Scrapy, Pandas  to gather and manipulate data effectively. Leveraging Python's capabilities, I can analyze and visualize data, perform statistical modeling.</p>
        </div>
    </div>
  )
}

export default About