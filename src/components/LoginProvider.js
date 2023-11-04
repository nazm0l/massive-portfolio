"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginProvider = () => {
  return (
    <div>
      <div className="w-full">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="bg-gradient-to-r from-[#f39d99] to-[#ff1e1ec5] text-white p-3 rounded-md flex items-center gap-2"
        >
          <Image src="/google.svg" alt="google" width={30} height={30} />
          Login with Google
        </button>
        {/* <button
          onClick={() => alert("Github in clicked")}
          className="bg-[#ff1e1e] text-white p-3 rounded-md"
        >
          Login with Github
        </button> */}
      </div>
    </div>
  );
};

export default LoginProvider;
