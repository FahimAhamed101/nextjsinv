'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';

const Productform = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    images: '', // This will store the image URLs as a comma-separated string
  });

  const [info, updateInfo] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: imageUrls.join(','),
    }));
  }, [imageUrls]);

  const postData = async () => {
    try {
      const response = await axios.post('/api/addproduct', formData);
      router.push('/');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='px-5 max-w-[1280px] mx-auto mb-10'>
      <h1 className='text-3xl font-semibold py-6'>Add your Projects in Fahim</h1>
      <div className='text-black mt-4'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div>
            <label htmlFor="title" className='font-medium'>Title</label>
            <input
              type="text"
              className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
              name='title'
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category" className='font-medium'>Category</label>
            <input
              type="text"
              className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
              name='category'
              value={formData.category}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className='mt-10 inline-block font-medium'>Description about your product</label>
          <input
            type="text"
            className='w-full h-[50px] border-[1px] rounded-lg focus:border-pink-500 px-3 focus:border-2 outline-none'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="" className='mt-10 inline-block font-medium'>Upload Images</label>
        <ImageUpload info={info} updateInfo={updateInfo} imageUrls={imageUrls} setImageUrls={setImageUrls} />
        <button onClick={postData} className='text-white mt-10 border-[1px] bg-purple-500 rounded-lg px-5 p-2'>Submit</button>
      </div>
    </div>
  );
};

export default Productform;