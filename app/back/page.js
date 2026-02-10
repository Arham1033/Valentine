"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";

const page = () => {
 const router = useRouter();




  return (
    <>
      
    <div className="w-screen h-screen m-0 p-0 bg-[url('/v13.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-center w-full h-full md:p-10 relative">
          <p className="sm:text-2xl text-xl font-semi-bold text-pink-400 mb-4 text-center animate-fadeIn2 pl-10 z-10 valentine-text2 px-5 text-stroke1 tracking-wider">Thank you for saying Yes 💖</p>
          <img src="/gif7.gif" alt="Love GIF" className="w-40 rounded-2xl animate-fadeIn2 absolute top-5 md:left-[30%] left-0 z-0" />
          <img src="/gif7.gif" alt="Love GIF" className="w-40 rounded-2xl animate-fadeIn2 absolute top-5 md:right-[30%] right-0 z-0" />

          <img src="/excited.gif" alt="Love GIF" className="w-50 rounded-2xl animate-fadeIn2" />
            <span className='text-pink-400  sm:text-2xl text-xl text-center mt-5 animate-fadeIn1 px-5 valentine-text2 text-stroke1 tracking-wider'>Choose any gift all are yours hehe 😎</span>
          <div className="gift flex gap-6 animate-fadeIn pr-10">


    <img onClick={() => router.push("/gift1")} className='hover-pointer sm:w-35 sm:h-35 w-25 h-25' src="/gif12.gif" alt=""/>
   
<img onClick={() => router.push("/gift2")} className='hover-pointer sm:w-30 sm:h-30 w-20 h-20 mt-5' src="/gif11.gif" alt=""/>
    
<img onClick={() => router.push("/gift3")} className='hover-pointer sm:w-25 w-20 h-20 sm:h-25 sm:mt-8 mt-6' src="/gif15.gif" alt=""/>
        </div>


<button onClick={() => router.push("/next")} className="bg-pink-600 text-pink-300 border-3 border-pink-300 overflow-hidden relative px-5 py-2 rounded-md hover:brightness-150 hover:border-pink-400 active:opacity-75 transition-all duration-300 cursor-pointer valentine-text2 tracking-wider mt-4 group animate-fadeIn hover:scale-105">
    
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Next ✨
</button> 
        </div>
    </div>

    </>
  )
}

export default page
