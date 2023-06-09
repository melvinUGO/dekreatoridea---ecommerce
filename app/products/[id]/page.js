"use client";
import Loading from "@/app/loading";
import AddToCart from "@/components/cart/AddToCart";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductsPage = ({ params }) => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

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
        <AddToCart product={product} />
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
