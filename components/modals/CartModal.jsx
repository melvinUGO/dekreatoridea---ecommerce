"use client";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import { RxCross1 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { useGlobalCartContext } from "@/contexts/cartContext";
import Link from "next/link";

const CartModal = () => {
  const { cartModalRef, closeCartModal } = useNavGlobalContext();
  const { cart, sortCart, decreaseCartItem, increaseCartItem } =
    useGlobalCartContext();
  const [sortedCart, setSortedCart] = useState([]);

  const uniqueCartIds = [...new Set(cart.map((item) => item.id))];

  useEffect(() => {
    const array = sortCart(cart, uniqueCartIds);
    setSortedCart(array);
  }, [cart]);

  const total = sortedCart.reduce((acc, obj) => {
    return acc + obj.price * obj.quantity;
  }, 0);

  return (
    <dialog
      ref={cartModalRef}
      className="p-0 w-full sm:w-[75vw] md:max-w-[600px]"
    >
      <div className=" flex items-center justify-between bg-[#f2f2f2] p-3">
        <div></div>
        <h1>SHOPPING CART</h1>
        <button
          onClick={closeCartModal}
          className=" text-[1.4rem] outline-none"
        >
          <RxCross1 />
        </button>
      </div>
      <div className="p-5">
        {sortedCart.length > 0 ? (
          sortedCart.map((item, index) => {
            return (
              <article
                key={index}
                className=" flex flex-wrap items-center gap-5 border-b border-b-[#21212133] pb-[18px] mb-[18px] justify-between"
              >
                <div className="w-full grow md:grow-0 md:w-1/2">
                  <div className=" flex gap-2 items-center">
                    <div className=" max-w-[120px] md:max-w-[75px]">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className=" w-[75%]">
                      <p>{item.title}</p>
                      <p>{item.size}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  {" "}
                  <div className=" border bg-[#f2f2f2] text-center max-w-[100px] flex items-center">
                    <button
                      type="button"
                      className="p-1 px-3 border bg-[#ffffff]"
                      onClick={() => decreaseCartItem(item.id, item.size)}
                    >
                      -
                    </button>
                    <p className="p-1 px-3 mb-0 ">{item.quantity}</p>
                    <button
                      type="button"
                      className="p-1 px-3 border bg-[#ffffff]"
                      onClick={() => increaseCartItem(item.id, item.size)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="">
                  <p>₦{item.price}</p>
                </div>
              </article>
            );
          })
        ) : (
          <div>
            <p>no items in cart</p>
          </div>
        )}
      </div>
      <footer className="p-5">
        <div className=" my-[10px] mx-[20px] md:mx-0 md:my-[20px] text-center md:flex items-center justify-between">
          <p>Shipping & taxes calculated at checkout</p>
          <p className=" text-[1.05rem]">SUBTOTAL ₦{total}</p>
        </div>
        <div className="py-5 flex flex-col-reverse sm:flex-row gap-2">
          <Link
            href={"/account/register"}
            type="submit"
            className=" p-3 px-4 text-black border border-black  text-center hover:text-white hover:bg-black font-light  block w-full sm:inline sm:w-full "
          >
            CONTINUE SHOPPING
          </Link>
          <button
            type="submit"
            className=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-full"
          >
            CHECK OUT
          </button>
        </div>
      </footer>
    </dialog>
  );
};

export default CartModal;
