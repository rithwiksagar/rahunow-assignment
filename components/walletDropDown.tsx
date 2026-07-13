"use client"
import { easeOut, motion } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { CiWallet } from "react-icons/ci"

const quickAmounts = [100, 200, 300]

export default function WalletDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-1 border border-neutral-400 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer text-[14px] font-medium"
      >
        <CiWallet className="size-4" />
        Wallet
      </button>

      {open && (
        <motion.div 
        initial={{
            opacity:0,
            scale: 0.98,
            filter: "blur(4px)"
        }}
        animate={{
            opacity:1,
            scale:1,
            filter: "blur(0px)"
        }}
        transition={{
            duration: 0.3,
            ease: easeOut
        }}
        className="absolute right-0 mt-2 w-64 rounded-2xl border border-neutral-300 bg-neutral-100 shadow-lg p-4 z-50 origin-top-right">
          <p className="text-[12px] text-neutral-500 mb-1">Wallet balance</p>
          <p className="text-2xl font-medium text-neutral-900 mb-4">₹ 14</p>

          <button className="w-full h-10 rounded-lg bg-accent text-white text-[13px] font-medium hover:bg-accent-hover cursor-pointer mb-3">
            Add cash
          </button>

          <div className="flex gap-2">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                className="flex-1 h-8 rounded-lg border border-neutral-300 text-[12px] text-neutral-700 hover:bg-neutral-100 cursor-pointer"
              >
                ₹{amount}
              </button>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-accent underline cursor-pointer hover:text-accent-hover">Refund & Cancellation Policy</p>
        </motion.div>
      )}
    </div>
  )
}