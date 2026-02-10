"use client";

import React, { useRef, useState, useEffect } from "react";
import PlayIcon from "@/public/play.png"; // your SVG path
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const seekBarRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
 const [progress, setProgress] = useState(0);

  // ▶️ Play / ⏸ Pause toggle
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const updateProgress = () => {
    setProgress((video.currentTime / video.duration) * 100 || 0);
  };

  const handleEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    video.currentTime = 0;
  };

  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("ended", handleEnd);

  return () => {
    video.removeEventListener("timeupdate", updateProgress);
    video.removeEventListener("ended", handleEnd);
  };
}, []);

const handleSeek = (e) => {
  const video = videoRef.current;
  const seekBar = seekBarRef.current;
  if (!video || !seekBar || !video.duration) return;

  const rect = seekBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left; // click position inside bar
  const percentage = clickX / rect.width;

  video.currentTime = percentage * video.duration;
  setProgress(percentage * 100);
};


  return (
    <>
    <div className="w-screen h-screen m-0 p-0 bg-[url('/w2.jpg')] bg-cover bg-center bg-no-repeat">
    <div className='flex justify-center flex-col items-center animate-fadeIn gap-7'>
        <div className="flex justify-center flex-col items-center relative ">
<img className="absolute sm:-right-10 right-0 sm:top-3 top-[24%] animate-fadeIn2 sm:w-30 w-15" src="/gif6.gif" alt=""/>
<img className="absolute sm:-left-10 left-0 sm:top-3 top-[24%] animate-fadeIn2 sm:w-40 w-20" src="/gif3.gif" alt=""/>
<video ref={videoRef} className='object-cover aspect-9/13 sm:mt-[35] mt-40 w-80'playsInline src="/music.webm"></video>
 {/* ▶️ / ⏸ BUTTON */}
        <button
          onClick={handlePlayPause}
          className="absolute sm:bottom-[8%] bottom-[6%] z-10 cursor-pointer"
          >
          <img
            src={isPlaying ? "/pause.png" : "/play.png"}
            alt="Play Pause"
            className="w-12 h-12 opacity-80 pointer-events-none"
            />
        </button>

        {/* 🎚 SEEK BAR */}
        <div
        ref={seekBarRef}
        onClick={handleSeek} className="relative w-52 -top-6 h-1 bg-neutral-700 rounded cursor-pointer flex items-center">
            <div className="relative w-full h-1 bg-neutral-700 rounded">

          <div
            className="absolute h-1 bg-pink-400 rounded"
            style={{ width: `${progress}%` }}>
            </div>
          
          <div
            className="absolute w-4 h-4 bg-pink-400 rounded-full -top-1.5"
            style={{ left: `calc(${progress}% - 8px)` }}>
            </div>
              </div>
        </div>
                </div>
   
<button onClick={() => router.push("/back")} className="bg-pink-600 text-pink-300 border-3 border-pink-300 overflow-hidden px-5 py-2 rounded-md hover:brightness-150 hover:border-pink-400 active:opacity-75 transition-all duration-300 cursor-pointer valentine-text2 tracking-wider group animate-fadeIn1 relative hover:scale-105">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Back ⮜
</button> 
    </div>
    </div>
    </>
  )
}

export default page
