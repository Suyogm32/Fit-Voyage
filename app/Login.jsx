"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px;
`;

const Login = () => {
  const initialState = { email: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);
  const [error, setError] = useState("");
  const router = useRouter();

  const PutAttribute = (e, attribute) => {
    const newdetails = { ...loginData };
    newdetails[attribute] = e.target.value;
    setLoginData(newdetails);
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  const checkUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await signIn("credentials", {
        email: loginData.email,
        password: loginData.password,
        redirect: false,
      });

      if (result?.error === "EmailNotVerified") {
        setError(
          "Please verify your email before logging in — check your inbox for the link.",
        );
        return;
      }
      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }

      router.push("/");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <LoginGrid>
      <div>
        <img
          src={"/images/LoginPageBanner.jpg"}
          alt="LoginPageBanner"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={"/images/logo.png"}
          alt="logo"
          className="w-[300px] h-[150px]"
        />
        <div className="flex flex-col justify-center items-center gap-4 border-b-[2px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={(e) => PutAttribute(e, "email")}
            className="p-4 border-s-black border-b-[2px]"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={(e) => PutAttribute(e, "password")}
            className="p-4 border-s-black border-b-[2px]"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={checkUser}
            className="bg-white text-black p-2 px-4 rounded-lg"
          >
            Login
          </button>
        </div>
        <button
          className="bg-white text-black p-2 px-4 rounded-lg"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div className="flex items-center justify-end px-2 m-3">
          Don&apos;t have account yet?,{" "}
          <Link href={"/signup"} className="text-blue-500">
            Sign Up
          </Link>{" "}
        </div>
      </div>
    </LoginGrid>
  );
};

export default Login;
