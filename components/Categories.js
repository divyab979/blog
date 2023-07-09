import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export const Categories = () => {
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
        <div className='grid grid-cols-1 gap-16 mx-4 lg:grid-cols-2 md:grid-cols-2'>
            {blogCategories.map((post) => (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "calc(100% - 100%)" }}
                    className='bg-black text-white h-fit w-fit rounded-lg overflow-hidden'
                >
                    <img src={post.categoryImage} className='w-fit h-fit object-cover' />
                    <div className='p-6'>
                        <h1 className='text-3xl text-center font-serif hover:underline cursor-pointer font-bold mb-4'>
                            {post.name}
                        </h1>
                        

                    </div>

                </motion.div>
            ))}

        </div>
    )
}
