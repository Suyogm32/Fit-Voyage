"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Login from "../Login";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return null;
  }

  return (
    <div className="bg-LoginBackCol text-black w-screen h-screen flex flex-col justify-center items-center gap-2">
      <div className="w-auto">
        <Login />
      </div>
    </div>
  );
}
