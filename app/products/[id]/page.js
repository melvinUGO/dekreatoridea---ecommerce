"use client";
import Loading from "@/app/loading";
import HeadingOne from "@/components/HeadingOne";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsPage = ({ params }) => {
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("small");
  const [loading, setLoading] = useState(false);

  console.log(product?.size?.split(","));

  useEffect(() => {
    setLoading(true);
    axios.get("/api/products?id=" + params.id).then((res) => {
      setProduct(res.data);
    });
    setLoading(false);
  }, [params.id]);

  return (
    <div className="max-w-[600px] mx-auto lg:max-w-[1200px] p-[20px]">
      <div className="grid lg:grid-cols-2 gap-5">
        {loading && <Loading />}
        {!loading && (
          <div className="w-full">
            {product && <img src={product.images[0]} alt="product.title" />}
          </div>
        )}
        <div className="w-full">
          <HeadingOne text={product.title} />
          <form className=" border border-1 border-[#21212133]">
            <div className=" bg-[#f2f2f2] p-3 px-5">
              <h1>₦{product?.price}</h1>
            </div>
            <div className="px-5 py-8">
              <div>
                <p>SIZE</p>
                <div className=" flex flex-wrap items-center gap-2">
                  {product?.size?.split(",").map((s, index) => {
                    return (
                      <div className="" key={index}>
                        <input
                          className=""
                          hidden
                          type="radio"
                          name="size"
                          value={s}
                          id={s}
                          checked={size === s}
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label
                          htmlFor={s}
                          className={`${
                            size === s && "bg-black text-white"
                          } capitalize cursor-pointer border border-black p-1 px-4 text-[0.9rem]`}
                        >
                          {s}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" flex justify-between items-center py-5">
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
          &ldquo;ORIGINAL RELEASE DATE:
          {new Date(product.createdAt).toUTCString().substring(0, 16)}&rdquo;
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
