"use client";
import React, { useState } from "react";
import Link from "next/link";
import Bars from "../utils/bars";
import styled, { css } from "styled-components";
import { signOut, useSession } from "next-auth/react";
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${(props) =>
    !props.shownav &&
    css`
      display: none;
    `};
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    position: static;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavButton = styled.button`
  ${(props) =>
    props.shownav &&
    css`
      display: none;
    `};
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  const session = useSession();

  const logout = async () => {
    await signOut("google", { redirect: false });
    ss.removeItem("user");
    router.push("/");
    console.log(session);
  };
  return (
    <>
      <div className="flex px-[20px] gap-1 md:gap-3 mt-8 justify-between md:justify-normal">
        <Link href={"/"}>
          <img
            src="/images/Logo.png"
            alt="logo"
            className="w-[100px] h-[40px] md:w-[100px] md:h-[40px] lg:w-[150px] lg:h-[60px]"
          />
        </Link>
        <div className="flex gap-4">
        <img
            src={session.data?.user?.image}
            alt="User"
<<<<<<< HEAD
            className="md:hidden rounded-full w-[40px] h-[40px]"
=======
            className="md:hidden rounded-full w-[40px] h-[40px] "
>>>>>>> e84c902 (half project commit)
          />
        <NavButton
          shownav={shownav}
          onClick={() => setShowNav((prev) => !prev)}
          className="md:hidden"
        >
          <Bars />
        </NavButton>
        <StyledNav
          shownav={shownav}
          className="mylink"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <button className="md:hidden">
            <Bars />
          </button>
          <Link href={"/"}>Home</Link>
          <Link href={"#exercises"}>Exercises</Link>
          <Link href={"/memberships"}>Memberships</Link>
          <Link href={"/myworkout"}>Workout</Link>
          <Link href={"/schedule"}>Schedule</Link>
          <button onClick={logout} className="md:hidden">Logout</button>
        </StyledNav>
        <div className="flex gap-2 justify-center items-center">
          <img
            src={session.data?.user?.image}
            alt="User"
            className="hidden md:block rounded-full w-[50px] h-[50px]"
          />
          <button onClick={logout} className="hidden md:block">Logout</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
