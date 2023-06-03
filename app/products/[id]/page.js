"use client";
import HeadingOne from "@/components/HeadingOne";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsPage = ({ params }) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get("/api/products?id=" + params.id).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, [params.id]);

  return (
    <div className="max-w-[600px] mx-auto lg:max-w-[1200px] p-[20px] ">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="w-full">
          {product && <img src={product.images[0]} alt="product.title" />}
        </div>
        <div className="w-full">
          <HeadingOne text={product.title} />
          <form className=" border border-1 border-[#21212133]">
            <div className=" bg-[#f2f2f2] p-3">
              <h1>₦{product?.price}</h1>
            </div>
            <div className="p-3 py-5">
              <div className="py-2">
                <p>SIZE</p>
                <div></div>
              </div>
              <div className=" flex justify-between items-center py-2">
                <p>Quantity</p>
                <div className=" border bg-[#f2f2f2] text-center max-w-[150px] flex items-center">
                  <button className="p-2 px-3 border bg-[#ffffff]">-</button>
                  <p className="p-2 px-3 mb-0 ">1</p>
                  <button className="p-2 px-3 border bg-[#ffffff]">+</button>
                </div>
              </div>
              <button className="w-full py-2 border border-black hover:bg-black hover:text-white">
                ADD TO CART <span className="text-[1.2rem]">+</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-10">
        <h1 className="py-5">
          {" "}
          &ldquo;ORIGINAL RELEASE DATE:JUNE 2ND 2023&rdquo;
        </h1>
        <p className=" font-bold">ALL SALES ARE FINAL.</p>
        <p className=" font-bold">
          Please allow up to 3-5 business days for shipping and processing
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;
