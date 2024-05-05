"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import Link from "next/link";
const SignupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fff;
  border-radius: 10px;
  margin: 0;
  top: 0;
  bottom: 0;
  @media screen and (min-width:768px){
    grid-template-columns: .8fr 1.2fr;
  }
  @media screen and (min-width:900px){
    grid-template-columns: 0.7fr 1.3fr;
  }
`;
const FitUser = () => {
  const session = useSession();
  console.log(session);
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  console.log(initialState);
  const [FitUserDetails, setFitUserDetails] = useState(initialState);
  const [error, setError] = useState("");
  const router = useRouter();

  const PutAttribute = (e, attribute) => {
    const newdetails = { ...FitUserDetails };
    newdetails[attribute] = e.target.value;
    setFitUserDetails(newdetails);
  };
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      const data = { ...FitUserDetails };
      console.log("data->", data);
      const resp = await axios.post("/api/signup", data);
      console.log(resp.data);
      router.push("/myworkout");
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product. Please try again later.");
    }
  };

  return (
    <SignupGrid>
      <div className="flex flex-col gap-2 justify-start items-center">
        <img
          src={"/images/logo.png"}
          alt="logo"
          className="w-[300px] h-[150px]"
        />
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={FitUserDetails.name}
          onChange={(e) => PutAttribute(e, "name")}
          className="p-4 pb-1 pl-1 border-s-black border-b-[2px]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={FitUserDetails.email}
          onChange={(e) => PutAttribute(e, "email")}
          className="p-4 pb-1 pl-1 border-s-black border-b-[2px]"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={FitUserDetails.password}
          onChange={(e) => PutAttribute(e, "password")}
          className="p-4 pb-1 pl-1 border-s-black border-b-[2px]"
        />
        <button
          onClick={saveUser}
          className="bg-white text-black p-2 px-4 rounded-lg mt-8"
        >
          Submit
        </button>
        <div className="flex items-center justify-end px-2 m-3 pt-4 border-t-2">
          Already have account?,{" "}
          <Link
            href={"/"}
            className="text-blue-500"
          >
            Login
          </Link>{" "}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={"/images/SignupLogoBanner.jpg"}
          alt="SignupPageBanner"
          className="rounded-md hidden md:inline-block"
        />
      </div>
    </SignupGrid>
  );
};

export default FitUser;
