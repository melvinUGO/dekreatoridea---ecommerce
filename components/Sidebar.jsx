"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import SocialIcons from "./SocialIcons";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavGlobalContext();
  return (
    <div
      className={` ${
        isSidebarOpen ? " translate-x-0 " : " -translate-x-[100%] "
      }  ease-in delay-300 transition-opacity fixed top-0 left-0 z-10 w-[100vw] h-full bg-[rgba(0,0,0,0.3)] flex`}
    >
      <nav className="bg-[#ffffff] text-[#212121] h-full w-[264px] sm:w-[324px] p-[20px]">
        <button onClick={closeSidebar}>
          <RxCross1 />
        </button>
        <div
          className=" sidebar-links-container flex flex-col gap-5 py-10"
          onClick={closeSidebar}
        >
          <Link href="/FAQ">SHOP</Link>
          <Link href="/">CAMPAIGNS</Link>
          <Link href="/">ARTICLES</Link>
          <Link href="/">LOOKBOOK</Link>
          <Link href="/">LOG IN</Link>
        </div>
        <div>
          <div className="p-2 border border-t-[#e4e4e4] flex my-10">
            <input
              type="text"
              className="border-0 grow"
              placeholder="Search our store..."
            />
            <FiSearch />
          </div>
        </div>
        <SocialIcons />
      </nav>
      <div className="grow" onClick={closeSidebar} />
    </div>
  );
};

export default Sidebar;
