import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import React from "react";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-3xl mx-auto mt-8 md:mt-0">
          <div className="text-2xl md:text-3xl mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
