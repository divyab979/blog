import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export const FeatureCard = () => {
  const [blogFeatures, setBlogFeatures] = useState([]);

  useEffect(() => {
    const fetchBlogFeatures = async () => {
      try {
        const response = await fetch('/api/getFeatured');
        const data = await response.json();
        if (response.ok) {
          setBlogFeatures(data.data);
        } else {
          console.error('Failed to fetch blog posts');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogFeatures();
  }, []);

  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    const fetchBlogCategories = async () => {
      try {
        const response = await fetch('/api/getCategory');
        const data = await response.json();
        if (response.ok) {
          setBlogCategories(data.data);
        } else {
          console.error('Failed to fetch blog categories');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogCategories();
  }, []);

  return (
    <div >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "calc(100% - 100%)" }}
        className='text-white text-center'
      >
        <h1 className='text-4xl mt-[-17%]'>
          Featured posts
        </h1>
      </motion.div>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2'>
        {blogFeatures.map((post) => (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "calc(100% - 100%)" }}
            className='bg-black  mt-[7%] text-white h-fit rounded-xl hover:mt-[-0.5%] duration-300 overflow-hidden'
          >
            <div>
              <img src={post.featuredImage} className='w-full h-50 object-cover relative' />
              <div className='p-6'>

                <div className='flex items-center text-md mb-2'>
                  {post.featureddescription}

                </div>
                <button className='bg-white font-thin text-black duration-300 hover:scale-110 px-4 py-2 rounded-md mt-4'>
                  Read more

                </button>

              </div>
            </div>

          </motion.div>

        ))}
      </div>
      
    </div>
  )
}
