"use client";

import { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const formatDate = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 8);

  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 4)
    return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;

  return `${numbers.slice(0, 2)}-${numbers.slice(2, 4)}-${numbers.slice(
    4,
    8
  )}`;
};

const formatTime = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 4);

  if (numbers.length <= 2) return numbers;

  return `${numbers.slice(0, 2)}:${numbers.slice(2)}`;
};

const isValidDate = (date: string) => {
  if (!/^\d{2}-\d{2}-\d{4}$/.test(date)) return true;

  const [day, month, year] = date.split("-").map(Number);

  const d = new Date(year, month - 1, day);

  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
};

const isValidTime = (time: string) => {
  if (!/^\d{2}:\d{2}$/.test(time)) return true;

  const [hours, minutes] = time.split(":").map(Number);

  return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
};

export default function BirthReadingForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="w-full flex items-center justify-center mt-16 mb-10 px-2">
      <div className="w-full max-w-95 rounded-3xl bg-card border border-neutral-300 px-6 pt-4 pb-4">
        <div className="flex flex-col items-center">
          <p className="font-medium text-md md:text-xl text-neutral-800 font-serif">
            Get Your Free Reading
          </p>
          <p className="text-[10px] md:text-[11px] text-neutral-400">
            Enter Your Details
          </p>
        </div>

        {/* Name */}
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

        {/* Date & Time */}
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {/* Date */}
          <div>
            <label className="block text-[10px] md:text-[11px] tracking-wider text-neutral-600 mb-1 ml-1">
              DATE OF BIRTH
            </label>

            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                maxLength={10}
                value={dob}
                onChange={(e) => setDob(formatDate(e.target.value))}
                placeholder="DD-MM-YYYY"
                className={`w-full rounded-xl bg-[#FBFAF7] pl-4 pr-10 py-2 text-[15px] text-[#1C1B19] outline-none transition-colors placeholder:text-[12px] md:placeholder:text-[13px]
                ${
                  isValidDate(dob)
                    ? "border border-neutral-300 focus:border-accent/60"
                    : "border border-red-500"
                }`}
              />

              <SlCalender
                size={17}
                strokeWidth={1.75}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-[10px] md:text-[11px] tracking-widest text-neutral-600 mb-1 ml-1">
              TIME OF BIRTH
            </label>

            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                maxLength={5}
                value={tob}
                onChange={(e) => setTob(formatTime(e.target.value))}
                placeholder="HH:MM"
                className={`w-full rounded-xl bg-[#FBFAF7] pl-4 pr-10 py-2 text-[15px] text-[#1C1B19] outline-none transition-colors placeholder:text-[12px] md:placeholder:text-[13px]
                ${
                  isValidTime(tob)
                    ? "border border-neutral-300 focus:border-accent/60"
                    : "border border-red-500"
                }`}
              />

              <CiClock1
                size={17}
                strokeWidth={1.75}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* City */}
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

        {/* Button */}
        <div className="flex justify-center">
          <button
            type="button"
            disabled={!isValidDate(dob) || !isValidTime(tob)}
            className="flex gap-1 items-center mt-10 w-fit rounded-xl bg-accent py-2 px-3 text-[15px] font-medium text-[#F5F3EE] font-sans tracking-tight hover:bg-accent-hover transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Show me my reading
            <FaArrowRight className="size-3" />
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
  );
}