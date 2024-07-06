import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../../../Assets/assets'

function BlogItem() {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'> 
     <Image src={blog_data[0].image} alt='' width={400} height={400} className='border border-black' />
     <p className='inline-block px-1 mt-5 ml-5 text-sm text-white bg-black'>{blog_data[0].category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{blog_data[0].title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{blog_data[0].description}</p>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
            Read more <Image src={assets.arrow} alt='' className='ml-2' width={12}  />
        </div>
      </div>

    </div>
  )
}

export default BlogItem