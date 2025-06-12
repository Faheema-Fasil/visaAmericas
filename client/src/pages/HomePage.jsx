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
            className="bg-gradient-to-b from-[#073D40] via-[#073D40] to-[#397C7A] bg-opacity-50 transition-all duration-300 rounded-md"
          >
            <div className="flex items-center justify-center bg-black/50">
              <h1 className="text-white text-4xl font-bold h-full">Welcomehbfhfghfh Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam doloremque dolorem odit quaerat nesciunt nisi facere tenetur quis asperiores, quasi odio soluta blanditiis magnam provident veniam natus ea tempore assumenda, repellendus incidunt saepe voluptatibus nobis! Eius tempore sapiente necessitatibus aliquam officiis totam praesentium quis minima accusantium, temporibus iure labore neque qui sit harum cupiditate repellat placeat eum quasi. Ut soluta temporibus illum vero provident saepe unde nulla debitis, at consequuntur voluptates nemo, dolor nisi maiores veniam, est nam maxime quis neque dicta accusamus delectus. Facilis quaerat tempore cumque officiis necessitatibus fugiat, animi sint dolorum suscipit rem consectetur dolore, aliquid reiciendis.</h1>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default HomePage
