import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Cards = [
  {
    title: "Free Plan",
    subheading:
      "Every calculation tool, no cost, no account. Just enter your birth details and go",
    buttonText: "Your Current Plan",
    items: [
      " Full birth chart & predictions",
      " Daily panchang & energies",
      " Numerology reports",
      " No sign-up required",
      " Unlimited use, always free",
    ],
  },
  {
    title: "Pay As You Go",
    subheading:
      "Talk to a verified astrologer by chat, voice, or video — billed per second, stop whenever you want",
    buttonText: "Talk To An Astrologer",
    items: [
      " Chat from ₹10/min",
      " Voice calls from ₹16/min",
      " Video calls from ₹22/min",
      " Billed per second, not rounded up",
      " End any session instantly",
      " Rate shown upfront on every profile",
    ],
  },
  {
    title: "Fixed Packages",
    subheading:
      "Set-length sessions for specific needs, like matchmaking or muhurtam — one price, no surprises",
    buttonText: "Browse Packages",
    items: [
      " Fixed price, shown upfront",
      " Typically ₹249 - ₹799",
      " Paid from wallet at booking",
      " Full refund if cancelled or declined",
      " No per-minute tracking needed",
    ],
  },
];

export default function PricingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {Cards.map((cardDetails) => (
        <div className="w-76 md:w-82 h-fit bg-card rounded-3xl">
          <div className="h-48 w-70 md:w-76 mx-3 my-3 bg-background/80 rounded-2xl shadow-xl px-6 py-4">
            <h6 className="text-xl md:text-2xl font-medium text-neutral-800 tracking-wide">{cardDetails.title}</h6>
            <p className="mt-1 text-[14px] text-neutral-500">{cardDetails.subheading}</p>
            <button className={`mt-5 py-2 px-4 text-[14px] md:text-[16px] font-medium text-white rounded-3xl ${(cardDetails.title == "Free Plan") ? "bg-accent": "bg-neutral-800 text-white"}`}>{cardDetails.buttonText}</button>
          </div>
          <ul className="p-6">
            {cardDetails.items.map((features)=>(
            <li className="flex items-center gap-1 py-1">
              <IoMdCheckmarkCircleOutline className="text-green-500" />
              {features}
            </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
