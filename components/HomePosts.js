import React from 'react'

export const HomePosts = () => {
  return (
    <div>
        <div>
        <h1 className='text-white lg:mt-[10%] lg:ml-[10%] text-7xl'>
          <p className='font-semibold'>See what we have, </p>
          <p className='font-cursive'>written lately.</p>
        </h1>
      </div>
      <div className='lg:mt-[7%] lg:ml-[2%] grid lg:grid-cols-3 '>
        <div>
        <img src='a1.png' className='rounded-3xl relative'/>
        <h1 className='absolute text-white text-2xl mt-[-10%]'>hello</h1>
        </div>
      </div>
    </div>
  )
}
