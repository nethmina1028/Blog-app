import Image from 'next/image'
import React from 'react'
import { assets } from '../../../../Assets/assets'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 py-3 border border-black sm:pl-14'>
             <Image src={assets.logo} width={120} height={100} />  
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>
                
            <Link href='/admin/addProduct' className='flex items-center gap-3 px-3 py-2 font-medium bg-white border border-black shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.add_icon} alt='' width={28} /> <p>Add blogs</p>
             </Link>

             <Link href='/admin/blogList' className=' mt-5 flex items-center gap-3 px-3 py-2 font-medium bg-white border border-black shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.blog_icon} alt='' width={28} /> <p>Blog lists</p>
             </Link>

             <Link href='/admin/subcriptions' className=' mt-5 flex items-center gap-3 px-3 py-2 font-medium bg-white border border-black shadow-[-5px_5px_0px_#000000]'>
                <Image src={assets.email_icon} alt='' width={28} /> <p>Subscription</p>
             </Link>
             
            </div>
             
        </div>

    </div>
  )
}

export default Sidebar