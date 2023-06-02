import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductBox = ({ product }) => {
  return (
    <Link href={"/products/" + product._id} className=" text-center">
      <div className=" relative w-full h-[250px] sm:h-[300px] md:h-[350px] ">
        <img
          src={product.images[0]}
          alt={product.title}
          className=" w-full h-full object-cover absolute z-10 hover:z-0"
          loading="lazy"
        />
        {product?.images[1] && (
          <img
            src={product.images[1]}
            alt={product.title}
            className=" w-full h-full object-cover absolute hover:z-10"
            loading="lazy"
          />
        )}
      </div>
      <button className="btn" role="button" aria-label="button">
        SELECT OPTIONS &rarr;
      </button>
      <div>
        <h1 className=" text-[1.3rem] font-semibold py-2 hover:text-[#6e6e6e]">
          {product.title}
        </h1>
        <p>₦{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductBox;
