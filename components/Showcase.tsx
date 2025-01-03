'use client'
import React, { useEffect } from 'react';
import Image from 'next/image'; 

const Showcase = () => {
  useEffect(() => {
 
    const slides = document.querySelectorAll("#slideshow > div");
    let currentIndex = 0;

    function showNextSlide() {
      slides[currentIndex].classList.remove("opacity-100");
      slides[currentIndex].classList.add("opacity-0");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.remove("opacity-0");
      slides[currentIndex].classList.add("opacity-100");
    }

    setInterval(showNextSlide, 3000); 
  }, []);

  return (
    <div className="relative w-full h-72 overflow-hidden">
      <div id="slideshow" className="absolute w-full h-full">
        {/* Slide 1 */}
        <div className="absolute w-full h-full transition-opacity duration-1000 opacity-100">
          <Image
            src="/Flourista (2).png"
            alt="Floral Arrangement"
            width={800} 
            height={450} 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Slide 2 */}
        <div className="absolute w-full h-full transition-opacity duration-1000 opacity-0">
          <Image
            src="/Flourista (3).png"
            alt="Gardening Tips"
            width={800} 
            height={450}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Slide 3 */}
        <div className="absolute w-full h-full transition-opacity duration-1000 opacity-0">
          <Image
            src="/Flourista (4).png"
            alt="Flower Guide"
            width={800} 
            height={450} 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
