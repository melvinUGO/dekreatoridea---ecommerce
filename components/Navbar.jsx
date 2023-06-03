"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";

const Navbar = () => {
  const { openSidebar, openSearchModal } = useNavGlobalContext();
  return (
    <nav className=" w-full sticky left-0 top-0 bg-[#ffffff] z-40">
      <div className=" max-w-[1400px] mx-auto flex items-center justify-between p-4 pt-8 sm:p-10 lg:px-3">
        <button onClick={openSidebar}>
          <FaBars />
        </button>
        <Link href={"/"}>
          {" "}
          <Image
            src={logo}
            alt="logo"
            priority
            className=" w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </Link>
        <div className=" flex items-center gap-3">
          <button onClick={openSearchModal}>
            <FiSearch />
          </button>

          <HiOutlineShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
