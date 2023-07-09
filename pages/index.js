import { Body } from '@/components/Body'
import { Categories } from '@/components/Categories'
import { FeatureCard } from '@/components/FeatureCard'
import { Feed } from '@/components/Feed'
import { HomePosts } from '@/components/HomePosts'
import { NavBar } from '@/components/NavBar'
import React from 'react'

const index = () => {
  return (
    <div className=' bg-gray-500'>
      <div className='mt-[6%]'>
      <NavBar/>
      </div>
      <Body/>
      <div className='mt-[25%]'>
      <FeatureCard />
      <HomePosts/>
        </div>
      {/* <section className='absolute md:mt-[40%] mt-[60%] lg:mt-[30%] w-full'>
        <Feed/>
        <Categories/>

      </section> */}

    </div>
  )
}

export default index