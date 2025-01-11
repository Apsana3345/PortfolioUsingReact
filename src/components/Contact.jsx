import React from 'react'
import { AiOutlineMail } from "react-icons/ai"; 

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full  sm:h-[70vh] items-center' id='contact'>


        <div className='max-w-[1200px] mx-auto'>
<div>
    <div className='grid grid-cols-1 md:grid-cols-2'>


    <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
  <h1 className="text-4xl sm:text-5xl text-white">
    Contact <span>Me</span>
  </h1>
  <p className="text-normal text-lg font-medium text-gray-400 mt-2">
    Let's connect on LinkedIn <br /> or send me an Email
  </p>
  <div className="flex items-center mt-2 text-gray-400">
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 817.89 5.26a2"
    >
      <path d="..." />
    </svg>
    <div className="ml-4  flex gap-4 text-md tracking-wide  w-60">
    <AiOutlineMail size={25} className="text-gray-500" />
      <p>  Apsana Sharma</p>
    </div>
  </div>
</div>



<form action="https://getform.io/f/bzyyxnma" method="post" class="p-6 flex flex-col justify-center max-w-[700px]">
  <div class="flex flex-col">
    <input 
      type="name" 
      name="name" 
      id="name" 
      placeholder="Full Name" 
      class="w-100 mt-2 py-3 px-3 rounded-lg border"
    />
  </div>

  <div class="flex flex-col mt-2">
    <input 
      type="email" 
      name="email" 
      id="email" 
      placeholder="Email" 
      class="w-100 mt-2 py-3 px-3 rounded-lg border"
    />
  </div>

  <div class="flex flex-col mt-2">
    <textarea 
      name="message" 
      id="message" 
      placeholder="Your Message" 
      class="w-100 mt-2 py-3 px-3 rounded-lg border"
    ></textarea>
  </div>

  <button 
    type="submit" 
    class=" bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
  >
    Submit
  </button>
</form>










    </div>
</div>

        </div>
      
    </div>
  )
}

export default Contact
