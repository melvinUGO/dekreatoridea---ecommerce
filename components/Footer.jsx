import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border border-t-[#e4e4e4] mt-10">
      <div className="px-3 py-10 md:grid grid-cols-2 center">
        <div className=" footer-links-container flex flex-col gap-4 text-[#111c] text-[.8rem] pb-5 md:pb-0">
          <Link href="/contact">Contact Us</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="returnPolicy">Return Policy</Link>
          <Link href="privacyPolicy">Privacy Policy</Link>
        </div>
        <div className="">
          <p>SOCIALS</p>
          <div className=" flex items-center gap-2 py-5">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#111c] border border-[#111c] p-2 rounded-full w-fit"
            >
              <FaInstagram />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#111c] border border-[#111c] p-2 rounded-full w-fit"
            >
              <FaWhatsapp />
            </a>
          </div>
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
