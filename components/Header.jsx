import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MenuMobile from "./MenuMobile";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories,setCategories] =useState(null);

  const {cartItems}= useSelector((state => state.cart))

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  useEffect(()=>{

      fetchCategories()
    
  },[])
  const fetchCategories = async () =>{
    const {data} =await fetchDataFromApi('/api/categories?populate=*')
    setCategories(data);
    
  }

  return (
    <>
    <header
      className={`w-full h-12 md:h-20 bg-black flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-16 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Shop.png"
            alt="logo"
            width={100}
            height={100}
            className="w-16 md:w-32"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categories={categories} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="flex items-center gap-2 text-white ">
          {/* favourite icon  */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black cursor-pointer relative
            "
          >
            <Icon icon="mdi:heart-outline" className="text-lg md:text-2xl" />
            <div className="h-4 md:h-6 min-w-4 md:min-w-6 rounded-full bg-red text-smokeWhite absolute top-1 left-5 md:left-7 text-white text-xs md:text-sm flex justify-center items-center px-1 md:px-2">
              51
            </div>
          </div>
          {/* cart icon  */}
          <Link href="/cart">
            <div
              className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black cursor-pointer relative
            "
            >
              <Icon
                icon="ph:shopping-cart-light"
                className="text-lg md:text-2xl"
              />
              {cartItems.length > 0 &&(
              <div className="h-4 md:h-6 min-w-4 md:min-w-6 rounded-full  bg-red text-smokeWhite absolute top-1 left-5 md:left-7 text-white text-xs md:text-sm flex justify-center items-center px-1 md:px-2">
                {cartItems.length}
              </div>
              )}
            </div>
          </Link>
          {/* hamburger menu  */}
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black cursor-pointer relative
            "
          >
            {mobileMenu ? (
              <Icon
                icon="mdi:close"
                className="text-base"
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <Icon
                icon="bx:menu-alt-right"
                className="text-xl"
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
   <div className="bg-red h-20 text-white flex items-center justify-center">
    <input type="text" placeholder="Search"  className="w-2/4 h-10 p-4 my-2 text-gray rounded-full"/>
    <Icon icon="ic:sharp-search" className="text-4xl active:scale-90 hover:text-black" />
   </div>
    </>
  );
};

export default Header;
