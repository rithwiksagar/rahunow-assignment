"use client";
import { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function BirthReadingForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <div className="w-full flex items-center justify-center mt-16 mb-10 px-2">
        <div className="w-full max-w-95 rounded-3xl bg-card border border-neutral-300 px-6 pt-4 pb-4">
          <div className="flex flex-col items-center">
            <p className="font-medium text-md md:text-xl text-neutral-800 font-serif">
              Get Your Free Reading
            </p>
            <p className="text-[10px] md:text-[11px] text-neutral-400">Enter Your Details</p>
          </div>
          <div className="mt-8">
            <label className="block text-[10px] md:text-[11px] tracking-wider text-neutral-600 mb-1 ml-1">
              YOUR NAME (optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-300 bg-[#FBFAF7] px-4 py-2 text-[15px] outline-none focus:border-accent/60 transition-colors placeholder:text-[13px] md:placeholder:text-[14px]"
            />
          </div>

          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] md:text-[11px] tracking-wider text-neutral-600 mb-1 ml-1">
                DATE OF BIRTH
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="DD-MM-YYYY"
                  className="w-full rounded-xl border border-neutral-300 bg-[#FBFAF7] pl-4 pr-10 py-2 text-[15px]70 text-[#1C1B19] outline-none focus:border-accent/60 transition-colors placeholder:text-[12px] md:placeholder:text-[13px]"
                />
                <SlCalender
                  size={17}
                  strokeWidth={1.75}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] md:text-[11px] tracking-widest text-neutral-600 mb-1 ml-1">
                TIME OF BIRTH
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={tob}
                  onChange={(e) => setTob(e.target.value)}
                  placeholder="HH:MM"
                  className="w-full rounded-xl border border-neutral-300 bg-[#FBFAF7] pl-4 pr-10 py-2 text-[15px] text-[#1C1B19] outline-none focus:border-accent/60 transition-colors placeholder:text-[12px] md:placeholder:text-[13px]"
                />
                <CiClock1
                  size={17}
                  strokeWidth={1.75}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-[10px] md:text-[11px] tracking-wide text-neutral-600 mb-1 ml-1">
              CITY OF BIRTH
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City of birth"
              className="w-full rounded-xl border border-neutral-300 bg-[#FBFAF7] px-4 py-2 text-[15px] text-[#1C1B19] outline-none focus:border-accent/60 transition-colors placeholder:text-[13px] md:placeholder:text-[14px]"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex gap-1 items-center mt-10 w-fit rounded-xl bg-accent py-2 px-3 text-[15px] font-medium text-[#F5F3EE] font-sans tracking-tight hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Show me my reading <FaArrowRight className="size-3" />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-neutral-600">
            <span>Always free</span>
            <span className="text-[#C9C4B6]">●</span>
            <span>Only you see it</span>
            <span className="text-[#C9C4B6]">●</span>
            <span>No sign-up</span>
          </div>

          <p className="mt-1 text-center text-[12px] text-[#B0AB9C]">
            Not sure of the exact time? A close guess still works.
          </p>
        </div>
      </div>
    </>
  );
}
