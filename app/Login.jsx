import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { signIn} from "next-auth/react";
import Link from "next/link";
const LoginGrid = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px;
`;
const Login = ({ session }) => {
  const initialState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialState);
  const [error, setError] = useState("");
  const router = useRouter();
  const ss = typeof window !== "undefined" ? window.sessionStorage : null;
  const PutAttribute = (e, attribute) => {
    const newdetails = { ...loginData };
    newdetails[attribute] = e.target.value;
    setLoginData(newdetails);
  };
  const handleLogin = async () => {
    try {
      const response = await signIn("google");
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };
  const checkUser = async (e) => {
    e.preventDefault();
    try {
      const data = loginData;
      console.log(data);
      const resp = await axios.post("/api/login", data);
      console.log(resp.data);
      if (resp.data.user) {
        session.status = "authenticated";
        session.data = resp.data.user;
        const userInfo = {
          userId: resp.data.user._id,
          useremail: resp.data.user.email,
          uname: resp.data.user.name,
        };
        ss.setItem("user", JSON.stringify(userInfo));
      }
      console.log(session);
    } catch (error) {
      // Handle Axios POST request error
      console.error("Error creating product:", error);
      setError("Failed to create product. Please try again later.");
    }
  };
  return (
    <LoginGrid>
      <div>
        <img src={"/images/LoginPageBanner.jpg"} alt="LoginPageBanner" className="rounded-lg"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
      <img src={'/images/logo.png'} alt="logo" className="w-[300px] h-[150px]"/>
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
        <button
          onClick={checkUser}
          className="bg-white text-black p-2 px-4 rounded-lg"
        >
          Login
        </button>
        </div>
        <button
          className="bg-white text-black p-2 px-4 rounded-lg"
          onClick={handleLogin}
        >
          Login with Google
        </button>
        <div className="flex items-center justify-end px-2 m-3">
          Don&apos;t have account yet?,{" "}
          <Link
            href={"/signup"}
            className="text-blue-500"
          >
            Sign Up
          </Link>{" "}
        </div>
      </div>
    </LoginGrid>
  );
};

export default Login;
