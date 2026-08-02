"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import MyHome from "./components/MyHome";

export default function Home() {
  const session = useSession();
  const ss = typeof window !== "undefined" ? window.sessionStorage : null;

  useEffect(() => {
    if (session.data) {
      const userInfo = {
        userId: session.data.user.id,
        userEmail: session.data.user.email,
        uname: session.data.user.name,
      };
      ss?.setItem("user", JSON.stringify(userInfo));
    } else if (session.status === "unauthenticated") {
      ss?.removeItem("user");
    }
  }, [session, ss]);

  return <MyHome />;
}
