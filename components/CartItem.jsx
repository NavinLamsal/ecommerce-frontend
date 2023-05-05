import React from "react";
import { Icon } from "@iconify/react";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-b-gray">
      <div className="shrink-0 aspect-square w-12 md:w-28">
        <img src="/product-1.webp" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black">
            Jordan Retro 6 G
          </div>
          <div className="text-sm md:text-base font-medium text-gray block md:hidden">
            Mens&apos;s Golf Shoes
          </div>
          <div className="text-sm md:text-base font-bold text-gray mt-2">
            MRP : Rs 4200.00
          </div>
        </div>
        <div className="text-sm md:text-base font-medium text-gray hidden md:block">
          Mens&apos;s Golf Shoes
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-gray text-sm md:text-base">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">Uk 6</option>
                <option value="2">Uk 6.5</option>
                <option value="3">Uk 7</option>
                <option value="4">Uk 7.5</option>
                <option value="5">Uk 8</option>
                <option value="6">Uk 8.5</option>
                <option value="7">Uk 9</option>
                <option value="8">Uk 9.5</option>
                <option value="8">Uk 10</option>
                <option value="8">Uk 10.5</option>
                <option value="8">Uk 11</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <Icon
            icon="material-symbols:delete-outline"
            className="cursor-pointer text-gray hover:text-black text-base md:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
