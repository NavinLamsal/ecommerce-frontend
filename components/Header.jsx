import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header
      className={`w-full h-12 md:h-20 bg-smokeWhite flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-16 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-10 md:w-16"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black ">
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
              <div className="h-4 md:h-6 min-w-4 md:min-w-6 rounded-full  bg-red text-smokeWhite absolute top-1 left-5 md:left-7 text-white text-xs md:text-sm flex justify-center items-center px-1 md:px-2">
                5
              </div>
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
  );
};

export default Header;
