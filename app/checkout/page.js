"use client";
import CheckoutCartDetails from "@/components/checkout/CheckoutCartDetails";
import CheckoutCustomerDetails from "@/components/checkout/CheckoutCustomerDetails";
import { useGlobalCartContext } from "@/contexts/cartContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const CheckoutPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { clearCart } = useGlobalCartContext();

  // on successful payment
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.location.href.includes("success")) {
      clearCart();
      setIsSuccess(true);
    }
  });

  if (isSuccess) {
    return (
      <div className="flex justify-center pt-[150px]">
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
  }

  return (
    <div className="px-[20px] py-[40px] center">
      <h1>DEKREATORS IDEA</h1>
      <p className="flex items-center gap-2">
        <span className=" flex items-center">
          <span className=" text-[#197bbd]">Cart</span>
          <FaAngleRight />
        </span>
        <span className=" flex items-center text-black">
          Information
          <FaAngleRight />
        </span>
        <span className="text-[#707070]">Payment</span>
      </p>
      <div className=" lg:grid grid-cols-2 gap-5 pt-10">
        <CheckoutCustomerDetails />
        <CheckoutCartDetails />
      </div>
    </div>
  );
};

export default CheckoutPage;
