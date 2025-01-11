import React from 'react'
import proj1 from '../assets/photoClothes.png'
import proj2 from '../assets/todoList.png'
import proj3 from '../assets/TicToe.png'
import proj4 from '../assets/TextUtilss.png'
import proj5 from '../assets/Weather-app.png'
import proj6 from '../assets/quiz-app.png'
import proj7 from '../assets/calculator.png'

const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id='projects'>
      <div className='mx-auto px-4 md:px-8'>

<div className='mb-4 flex items-center justify-between '>

<div className="flex flex-col gap-4">
<h2 className='text-2xl lg:text-3xl text-white'>
My <span>Projects</span>

</h2>
<p className='text-gray-500'>
  These are my projects.
</p>


</div>




</div>


<div className='grid grid-col-2 gap-4 p-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>

<a
  href="/"
  className="group  h-48  overflow-hidden rounded-lg  shadow-lg  md:h-80"
>
  <img
    src={proj2}
    
    alt=""
    className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  {/* <div
    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
  ></div> */}
</a>


<a
  href="/"
  className="group  h-48  overflow-hidden rounded-lg  shadow-lg md:col-span-2 md:h-80"
>
  <img
    src={proj1}
   
    alt=""
    className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  
</a>




<a
  href="/"
  className="group  h-48  overflow-hidden rounded-lg  shadow-lg  md:h-80"
>
  <img
    src={proj3}
    
    alt=""
    className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  
</a>





<a
  href="/"
  className="group  h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
>
  <img
    src={proj4}
    
    alt=""
    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  
</a>




<a
  href="/"
  className="group  h-48 overflow-hidden rounded-lg  shadow-lg md:h-80"
>
  <img
    src={proj5}
    
    alt=""
    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
 
</a>



<a
  href="/"
  className="group  h-48 overflow-hidden rounded-lg  shadow-lg  md:h-80"
>
  <img
    src={proj6}
    
    alt=""
    className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  
</a>


<a
  href="/"
  className="group h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80"
>
  <img
    src={proj7}
   
    alt=""
    className=" h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
  />
  
</a>






</div>

      </div>
      
    </div>
  )
}

export default Work
