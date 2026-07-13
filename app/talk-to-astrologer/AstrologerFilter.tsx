"use client";

import AstroCard from "@/components/astrologerProfile";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { RiSparklingLine } from "react-icons/ri";

const concerns = [
  { title: "All concerns", online: 3, color: "#5C574A" },
  { title: "KP", online: 1, color: "#4A9BB5" },
  { title: "Muhurtam", online: 0, color: "#3F5EA8" },
  { title: "Nadi", online: 0, color: "#8B7FC7" },
  { title: "Numerology", online: 1, color: "#C98A1D" },
  { title: "Prashna", online: 1, color: "#6B7A3F" },
  { title: "Tarot", online: 1, color: "#B5507A" },
  { title: "Vastu", online: 0, color: "#4F9B6E" },
  { title: "Vedic", online: 2, color: "#B5551F" },
];

const languages = [
  "All languages",
  "English",
  "Hindi",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Tamil",
  "Telugu",
];

const sortOptions = [
  "Recommended",
  "Top rated",
  "Most reviewed",
  "Most experienced",
  "Price low to high",
];

export default function AstrologerFilters({
  resultCount = 5,
}: {
  resultCount?: number;
}) {
  const [activeConcern, setActiveConcern] = useState("All concerns");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [sort, setSort] = useState(sortOptions[0]);
  const [search, setSearch] = useState("");

  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl border border-accent/40 bg-accent-bg/40 p-5 md:p-6 mb-8">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent-bg flex items-center justify-center flex-shrink-0">
            <RiSparklingLine className="text-accent text-xl" />
          </div>

          <div>
            <p className="font-semibold text-[16px] text-foreground">
              Not sure who to pick?
            </p>

            <p className="text-[13px] text-text-secondary mt-1">
              Tell us what's on your mind and we'll narrow the list to the
              right astrologer.
            </p>
          </div>
        </div>

        <button className="w-full sm:w-fit px-5 py-2.5 rounded-xl bg-accent text-white text-[14px] font-medium hover:bg-accent-hover cursor-pointer whitespace-nowrap">
          Find my astrologer
        </button>
      </div>

      <p className="text-[11px] tracking-widest text-accent font-medium mb-3">
        WHAT ARE YOU LOOKING FOR?
      </p>

      <div className="hidden lg:flex flex-wrap gap-2 mb-4">
        {concerns.map((concern) => (
          <button
            key={concern.title}
            onClick={() => setActiveConcern(concern.title)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-left cursor-pointer transition-colors ${
              activeConcern === concern.title
                ? "border-accent bg-accent-bg/40"
                : "border-border-strong bg-card hover:bg-surface"
            }`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: concern.color }}
            />

            <span className="flex flex-col">
              <span className="text-[14px] font-medium text-foreground">
                {concern.title}
              </span>

              <span className="text-[11px] text-text-muted">
                {concern.online} online
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-3 mb-4">
        <div className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-xl border border-border-strong bg-card">
          <HiOutlineSearch className="text-text-muted text-lg flex-shrink-0" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or specialty..."
            className="w-full bg-transparent text-[14px] text-foreground outline-none placeholder:text-text-muted"
          />
        </div>

        <div className="relative w-full lg:w-auto">
          <select
            value={activeConcern}
            onChange={(e) => setActiveConcern(e.target.value)}
            className="w-full appearance-none rounded-xl bg-neutral-100 border border-border-strong px-4 py-2.5 pr-10 text-[14px] font-medium text-foreground outline-none cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {concerns.map((concern) => (
              <option key={concern.title} value={concern.title}>
                {concern.title}
              </option>
            ))}
          </select>

          <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>

        <button
          onClick={() => setOnlineOnly(!onlineOnly)}
          className={`w-full lg:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-[14px] font-medium cursor-pointer transition-colors ${
            onlineOnly
              ? "border-success bg-success-bg text-success"
              : "border-border-strong bg-card text-foreground hover:bg-surface"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              onlineOnly ? "bg-success" : "bg-text-muted"
            }`}
          />

          Online now
        </button>

        <div className="relative w-full lg:w-auto">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border-strong px-4 py-2.5 pr-10 text-[14px] font-medium text-foreground outline-none cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>

        <div className="relative w-full lg:w-auto">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full appearance-none rounded-xl border border-border-strong px-4 py-2.5 pr-10 text-[14px] font-medium text-foreground outline-none cursor-pointer hover:bg-neutral-200 transition-colors"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                Sort: {option}
              </option>
            ))}
          </select>

          <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        </div>
      </div>

      <p className="text-[14px] text-text-secondary mb-6">
        {resultCount} astrologers
      </p>

      <AstroCard Balance={14}/>
    </div>
  );
}