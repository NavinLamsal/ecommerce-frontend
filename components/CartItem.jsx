import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "@/store/cartSlice";

const CartItem = ({ data }) => {
  const p = data.attributes;

  const dispatch = useDispatch();
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-b-gray">
      <div className="shrink-0 aspect-square w-12 md:w-28">
        <Image
          src={p.thumbnail.data[0].attributes.url}
          width={120}
          height={120}
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black">
            {p.name}
          </div>
          <div className="text-sm md:text-base font-medium text-gray block md:hidden">
            {p.subtitle}
          </div>
        </div>
        <div className="text-sm md:text-base font-medium text-gray hidden md:block">
          {p.subtitle}
        </div>
        <div className="text-sm md:text-base font-bold text-gray mt-2">
          MRP:&nbsp;Rs.&nbsp;{p.price}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-gray text-sm md:text-base">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={p.selectedSize === item.size ? true : false}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => (
                  <option key={i} value={q} selected={data.quantity === q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Icon
            icon="material-symbols:delete-outline"
            className="cursor-pointer text-gray hover:text-black text-base md:text-xl"
            onClick={() => {
              dispatch(removeFromCart({ id: data.id }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
