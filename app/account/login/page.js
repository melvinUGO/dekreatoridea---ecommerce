"use client";
import HeadingOne from "@/components/HeadingOne";
import Link from "next/link";
import React, { useState } from "react";

const AccountloginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div class="container max-w-[600px] mx-auto p-[20px]">
        <HeadingOne text={"LOGIN"} />
        <form onSubmit={handleSubmit}>
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
          <p>
            {" "}
            <a href="/forgot-password" class="tsm:text-right block ">
              Forgot your password?
            </a>
          </p>
          <button
            type="submit"
            class=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-auto"
          >
            SIGN IN
          </button>
          <Link
            href={"/account/register"}
            type="submit"
            class=" p-3 px-4 text-black font-light  block w-full sm:inline sm:w-auto "
          >
            CREATE ACCOUNT
          </Link>
        </form>
      </div>
    </>
  );
};

export default AccountloginPage;
