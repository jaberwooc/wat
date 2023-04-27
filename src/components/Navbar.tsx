import React, { useState } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import DrawerNavigation from "./DrawerNavigation";

interface NavbarProps {
  onSearch: (value: string) => void;
  handleDrawer: () => void;
}

const Navbar = ({ onSearch, handleDrawer }: NavbarProps) => {
  return (
    <>
      <div className="w-full bg-white flex flex-row justify-between p-2 items-center shadow-md">
        <div>
          <Bars3Icon
            className="h-6 w-6 text-black cursor-pointer"
            aria-hidden="true"
            onClick={() => handleDrawer()}
          />
        </div>
        {/* searchbar */}

        <div className="w-[600px]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              placeholder="Buscar Ram, Procesadores..."
              required
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <BellIcon
            className="h-6 w-6 text-black  cursor-pointer"
            aria-hidden="true"
          />
          <p className="text-sm text-black">Alan Rodriguez</p>
          <Image
            src={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt="Alan Rodriguez"
            className="bg-black  rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
