"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function JoinUs() {
  const titleWords = "AskNova";
  const taglineWords = "AskNova turns your prompt into a live, automated landing page.";

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] z-0" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2F80ED]/20 via-transparent to-[#2F80ED]/10 z-0" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Main Heading with Text Generate Effect */}
        <div className="relative z-10 mb-6 text-5xl md:text-8xl text-center font-sans font-bold gradient-text">
          <TextGenerateEffect words={titleWords} />
        </div>

        {/* Tagline with Text Generate Effect */}
        <div className="max-w-2xl mx-auto my-6 relative z-10">
          <TextGenerateEffect
            words={taglineWords}
            className="text-neutral-300 text-lg md:text-xl text-center font-medium"
          />
        </div>

        {/* Description */}
       
        {/* Email Input & Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 relative z-10 max-w-2xl mx-auto">
          <div className="relative w-full sm:flex-1">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(47,128,237,0.6)_0%,rgba(47,128,237,0)_75%)] opacity-0 transition-opacity duration-500 hover:opacity-100" />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="relative w-full px-6 py-3 rounded-full bg-zinc-950 text-white placeholder:text-neutral-600 outline-none ring-1 ring-white/10 focus:ring-white/20 transition-all"
            />
          </div>

          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(47,128,237,0.6)_0%,rgba(47,128,237,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2.5 px-6 ring-1 ring-white/10">
              <span>Get Started</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#2F80ED]/0 via-[#2F80ED]/90 to-[#2F80ED]/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>

        {/* Brand Colors Reference (Hidden) */}
        <div className="hidden">
          <div className="bg-[#2F80ED]">Blue - Diamante Azul</div>
          <div className="bg-[#0a0a0a]">Black - Petra Negra</div>
          <div className="bg-white">White - Floa Zro</div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
