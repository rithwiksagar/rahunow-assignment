"use client";

import { CiStar, CiWallet } from "react-icons/ci";

const astrologers = [
  {
    id: 1,
    initials: "RS",
    name: "Rajeev Sharma",
    specialty: "Vedic, Business",
    rating: 4.9,
    reviews: "3.4k",
    experience: 22,
    languages: "Hindi, English",
    present: "online",
    chat: 18,
    voice: 32,
    video: 50,
  },
  {
    id: 2,
    initials: "AJ",
    name: "Anjali Joshi",
    specialty: "Tarot, Love",
    rating: 4.8,
    reviews: "2.1k",
    experience: 12,
    languages: "English, Telugu",
    present: "online",
    chat: 15,
    voice: 28,
    video: 45,
  },
  {
    id: 3,
    initials: "RV",
    name: "Rahul Verma",
    specialty: "Numerology",
    rating: 4.7,
    reviews: "1.5k",
    experience: 9,
    languages: "Hindi",
    present: "Away",
    chat: 12,
    voice: 20,
    video: 35,
  },
];

export default function AstroCard({ Balance }: { Balance: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-20">
      {astrologers.map((astrologer) => (
        <div
          key={astrologer.id}
          className="w-full max-w-[340px] mx-auto bg-card rounded-3xl py-0.5"
        >
          <div className="mx-3 my-3 rounded-2xl bg-background/80 px-5 md:px-6 py-4 h-fit pb-2">
            <div className="flex justify-between items-start gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-11 h-11 flex items-center justify-center rounded-full bg-accent text-white text-[14px] flex-shrink-0">
                  {astrologer.initials}
                </span>

                <div className="min-w-0">
                  <h6 className="text-base md:text-lg text-neutral-800 font-medium truncate">
                    {astrologer.name}
                  </h6>

                  <p className="text-[12px] font-medium text-accent truncate">
                    {astrologer.specialty}
                  </p>
                </div>
              </div>

              <span
                className={`text-[12px] md:text-[13px] border px-2 py-1 rounded-2xl whitespace-nowrap ${
                  astrologer.present == "online"
                    ? "text-green-500 border-green-500"
                    : "text-neutral-500 border-neutral-400"
                }`}
              >
                ● {astrologer.present}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-neutral-600">
                <p className="flex items-center gap-1">
                  <CiStar className="text-[18px] text-yellow-500" />
                  {astrologer.rating} ({astrologer.reviews})
                </p>

                <p>{astrologer.experience} years</p>
              </div>

              <div className="mt-2">
                <p className="text-[14px] text-neutral-600">
                  Speaks : {astrologer.languages}
                </p>

                {Balance < astrologer.chat && (
                  <div className="flex items-center gap-1 mt-3 rounded-xl bg-orange-800/80 px-3 py-2 text-[13px] text-white">
                    <CiWallet className="size-4" /> Balance {Balance}. Top up to
                    chat
                  </div>
                )}

              </div>
            </div>
          </div>

          { astrologer.present == "online" ? <div className="px-4 pb-4 flex flex-wrap gap-2">
            <button className="flex-1 min-w-[90px] px-3 py-2 rounded-xl bg-background text-black text-[14px] cursor-pointer hover:bg-accent transition-colors">
              Chat ₹{astrologer.chat}/min
            </button>

            <button className="flex-1 min-w-[90px] px-3 py-2 rounded-xl bg-background text-black text-[14px] cursor-pointer hover:bg-accent transition-colors">
              Voice ₹{astrologer.voice}/min
            </button>

            <button className="flex-1 min-w-[90px] px-3 py-2 rounded-xl bg-accent text-white text-[14px] cursor-pointer hover:bg-accent transition-colors">
              Video ₹{astrologer.video}/min
            </button>
          </div> :
          <div>
          <div className="min-w-[90px] px-3 py-2 rounded-xl border border-neutral-200 text-neutral-600 mx-6 cursor-pointer">
            Notify Me When Free
        </div>
          <div className="mt-4 min-w-[90px] px-3 py-2 rounded-xl border bg-accent text-white mx-6 cursor-pointer">
            Book For Later
        </div>
        
        </div>}
        </div>
      ))}
    </div>
  );
}
