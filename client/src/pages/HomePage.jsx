import React from 'react'
import bg1 from '../assets/HomeBg-1.jpg'

function HomePage() {
  return (
    <>
      <div className="container">
        <div
          className="bg-cover bg-center h-screen w-full"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="flex items-center justify-center h-full bg-black/50">
            <h1 className="text-white text-4xl font-bold">Welcome</h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage
