"use client";
import HeadingOne from "@/components/HeadingOne";
import Link from "next/link";
import React, { useState } from "react";

const AccountRegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <div class="container max-w-[600px] mx-auto p-[20px]">
        <HeadingOne text={"REGISTER"} />
        <form onSubmit={handleSubmit}>
          <div className=" sm:flex items-center gap-5">
            <div className="w-full">
              <label for="first name">First Name</label>
              <br />
              <input
                className="w-full p-3 border border-[#21212180] my-1"
                id="first name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label for="last name">Last Name</label>
              <br />
              <input
                className="w-full p-3 border border-[#21212180] my-1"
                id="last name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <label for="email">Email</label>
          <br />
          <input
            className="w-full p-3 border border-[#21212180] my-1"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            className="w-full p-3 border border-[#21212180] my-1"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="py-5">
            <button
              type="submit"
              class=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-auto"
            >
              SIGN IN
            </button>
            <Link
              href={"/"}
              type="submit"
              class=" p-3 px-4 text-black font-light  block w-full sm:inline sm:w-auto "
            >
              RETURN TO STORE
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountRegisterPage;
