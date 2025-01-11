import React from 'react'
import {FaGithubSquare , FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center' id='footer'>
      <p className="my-5 text-gray-500"> <br/> copyright &copy; Apsana. Made with 🖤 by Apsana. </p>

<div className='inline-flex text-gray-500 gap-4 text-3xl'>
<FaGithubSquare/>
<FaInstagram/>
<FaWhatsapp/>
<FaLinkedin/>




</div>


    </div>
  )
}

export default Footer
