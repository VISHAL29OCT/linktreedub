"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();
const handleSubmit = (e) => {
    e.preventDefault();
     localStorage.setItem("signedUp", "true");
    router.push("/");
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">

      <div className="h-screen overflow-y-auto">
      <div className="flex flex-col px-12 py-10">

        {/* Logo */}
        <Link href="/" className="mb-16">
          <img
            className="h-7"
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
            alt="Linktree logo"
          />
        </Link>

        {/* Content */}
        <div className="max-w-sm w-full mx-auto">

          <h1 className="text-4xl font-bold mb-6 text-center">
Welcome back
          </h1>

          <p className="text-gray-600 mb-12 text-center">
         Log in to your Linktree
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Username"
              className="bg-gray-100 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              disabled={email.trim() === ""}
              className="bg-black text-white py-3 rounded-md
                         disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue
            </button>
           
          </form>
        
          <div className="flex items-center gap-4 my-8 ">
              <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-400 text-sm">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Social buttons (optional placeholder) */}
        <div className="butttons flex flex-col gap-4">
          <button className="border py-3 rounded-md w-full">
            Continue with Google
          </button>

           <button className="border py-3 rounded-md w-full">
            Continue with apple
          </button>
          </div>

          <div className="flex items-center gap-4 my-8">
           
            <span className="text-gray-700 text-sm mx-auto">Don't Have A Account? <a className="text-blue-700" href="/signup">Signup</a></span>
       
          </div>
        </div>
      </div>
      </div>



      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block sticky top-0 h-screen">
        <img
          src="/signin.png"
          alt="signup"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
