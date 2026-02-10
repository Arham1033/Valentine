"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import HeartRain from "@/components/HeartRain";
import { useRouter } from 'next/navigation';

const page = () => {
    const [showHearts, setShowHearts] = useState(false);
const router = useRouter();
  useEffect(() => {
    // trigger hearts immediately after mount
    setShowHearts(true);

    const timer = setTimeout(() => {
      setShowHearts(false); // remove after 4s
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
      <>
      <div className="w-screen h-screen bg-[url('/v15.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
    {/* ❤️ HEART RAIN */}
      {showHearts && <HeartRain />}

      <h1 className='text-center valentine-text3 sm:text-4xl text-3xl font-semibold text-pink-400 text-stroke1 pt-10 animate-fadeIn1 px-5'>Love letter to the prettiest Girl in the World 😘</h1>
      <div className='flex justify-center flex-col items-center pt-8'>


<div className='flex px-4'>
<div className='flex relative'>
<img className='rotate-350 rounded-2xl opacity-0 translate-0 animate-slideInLeft torn-paper sm:w-70 w-60' src="r1.png" alt=""/>
<img className='absolute opacity-0 translate-0 animate-slideInRight bottom-[15%] scale-x-[-1] left-[30%] sm:w-15 w-12' src="/arrow.gif" alt=""/>
</div>

<div className='flex relative flex-col'>

<img className='rotate-10 sm:w-50 sm:h-60 w-30 h-33 animate-slideInRight' src="/gif1.5.gif" alt=""/>
<img className=' animate-slideInRight' width={100} src="kiss1.gif" alt=""/>
</div>
</div>
    
<button onClick={() => router.push("/back")} className="bg-pink-600 text-pink-300 border-3 border-pink-300 overflow-hidden px-5 py-2 rounded-md hover:brightness-150 hover:border-pink-400 active:opacity-75 transition-all duration-300 cursor-pointer valentine-text2 tracking-wider sm:mt-4 mt-20 group animate-fadeIn1 relative bottom-20 hover:scale-105">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Back ↩
</button> 

        </div>
       
      </div>
      </>
  )
}

export default page
