import { Body } from '@/components/Body'
import { Categories } from '@/components/Categories'
import { FeatureCard } from '@/components/FeatureCard'
import { Feed } from '@/components/Feed'
import { NavBar } from '@/components/NavBar'
import React from 'react'

const categoriespage = () => {
  return (
    <div className='h-screen w-screen bg-gray-500'>
      <NavBar/>
     
      <section className='absolute md:mt-[40%] mt-[30%] lg:mt-[10%] w-full'>
        {/* <Feed/> */}
        <Categories/>

      </section>

    </div>
  )
}

export default categoriespage