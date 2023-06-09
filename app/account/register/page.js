"use client";
import HeadingOne from "@/components/HeadingOne";
import { useGlobalUserContext } from "@/contexts/userContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AccountRegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const { saveUser } = useGlobalUserContext();
  const router = useRouter();

  const clearInputFields = () => {
    setEmail("");
    setPassword("");
    setLastName("");
    setFirstName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const data = { email, password, firstName, lastName };
    try {
      const res = await axios.post("/api/account/register", data);
    } catch (error) {
      setError(true);
    }
    const user = res.data;

    saveUser(user.id, user.token);

    clearInputFields();
    router.push("/account");
  };
  return (
    <>
      <div className="container max-w-[600px] mx-auto p-[20px]">
        <HeadingOne text={"REGISTER"} />
        <form onSubmit={handleSubmit}>
          <div className=" sm:flex items-center gap-5">
            <div className="w-full">
              <label htmlFor="firstname">First Name</label>
              <br />
              <input
                required
                type="text"
                name="firstname"
                className="w-full p-3 border border-[#21212180] my-1"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastname">Last Name</label>
              <br />
              <input
                required
                type="text"
                name="lastname"
                className="w-full p-3 border border-[#21212180] my-1"
                id="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            required
            type="email"
            name="email"
            className="w-full p-3 border border-[#21212180] my-1"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            required
            name="password"
            className="w-full p-3 border border-[#21212180] my-1"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500">
              An error occured while registering user
            </p>
          )}
          <div className="py-5">
            <button
              type="submit"
              className=" p-3 px-4 bg-[#212121] hover:bg-black text-white font-light block w-full sm:inline sm:w-auto"
            >
              SIGN IN
            </button>
            <Link
              href={"/"}
              type="submit"
              className=" p-3 px-4 text-black text-center hover:text-[#6e6e6e] font-light  block w-full sm:inline sm:w-auto "
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
