import React from "react";
import aboutImg from "../assets/musApsana.jpg";
const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id='about'>
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt="About Me"
              className="object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span > Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Driven and passionate BSc CSIT student with a strong enthusiasm
                for learning and innovation. Seeking an internship opportunity
                to apply my technical skills, gain practical experience, and
                contribute to the evolving tech industry. Eager to collaborate
                with dynamic teams in developing responsive applications that
                enhance user experience.
              </p>
            </div>
          </div>
<div className="flex mt-10 items-center gap-7">

<div className=" bg-[#333333]/40 p-5  rounded-lg">
<h3 className="md:text-4xl text-2xl font-semibold text-white">7<span>+</span>


</h3>
<p><span className="md:text-base text-xs"> Mini Projects</span></p>
</div>


<div className=" bg-[#333333]/40 p-5  rounded-lg">
<h3 className="md:text-4xl text-2xl font-semibold text-white">1<span></span>
</h3>
<p><span className="md:text-base text-xs">Ecommerce website</span></p>
</div>


{/* <div className=" bg-[#333333]/40 p-5  rounded-lg">
<h3 className="md:text-4xl text-2xl font-semibold text-white">15<span>+</span>


</h3>
<p><span className="md:text-base text-xs">Total small Projects</span></p>

</div> */}

</div>


</div>
        </div>
      </div>
  );
};

export default About;
