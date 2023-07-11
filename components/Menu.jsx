import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-white ">
      {data.map((items) => {
        return (
          <React.Fragment key={items.id}>
            {!!items?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative hover:text-gray"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => {
                  setShowCatMenu(false);
                }}
              >
                {items.name}
                <Icon icon="ic:baseline-keyboard-arrow-down" className="w-8" />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg ">
                    {categories?.map(({ attributes: c, id }) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.slug}`}
                          onClick={() => {
                            setShowCatMenu(false);
                          }}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-smokeWhite rounded-md">
                            {c.name}
                            <span className="opacity-50 text-sm">{`(${c.products.data.length})`}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer hover:text-gray">
                <Link href={items?.url}>{items.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
