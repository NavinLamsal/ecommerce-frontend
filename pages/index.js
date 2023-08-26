import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";


export default function Home({products}) {

  return (
   <main className="">
    <HeroBanner/>
    <Wrapper>
      <div className="text-center max-w-3xl mx-auto my-12 md:my-20">
        <div className="text-3xl md:text-4xl mb-5 font-semibold leading-tight">Formula 1 Genuine Clothings</div>
        <div className="text-md md:text-xl">A authentic Formula 1 team Kit, Shop your Favourite Constructors Kit .</div>
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