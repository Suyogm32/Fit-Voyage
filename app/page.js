"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Box } from "@mui/material";
import MyHome from "./components/MyHome";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const session = useSession();
  console.log(session, session.token);
  const ss = typeof window !== "undefined" ? window.sessionStorage : null;
  const route = useRouter();
  useEffect(() => {
    if (
      (session.data !== null && session.status === "authenticated") ||
      ss.getItem("user") !== null
    ) {
      setIsLoggedIn(true);
    }
    if (session.data) {
      const userInfo = {
        userId: session.data.user.id,
        userEmail: session.data.user.email,
        uname: session.data.user.name,
      };
      ss.setItem("user", JSON.stringify(userInfo));
    }
  }, [session]);

  if (isLoggedIn === false) {
    return (
      <>
        <div className="bg-LoginBackCol text-black w-screen h-screen flex flex-col justify-center items-center gap-2">
          <div className="w-auto">
            <Login session={session} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Box>
        <MyHome />
      </Box>
    );
  }
}
