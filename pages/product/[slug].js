import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPrice } from "@/utils/helper";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  const p = product?.data?.[0]?.attributes;

  const notify =() =>{
    toast.success('🦄 Success. Check your Cart', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
    <div className="w-full md:py-20">
      <ToastContainer></ToastContainer>
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-24">
          {/* left side */}
          <div className="w-full md:w-auto flex-[1.5] max-w-md lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>

          {/* right side  */}
          <div className="flex-[1] py-3">
            {/* title  */}
            <div className="text-3xl font-semibold capitalize mb-2">
              {p.name}
            </div>
            {/* subtitle  */}
            <div className="text-lg font-semiboldmb-5">{p.subtitle}</div>
            {/* price  */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP:&nbsp;Rs.&nbsp;{p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base font-medium line-through">
                    Rs.&nbsp;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-red">
                    {getDiscountedPrice(p.original_price, p.price)}&#37;
                  </p>
                </>
              )}
            </div>
            <div className="text-lg font-semibold"></div>
            <div className="text-md font-medium text-gray">incl. of taxes</div>
            {/* sizes  */}
            <div id="sizegrid" className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Sizes</div>
                <div className="text-md font-medium text-gray cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border border-smokeWhite bg-smokeWhite rounded-md text-center py-3 font-medium  ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                      console.log(selectedSize);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* error  */}
              {showError && (
                <div className="text-red mt-1">Size selection required</div>
              )}
            </div>
            <button
              className="w-full py-4 rounded-full bg-red text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-80"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizegrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price
                    })
                  );
                  notify()
                }
              }}
            >
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full bg-white text-red  border text-lg font-medium transition-transform active:scale-95 mb-3 hover:bg-red hover:text-white hover:opacity-80">
              WishList
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">{p.description}</div>
            </div>
          </div>
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    
    </div>
  );
};

export default ProductDetails;

// export async function getStaticPaths() {
//   const products = await fetchDataFromApi("/api/products?populate=*");
//   console.log("products",products.data);
//   const paths = products?.data?.map((p) => ({
//     params: {
//       slug: p.attributes.slug,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }


export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/products");

  const paths = Array.isArray(category?.data)
    ? category.data
        .filter((c) => c?.attributes?.slug)
        .map((c) => ({
          params: {
            slug: c.attributes.slug,
          },
        }))
    : [];

  console.log("✔ getStaticPaths paths:", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );
  return {
    props: {
      product,
      products,
    },
  };
}
