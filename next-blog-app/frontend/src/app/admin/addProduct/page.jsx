'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import { assets } from '../../../../Assets/assets'
import axios from 'axios'

function page() {
   
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [category, setCategory] = useState('Startup');
    const [image, setImage] = useState(false);

    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
    
    const handleSubmit = async (e) => {
      
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('image', image);
   
      try {
         const response = await axios.post('http://localhost:5555/blog/add', formData, {
           headers: {
             'Content-Type': 'multipart/form-data',
           },
         });
         console.log(response.data);
         if(response.data){
           alert('Blog created successfully');
         }else{
            alert('Blog creation failed');
         }
         
       } catch (error) {
         console.error('Error creating blog:', error);
       }
      };
      
  return (
    <>
    <form onSubmit={handleSubmit} className='px-5 pt-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        
        <label htmlFor="image">
           <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt='' />
        </label>
        <input onChange={handleImageChange} /*onChange={(e)=>setImage(e.target.files[0])} */type="file" id="image" hidden required />
        
        <p className='mt-4 text-xl'>Blog title</p>
        <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type='text' placeholder='Type here' value={title} onChange={(e) => setTitle(e.target.value)} required />

        <p className='mt-4 text-xl'>Blog Description</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' type='text' placeholder='Write Content here' rows={6} value={description} onChange={(e) => setDescription(e.target.value)} required />
        
        <p className='mt-4 text-xl'>Blog category</p>
         <select name='category' className='w-40 px-4 py-3 mt-4 border text-gary-500 ' value={category} onChange={(e) => setCategory(e.target.value)}>
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