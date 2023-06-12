import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({products}) {

  return (
   <main className="">
    <HeroBanner/>
    <Wrapper>
      <div className="text-center max-w-3xl mx-auto my-12 md:my-20">
        <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">Cushioning for Your Miles</div>
        <div className="text-md md:text-xl">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
       {
        products?.data?.map((product)=>(
          <ProductCard key={product.id} data={product}/>
        ))

       }
      </div>

    </Wrapper>
   </main>
  )
}


export async function getStaticProps(){
  const products = await fetchDataFromApi("/api/products?populate=*");
  return  {
    props:{products}
  }
}