"use client";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SkyMarquee from "./skyMarquee";
import { easeOut, motion } from "motion/react";
import WalletDropdown from "./walletDropDown";
import Link from "next/link";

const navbarItems = [
  {
    title: "Predictions",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          stroke="none"
          d="M12 4l1.7 4.6L18 10l-4.3 1.4L12 16l-1.7-4.6L6 10l4.3-1.4z"
        ></path>
        <path
          fill="currentColor"
          stroke="none"
          d="M17.6 14l.55 1.6 1.6.55-1.6.55-.55 1.6-.55-1.6-1.6-.55 1.6-.55z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Your Chart",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="1.5"></rect>
        <path d="M12 3.5 20.5 12 12 20.5 3.5 12z"></path>
      </svg>
    ),
  },
  {
    title: "Daily Energies",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 18.5h17M7 18.5a5 5 0 0 1 10 0"></path>
        <path d="M12 3.8v3M5.4 8.4l1.5 1.5M18.6 8.4l-1.5 1.5M2.5 14.2h2.2M19.3 14.2h2.2"></path>
      </svg>
    ),
  },
  {
    title: "Panchang",
    svg: (
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.8"></circle>
        <path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"></path>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isloggedIn, setisloggedIN] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 z-999 w-screen h-16 bg-neutral-100 border-b border-neutral-300 flex items-center justify-between px-6 sm:px-8">
        <Link
        href={"/"}
        className="font-bold tracking-wide text-xl">
          <span className="px-2.5 py-1 rounded-lg bg-black font-sans text-white mr-2">
            R
          </span>
          RahuNow
        </Link>

        <div className="hidden md:flex gap-4 text-[14px] text-neutral-600">
          {navbarItems.map((item) => (
            <h6
              key={item.title}
              className="cursor-pointer flex items-center gap-1 hover:bg-neutral-300/60 rounded-lg px-2 py-1"
            >
              {item.svg}
              {item.title}
            </h6>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center">
          {isloggedIn && <WalletDropdown />}

          <Link 
          href={"/talk-to-astrologer"}
          className="px-2 py-1 bg-accent rounded-lg text-white flex items-center gap-1 font-medium text-[14px] tracking-wide cursor-pointer hover:bg-accent-hover">
            <IoCallOutline className="text-[15px]" />
            Talk To Astrologer
          </Link>

          {isloggedIn ? (
            <button className="size-8 rounded-full bg-accent-text-on-tint text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-neutral-700">
              PS
            </button>
          ) : (
            <button
              onClick={() => setisloggedIN(true)}
              className="text-[14px] px-2 py-1 border border-neutral-400 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center gap-3">
          {isloggedIn ? (
            <WalletDropdown />
          ) : (
            <button
              onClick={() => setisloggedIN(true)}
              className="px-2 py-1 border border-neutral-400 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer text-[14px]"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-700 cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{
            scale: 0.98,
            opacity: 0,
            filter: "blur(4px)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            ease: easeOut,
          }}
          className="fixed top-16 left-0 z-999 w-screen md:hidden bg-white border-b border-neutral-300 px-6 py-4 flex flex-col gap-2 origin-top-right"
        >
          {navbarItems.map((item) => (
            <h6
              key={item.title}
              onClick={() => setOpen(false)}
              className="cursor-pointer flex items-center gap-2 hover:bg-neutral-300/60 rounded-lg px-2 py-2 text-[14px] text-neutral-600"
            >
              {item.svg}
              {item.title}
            </h6>
          ))}
          <Link
          href={"/talk-to-astrologer"}
            onClick={() => setOpen(false)}
            className="mt-2 px-2 py-2 bg-accent rounded-lg text-white flex items-center justify-center gap-1 font-medium text-[14px] tracking-wide cursor-pointer hover:bg-accent-hover"
          >
            <IoCallOutline className="text-[15px]" />
            Talk To Astrologer
          </Link>
        </motion.div>
      )}

      <SkyMarquee />
    </>
  );
}