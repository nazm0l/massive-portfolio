"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="h-[70px] bg-gradient-to-r from-[#ff1e1e] to-[#ff8079] text-white overflow-hidden flex">
      <div className="container px-5 mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={70} height={70} />
          </Link>
        </div>
        {/* Hambarger Icon  */}
        <button
          className="md:hidden"
          onClick={() => {
            setNavMenu(!navMenu);
          }}
        >
          <Image
            className="md:hidden"
            src={navMenu ? "/cross.svg" : "/list.svg"}
            alt="menu"
            width={30}
            height={30}
          />
        </button>
        <div className="hidden md:block">
          <ul className="flex gap-10 font-semibold text-lg">
            <Link href="/">Home</Link>
            <Link href="projects">Projects</Link>
            <Link href="components">Components</Link>
            <Link href="about">About</Link>
            {session ? (
              <>
                <Link href="profile">{session.user?.name}</Link>
                <button onClick={() => signOut()}>Logout</button>
              </>
            ) : (
              <Link href="login">Login</Link>
            )}
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="w-52 overflow-hidden bg-gray-100 text-black rounded-lg absolute top-20 right-0">
        <div className={navMenu ? "block" : `hidden`}>
          <ul className="flex flex-col gap-5 font-semibold text-lg p-5">
            <Link href="/">Home</Link>
            <Link href="projects">Projects</Link>
            <Link href="components">Components</Link>
            <Link href="about">About</Link>
            <Link href="login">Login</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
