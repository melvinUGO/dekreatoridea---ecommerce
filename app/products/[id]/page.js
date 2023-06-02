// "use client";
//import HeadingOne from "@/components/HeadingOne";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

async function getProduct(id) {
  await mongooseConnect();
  const product = await Product.findById(id);
  return product;
}

const page = async ({ params }) => {
  const product = await getProduct(params.id);
  return (
    <div className="max-w-[600px] mx-auto lg:max-w-[1200px] p-[20px] ">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="w-full">
          <img src={product.images[0]} alt="product.title" />
        </div>
        <div className="w-full">
          {/* <HeadingOne text={product.title} /> */}
          <form>
            <div className=" bg-[#f2f2f2] p-3">
              <h1>₦{product.price}</h1>
            </div>
            <div className="py-2">
              <p>SIZE</p>
              <div></div>
            </div>
            <div className=" flex justify-between items-center py-2">
              <p>Quantity</p>
              <div className=" text-center max-w-[150px] grid grid-cols-3">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1> &ldquo;ORIGINAL RELEASE DATE:JUNE 2ND 2023&rdquo;</h1>
        <p className=" font-bold">ALL SALES ARE FINAL.</p>
        <p className=" font-bold">
          Please allow up to 3-5 business days for shipping and processing
        </p>
      </div>
    </div>
  );
};

export default page;
