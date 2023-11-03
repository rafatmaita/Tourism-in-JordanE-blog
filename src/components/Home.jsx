// import React from 'react'
import React, { useState } from 'react';
import axios from 'axios';



function Home() {
  const [formData, setFormData] = useState({
   
    
    title: '',
    image: '',
    description: '',
    author_id: '1',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server using Axios
    axios.post('http://127.0.0.1:5000/addBlog', formData)
      .then((response) => {
        console.log(response.data);
        // You can reset the form fields or show a success message here
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors here
      });
  };

  return (
    <div><section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Tourism in Jordan
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Explore the most beautiful tourist places in Jordan
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Speak to Sales
        </a>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        
        <img
        src='https://www.ayasshotel.com/medias/article/big/173/petra-by-night.jpg'
          alt="mockup"
        />
      </div>
    </div>
  </section>


  {/* acrd */}

  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src="https://cdn.al-ain.com/lg/images/2022/6/06/102-002333-best-tourist-places-jordan-5.jpeg" alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in
        reverse chronological order.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>

 
  
   {/* Form */}
  <section>
  <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your name
      </label>
      <input
        type="uthorname"
        id="uthorname"
        name="uthorname"
        value={formData.name}
        onChange={handleInputChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        
        required=""
      />
    </div>
  
    <div className="mb-6">
      <label
        htmlFor="image"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        image
      </label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleInputChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name@flowbite.com"
       
      />
    </div>
  
  
    <div className="mb-6">
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        title
      </label>
      <input
        type="title"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
       
      />
    </div>
    <div className="mb-6">
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        description
      </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      
      />
    </div>
  
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      ADD Blogs
    </button>
  </form>
  </section>
  </div>
  )
}

export default Home


