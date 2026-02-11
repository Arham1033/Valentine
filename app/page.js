"use client";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
const router = useRouter();
   // Define your sequence of positions
  const positions = [
    { top: 0, left: 0 },
    { top: 90, left: 50 },
    { top: -200, left: -60 },
    { top: 100, left: -120 },
  ];

    const [index, setIndex] = useState(0);
  // State to hide No button
  const [hideNo, setHideNo] = useState(false);

  const handleClick = () => {
    if (index < messages.length - 1) {
      // Move to next message and position
      setIndex(prev => prev + 1);
    } else {
      // Last click → hide No button
      setHideNo(true);
    }
  };

 // Determine which GIF to show below "Will you be my Valentine?"
  const getValentineGif = () => {
    if (!hideNo) {
      // During No clicks
      if (index === 0) return "/gif1.gif";        // initial gif
      else return "/gif8.gif";                   // after first No click
    } else {
      // After No disappears
      return "/gif9.gif";                        // final gif celebrating Yes
    }
  };

const messages = [
  "No 😤",
  "No 😐",
  "Still No 🙄",
  "Noooo! 🙂"
];

   // Custom text to show below GIF on each No click
  const customTexts = [
    "Why you choose No 😭",
    "You can only choose Yes 😉",
    "Keep trying 😏",
  ];

  return (
   <>
   <div className="w-screen h-screen bg-[url('/v2.avif')] bg-cover bg-center bg-no-repeat">
   <div className="inner flex flex-col justify-center items-center p-10">
    <div className="heading relative animate-fadeIn1">
    <h1 className="sm:text-4xl text-pink-500 text-3xl text-stroke1 z-10 relative text-center valentine-text">Happy Valentines Day</h1>
    <img className="absolute -top-6 z-0" width={100} src="/gif7.gif" alt=""/>
    <img className="absolute -top-6 right-1 z-0" width={100} src="/gif7.gif" alt=""/>
    </div>
    <div className="relative animate-fadeIn2">
<img className="rounded-2xl mt-5" width={300} src="/v3.jpg" alt=""/>
<span className="text-pink-500 absolute top-35 left-10 sm:left-12 text-sm font-bold">Will you be my Valentine?🍷</span>
{/* Dynamic GIF that changes based on No clicks */}
          <img
            className="absolute top-40 sm:top-38 left-1/2 -translate-x-1/2 w-full max-w-20 sm:max-w-20 md:max-w-28 h-auto"
            src={getValentineGif()}
            alt="valentine gif"
          />
             {/* Custom text below GIF appears progressively */}
          {!hideNo && index > 0 && (
            <span className="mt-3 text-xl text-pink-500 text-center animate-fadeIn flex justify-center font-semibold">
              {customTexts[index - 1]}
            </span>
          )}
    </div>


{hideNo && (
  <div className="flex flex-col items-center mt-4 relative h-4 opacity-0 animate-fadeIn">
    <h2 className="sm:text-2xl text-xl text-pink-500 mb-4 z-10 text-center font-semibold">
      Now you only have one option 😁
    </h2>

    {/* Arrow GIFs pointing toward the Yes button */}
    <img
      className="absolute md:top-25 top-30 z-10 -rotate-100 w-16 h-16"
      src="/gif5.gif"
      alt="arrow"
    />
    <img
      className="absolute md:top-4 top-10 md:left-21 sm:left-12 left-6 -rotate-100 w-16 h-16"
      src="/gif4.gif"
      alt="arrow"
    />
    <img
      className="absolute md:top-8 top-12 md:right-21 sm:right-12 right-6 -rotate-340 w-16 h-16"
      src="/gif4.gif"
      alt="arrow"
    />
  </div>
)}


<div className="btns flex gap-10 md:mt-8 mt-14 relative"> 

<button onClick={() => router.push("/yes")} className="bg-pink-600 text-pink-300 border animate-fadeIn border-pink-400 border-b-4 overflow-hidden px-5 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer hover:scale-105 relative w-fit font-semibold ">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
    Yes 👻
</button> 

  {!hideNo && (
    
    <button onClick={handleClick}
    style={{
      top: positions[index].top,
      left: positions[index].left,
    }} className="bg-pink-600 text-pink-300 border border-pink-400 border-b-4 overflow-hidden px-5 animate-fadeIn py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer hover:scale-105 font-semibold relative w-fit ">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  {messages[index]}
</button>
  )}

</div>

   </div>
   </div>
   </>
  );
}
