"use client";
import { useGlobalCartContext } from "@/contexts/cartContext";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";

const SuccessPage = () => {
  const { clearCart } = useGlobalCartContext();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex justify-center py-20">
      <div>
        <h1>Thanks for your order!</h1>
        <p>we will email you when your order will be sent.</p>
        <Link
          href="/products"
          className="flex items-center gap-3 pt-10 text-[#197bbd]"
        >
          <FaAngleLeft />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
