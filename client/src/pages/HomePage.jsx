import React from 'react'
import bg1 from '../assets/HomeBg-1.jpg'

function HomePage() {
  return (
    <>
      <div className="container">
        <div
          className="bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div
            className="bg-gradient-to-b from-[#073D40] via-[#073D40] to-[#397C7A] bg-opacity-90 transition-all duration-300 rounded-md"
          >
            <div className="flex items-center justify-center bg-black/50">
              <h1 className="text-white text-4xl font-bold h-full">Welcomehbfhfghfh</h1>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default HomePage
