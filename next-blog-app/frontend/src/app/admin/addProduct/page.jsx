'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import { assets } from '../../../../Assets/assets'

function page() {

    const [image, setImage] = useState(false);
  return (
    <>
    <form className='px-5 pt-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        
        <label htmlFor="image">
           <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt='' />
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        <p className='mt-4 text-xl'>Blog title</p>
        <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type='text' placeholder='Type here' required />

        <p className='mt-4 text-xl'>Blog Description</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type='text' placeholder='Write Content here' rows={6} required />
        
        <p className='mt-4 text-xl'>Blog category</p>
         <select name='category' className='w-40 px-4 py-3 mt-4 border text-gary-500'>
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option> 
         </select>
    <br />
       <button type='submit' className='w-40 h-12 mt-8 text-white bg-black'>ADD</button>  
        
    </form>
    </>
  )
}

export default page