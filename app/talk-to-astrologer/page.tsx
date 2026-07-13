import AstrologerFilters from "./AstrologerFilter";

export default function TalkToAstrologer() {
  return (
    <div className="mt-36">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-40">
        <h4 className="text-3xl md:text-[40px] font-semibold tracking-normal">
          Talk To Your Astrologer
        </h4>

        <p className="mt-3 max-w-xl text-base md:text-[20px] text-neutral-600 leading-relaxed">
          Pick a real Vedic astrologer, start a chat, voice or video consult in
          seconds, and pay only for the minutes you use.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[13px] md:text-[14px] text-neutral-800">
          <div className="flex items-center gap-2">
            <span>●</span>
            <span>All Astrologers Verified</span>
          </div>

          <div className="flex items-center gap-2">
            <span>●</span>
            <span>100% Private</span>
          </div>

          <div className="flex items-center gap-2">
            <span>●</span>
            <span>Verified Experts</span>
          </div>
        </div>

        <div className="mt-6 mb-8 h-px w-full bg-neutral-300" />
      </div>

      <AstrologerFilters resultCount={3} />
      
    </div>
  );
}