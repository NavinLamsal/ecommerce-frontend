import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-24">
          {/* left side */}
          <div className="w-full md:w-auto flex-[1.5] max-w-md lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>

          {/* right side  */}
          <div className="flex-[1] py-3">
            {/* title  */}
            <div className="text-3xl font-semibold mb-2"> Jordan Retro 6 G</div>
            {/* subtitle  */}
            <div className="text-lg font-semiboldmb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* price  */}
            <div className="text-lg font-semibold">MRP: Rs 4200.00</div>
            <div className="text-md font-medium text-gray">incl. of taxes</div>
            {/* sizes  */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Sizes</div>
                <div className="text-md font-medium text-gray cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50">
                  Uk 6
                </div>
              </div>
              {/* error  */}
              <div className="text-red mt-1">Size selection required</div>
            </div>
            <button className="w-full py-4 rounded-full bg-red text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-80">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full bg-white text-red  border text-lg font-medium transition-transform active:scale-95 mb-3 hover:bg-red hover:text-white hover:opacity-80">
              WishList
            </button>
            <div>
                <div className="text-lg font-bold mb-5">
                    Product Details
                </div>
                <div className="text-md mb-5">
                Feel unbeatable from the tee box to the final putt in a design ithat&apos;s pure early MJ: speed,class and laden with true early &apos;90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses thr strut of 1st MJ&apos;s championship with some of our best golf technology, helping you make a statement of confidence when it comes,time to tame the course.
                </div>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
