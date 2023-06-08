import { useGlobalUserContext } from "@/contexts/userContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AccountDetailsForm = ({}) => {
  const { user, logout } = useGlobalUserContext();

  const [userDetails, setUserDetails] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [saving, setSaving] = useState(false);
  const [addressLoaded, setAddressLoaded] = useState(true);
  const data = { userId: user?.userId, name, email, state, number, address };

  const clearFormInput = () => {
    setName("");
    setEmail("");
    setState("");
    setAddress("");
    setNumber("");
  };

  const saveAccountDetails = async (e) => {
    e.preventDefault();
    setSaving(true);

    if (userDetails.length > 0) {
      console.log(`update ${userDetails}`);
      return await updateAccountDetails();
    } else {
      console.log(userDetails);
      await axios.post("/api/account/address", data);

      setSaving(false);
      clearFormInput();
      getUserDetails();
    }
  };

  const updateAccountDetails = async () => {
    await axios.put("/api/account/address", data);

    setSaving(false);
    clearFormInput();
    getUserDetails();
  };

  const getUserDetails = async () => {
    const response = await axios("/api/account/address?id=" + user?.userId);
    const userDetails = response.data;
    setUserDetails([userDetails]);
    if (userDetails) {
      setName(userDetails?.name);
      setEmail(userDetails?.email);
      setState(userDetails?.state);
      setAddress(userDetails?.address);
      setNumber(userDetails?.number);
    }
  };

  useEffect(() => {
    if (user.userId) {
      console.log("loading dets");
      getUserDetails();
    }
  }, [user.userId]);

  if (!addressLoaded) {
    return;
  }

  return (
    <form onSubmit={saveAccountDetails}>
      <input
        required
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        required
        type="text"
        placeholder="State"
        value={state}
        name="state"
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      <input
        required
        type="text"
        placeholder="Street Address"
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <input
        required
        type="tel"
        placeholder="Number"
        value={number === null ? "" : number}
        name="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button className="btn" type="submit">
        {saving ? "Saving" : "Save"}
      </button>
    </form>
  );
};

export default AccountDetailsForm;
