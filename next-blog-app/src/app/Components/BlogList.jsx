import React from 'react'
import { blog_data } from '../../../Assets/assets'
import BlogItem from './BlogItem'

function BlogList() {
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button className='px-4 py-1 text-white bg-black rounded-sm'>All</button>
            <button>Technology</button>
            <button>Startup</button>
            <button>Lifestyle</button>

        </div>

        <div className='flex flex-wrap justify-around gap-1 mb-16 gap-y-10 xl:mx-24'>
            {blog_data.map((item,index)=>{
               return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
            })}

        </div>
    </div>
  )
}

export default BlogList