"use client";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { MENU_HEADER } from "../../constanst";

const Header = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const handleToggle = () => setIsOpenMobile((pre) => !pre);

  return (
    <header className="shadow-bottom font-[family-name:var(--font-geist-mono)] sticky top-0 z-[1000] bg-white">
      <nav className=" border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-4 ">
          <div className=" relative w-[52px] h-[52px]">
            <Image src="/Logo.png" fill={true} alt={"Logo"} />
          </div>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <RxHamburgerMenu />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex gap-8">
              {MENU_HEADER.map((nav, index) => {
                return (
                  <li key={index}>
                    <Menu>
                      <MenuButton className="z-[1000] font-semibold px-2.5 py-0.5 flex items-center rounded-md  hover:text-text-primary">
                        {nav.label} <RiArrowDropDownLine fontSize={18} />
                      </MenuButton>
                      <MenuItems
                        anchor="bottom"
                        className="bg-white px-4 py-3 rounded-md shadow-full flex flex-col gap-1 z-[1000]"
                      >
                        {nav.submenu?.map((item, indexChild) => {
                          return (
                            <MenuItem key={indexChild}>
                              <Link
                                href={item.href}
                                className="w-full font-medium hover:bg-secondary rounded-md px-4 py-1.5 font-[family-name:var(--font-geist-mono)]"
                              >
                                {item.label}
                              </Link>
                            </MenuItem>
                          );
                        })}
                      </MenuItems>
                    </Menu>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {isOpenMobile && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-50">
          <div className="flex justify-end pt-4 pr-4">
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <FaTimes />
            </button>
          </div>
          <div>
            {MENU_HEADER.map((menu, index) => {
              return (
                <Disclosure
                  as="div"
                  className="p-6"
                  defaultOpen={false}
                  key={index}
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm/6 font-medium  group-data-[hover]:text-white/80">
                      {menu.label}
                    </span>
                    <RiArrowDropDownLine className=" group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-6 text-sm/5 text-text-primary">
                    <ul className="flex flex-col gap-4">
                      {menu.submenu?.map((child, childIndex) => {
                        return (
                          <li key={childIndex}>
                            <Link
                              href={child.href}
                              className="w-full font-medium  rounded-md py-2"
                              onClick={handleToggle}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
