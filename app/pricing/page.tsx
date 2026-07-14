import PricingCard from "@/components/pricingCard";

export default function Pricing() {
  return (
    <div className="mt-36 mb-30">
      <div className="flex flex-col items-center">
        <h4 className="text-2xl md:text-4xl font-medium tracking-wide">
          Pricing
        </h4>
        <div className="mt-2 flex items-center justify-center gap-2 text-[11px] md:text-[14px] text-neutral-600">
          <span>Free Astrology Tools</span>
          <span className="text-neutral-300">●</span>
          <span>Pay-as-you-go</span>
          <span className="text-neutral-300">●</span>
          <span>No Extra Charges</span>
        </div>
        <div className=" mt-6 mb-8 w-60 md:w-120 border border-neutral-300"></div>
        <PricingCard />
      </div>
    </div>
  );
}
