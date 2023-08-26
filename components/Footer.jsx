import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-2">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center py-10">
        <div>
          <Image  
            src="/Shop.png"
            alt="logo"
            width={100}
            height={100}
            className="w-16 md:w-40"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-base">Offers</div>
          <div className="text-base">Terms And Condition</div>
          <div className="text-base">Return Policy</div>
          <div className="text-base">Privacy Policy</div>
          <div className="text-base">FAQ</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold text-center">
            Payment Gateway
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-base flex items-center">
              <img src="/mastercard.png" className="h-8 w-auto" />
            </div>
            <div className="text-base">
              <img src="/khalti.png" className="h-8 w-auto" />
            </div>
            <div className="text-base">
              <img src="/sewa.png" className="h-8 w-auto" />
            </div>
            <div className="text-base">
              <img src="/visa.png" className="h-8 w-auto" />
            </div>
          </div>
          <div className="text-xl font-semibold text-center pt-5">Connect with us</div>
          <div className="flex justify-center">
            <div className="text-base mx-1">
              <Icon icon="ic:twotone-facebook" className="w-8 h-8" />
            </div>
            <div className="text-base mx-1">
              <Icon icon="uil:instagram-alt" className="w-8 h-8" />
            </div>
            <div className="text-base mx-1">
              <Icon icon="ion:logo-amazon" className="w-8 h-8" />
            </div>
            <div className="text-base mx-1">
              <Icon icon="mdi:google-plus" className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
        </div>
        <div></div>
      </div>
      <div className="border-t border-gray text-center tracking-wider py-4">Copyright @2023 | Navin Lamsal</div>
    </footer>
  );
};

export default Footer;
