"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const router = useRouter()
    useEffect(() => {
    const signedUp = localStorage.getItem("signedUp");

    if (!signedUp) {
      router.push("/signup");
    }
  }, [router]);
  const [text, setText] = useState("")

  const createTree = () => {

    router.push(`/generate?handle=${text}`)
  }
  

  return (
    <main>
      <section className="bg-lime-400 min-h-screen grid grid-cols-2 ">
        <div className=" flex items-center justify-center flex-col ml-[5vw] gap-4 mt-20 ">
          <p className=" text-green-900 font-bold text-5xl ">
            A link in bio built
            for you.

          </p>
          <p className="text-green-900 text-xl">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex gap-2 my-3">
            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-white px-2 py-2 focus:outline-green-800 p-4 rounded-2xl" type="text" placeholder="enter your handle" />
            <button onClick={() => createTree()} className="bg-green-900 text-white rounded-full p-4">Claim Your bitree </button>
          </div>

        </div>
        <div className="flex items-center justify-center mt-40 flex-col mr-[5vw]">
          <img  className="w-110 overflow-hidden mb-10" src="/front.png" alt="hero" />
        </div>
      </section>
      <section className=" bg-slate-50 min-h-screen grid grid-cols-1 md:grid-cols-2">

        <div className="h-screen w-full flex">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-auto"
  >
    <source src="/linktree-video.mp4" type="video/mp4" />
  </video>
</div>

      
        <div className="flex items-center justify-center px-12 flex-col gap-6">
          <p className=" text-lime-500 font-bold text-5xl ">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-lg text-green-800">
            Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.
          </p>
            <Link href="login" >  <button className="login bg-blue-500 p-4 rounded-full w-88 text-xl text-white hover:bg-blue-600">Get Started For Free</button></Link> 
          
        </div>


      </section>
      


    </main>
  );
}
