"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import { useGlobalCartContext } from "@/contexts/cartContext";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { openSidebar, openSearchModal, openCartModal, onCheckoutPage } =
    useNavGlobalContext();
  const { cart } = useGlobalCartContext();
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHidden(pathname === "/checkout");
  }, [pathname]);

  return (
    <nav
      className={`w-full sticky left-0 top-0 bg-[#ffffff] z-40 ${
        isHidden ? " hidden " : " "
      }`}
    >
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
        <div className=" flex items-center gap-2">
          <button onClick={openSearchModal}>
            <FiSearch />
          </button>

          <div className={` relative ${isHidden ? " hidden " : " "}`}>
            <button
              onClick={openCartModal}
              className={` ${
                cart.length > 0 &&
                "  before:w-[11px] before:h-[11px] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-[#141414] "
              }`}
            >
              {" "}
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
