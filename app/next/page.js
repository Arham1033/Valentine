"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();

  return (
    <>
     <div className="relative w-screen h-screen overflow-hidden">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/cherr_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        />
        
      {/* Foreground content */}
      <div className="relative flex items-center h-full flex-col mt-30 gap-10">
        <div className='flex flex-col items-center'>

        <h1 className='text-pink-500 text-stroke1 valentine-text4 sm:text-3xl text-2xl text-center px-5 animate-fadeIn1'>Thanks for always there for me 🤧</h1>
        <h2 className='text-pink-500 text-stroke1 valentine-text4 sm:text-2xl text-xl text-center px-5 animate-fadeIn1'>I'm Lucky i got a Girl who is preety by both Heart & Face 💗</h2>
        <p className='text-pink-500 text-stroke1 valentine-text4 sm:text-xl px-5 text-lg animate-fadeIn1'>The Moon is beautiful, isn't it ?
        </p>
        <div className="flex relative">
          <img className="sm:w-40 sm:h-40 w-30 h-30 rounded-full circle-enter enter-left z-10" src="/pfp1.jpg" alt="" />
          <img className='rotate-10 sm:w-30 sm:h-40 w-20 h-30 animate-slideInBottom absolute left-[30%]' src="/gif1.5.gif" alt=""/>
          <img className="sm:w-40 sm:h-40 w-30 h-30 rounded-full circle-enter enter-right" src="/pfp2.jpg" alt="" />
        </div>
        </div>

<div>
        <button onClick={() => router.push("/back")} className="bg-pink-600 text-pink-300 border-3 border-pink-300 overflow-hidden px-5 py-2 rounded-md hover:brightness-150 hover:border-pink-400 active:opacity-75 transition-all duration-300 cursor-pointer valentine-text2 tracking-wider group animate-fadeIn1 relative hover:scale-105">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Back ↩
</button> 
</div>
<h2 className='text-pink-500 text-stroke1 valentine-text4 text-lg sm:text-xl px-5 text-center animate-fadeIn'>The End...Hope you like my Gift 😣</h2>
      </div>
        </div>
    </>
  )
}

export default Page
