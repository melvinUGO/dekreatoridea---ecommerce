import React from "react";
import Link from "next/link";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <footer className="border border-t-[#e4e4e4] mt-10">
      <div className="px-3 py-10 md:grid grid-cols-2  max-w-[1400px] mx-auto">
        <div className=" footer-links-container flex flex-col gap-4 text-[#111c] text-[.8rem] pb-5 md:pb-0">
          <Link href="/contact">Contact Us</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/FAQ">FAQ</Link>
          <Link href="returnPolicy">Return Policy</Link>
          <Link href="privacyPolicy">Privacy Policy</Link>
        </div>
        <div className="">
          <p>SOCIALS</p>
          <SocialIcons />
        </div>
      </div>
      <div className=" p-5 flex flex-col sm:block gap-3 text-[#111c] text-center lg:text-right sm:text-left bg-[#f2f2f2]">
        <small className="pr-5">
          Developed by{" "}
          <a
            href="https://melvin-ugo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvin Ugo
          </a>
        </small>
        <small> &copy; 2023, De Kreator Idea </small>
      </div>
    </footer>
  );
};

export default Footer;
