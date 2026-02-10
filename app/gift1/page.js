"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  return (
    <div className="w-screen h-screen m-0 p-0 bg-[url('/v1.avif')] bg-cover bg-center bg-no-repeat">
      {/* Your content goes here */}
      <div className="flex flex-col items-center w-full h-full">

        <div className="bg-pink-100 rounded-xl animate-fadeIn2 mt-10 md:w-[40%] w-[90%] md:h-[90%] h-[70%]">
       <div className=" bg-[url('/des1.png')] bg-cover bg-center bg-no-repeat h-full">

        <h1 className="text-pink-500 sm:text-4xl text-2xl font-bold text-center mt-3 valentine-text5">Enjoy! 🤤</h1>
<div className="gifs flex flex-wrap justify-center items-center gap-2 2xl:mt-40 2xl:mx-20 xl:mt-20 xl:mx-20 lg:mt-40 lg:mx-10 md:mt-40 md:mx-0 sm:mt-25 sm:mx-20 mt-15 animate-fadeIn1">
  <img className="w-24 transition ease-in-out md:flex-[0_0_20%] duration-300 flex-[0_0_20%] hover:scale-105 cursor-pointer hover:rotate-20 swing-animation" src="/roses.png" alt=""/>
  <img className="w-24 hover:scale-105 transition-transform md:flex-[0_0_20%] duration-300 flex-[0_0_20%] rotate-10" src="/gif2.gif" alt=""/>
  <img className="w-24 rotate-340 swing-animation1 transition ease-in-out md:flex-[0_0_20%] duration-300 flex-[0_0_10%] hover:scale-105 cursor-pointer hover:rotate-360" src="/bhalu.png" alt=""/>
  <img className="w-44 rotate-0 hover:scale-105 md:flex-[0_0_20%] transition ease-in-out duration-300 flex-[0_0_20%] cursor-pointer hover:rotate-20" src="/cdc.gif" alt=""/>
  <img className="w-28 rotate-300 transition md:flex-[0_0_20%] ease-in-out duration-300 flex-[0_0_20%] swing-animation hover:scale-105 cursor-pointer hover:rotate-320" src="/diary.gif" alt=""/>
</div>

       </div>
  </div>
<button onClick={() => router.push("/back")} className="bg-pink-600 text-pink-300
    border-3 border-pink-300
    overflow-hidden
    px-5 py-2 rounded-md
    hover:brightness-150
    hover:border-pink-400
    active:opacity-75
    transition-all duration-300
    cursor-pointer
    valentine-text2 tracking-wider mt-4
    group animate-fadeIn relative bottom-20 hover:scale-105">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Back 👈🏻
</button> 

      </div>
    </div>
  );
};

export default Page;
