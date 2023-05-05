import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Icon } from '@iconify/react';

const HeroBanner = () => {
  return (
    <div className="relative text-white text-xl w-full max-w-7xl mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler,hasPrev)=>(
            <div 
            onClick={clickHandler}
            className="absolute right-8 md:right-12 bottom-0 w-8 md:w-12 h-8 md:h-12 bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90" >
            <Icon icon="ooui:next-rtl" />
            </div>
        )}
        renderArrowNext={(clickHandler,hasNext)=>(
            <div 
            onClick={clickHandler}
            className="absolute right-0 md:right-0 bottom-0 w-8 md:w-12 h-8 md:h-12 bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90" >
            <Icon icon="ooui:next-ltr" />
            </div>
        )}
      >
        <div>
          <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto" />
          <div className="px-4 md:px-10 py-3 md:py-6 font-oswald bg-white absolute bottom-6 md:bottom-16 text-black text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="/slide-2.png" className="aspect-[16/10] md:aspect-auto" />
          <div className="px-4 md:px-10 py-3 md:py-6 font-oswald bg-white absolute bottom-6 md:bottom-16 text-black text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
        <div>
          <img src="/slide-3.png" className="aspect-[16/10] md:aspect-auto" />
          <div className="px-4 md:px-10 py-3 md:py-6 font-oswald bg-white absolute bottom-6 md:bottom-16 text-black text-sm md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
