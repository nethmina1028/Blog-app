'use client'
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '../../../../Assets/assets';
import Image from 'next/image';
import Footer from '@/app/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const page = ({params}) =>{
    const [data,setData] = useState(null);
    
    const fetchBlogData =() =>{
        for(let i=0;i<blog_data.length;i++){

            if(Number(params.id)===blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }
 

    useEffect (()=>{
        fetchBlogData();
    
    },[params.id])
  return (data?<>
    <div>
       <div className='px-5 py-5 bg-gray-200 md:px-12 lg:px-28'>
        <div className='flex items-center justify-between'>
            <Link href='/'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
            <button className='flex items-center gap-2 px-3 py-1 font-medium border border-black shadow-[-7px_7px_0px_#000000] sm:px-6'>
                Get started <Image src={assets.arrow} alt='' />
            </button>
        </div>

        <div className='my-24 text-center'>
          <h1 className='text-2xl font-semibold sm:text-5xl max-w-[700px] mx-auto'>{data.title}</h1>
          <Image  className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt='' />
          <p className='pb-2 mt-1 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
       </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-white' src={data.image} alt='' width={1280} height={720} />
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet?</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, eos eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed nesciunt rerum repudiandae, quod autem consequatur itaque aut quos architecto harum sint facilis maiores aperiam nostrum nam a? Ad, ab?</p>

        <div className='my-24'>
            <p className='my-4 font-semibold text-black'>Share this Artical on social media</p>
         <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={50} />
            <Image src={assets.twitter_icon} alt='' width={50} />
            <Image src={assets.googleplus_icon} alt='' width={50} />

         </div>

        </div>
        
    </div>

    <Footer />
    </>:<></>
  )
}

export default page