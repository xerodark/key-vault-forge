
import React from "react";
import { Star, Shield, Users, BarChart, Clock, DollarSign } from "lucide-react";

const features = [
  {
    title: "Security You Can Trust",
    description:
      "Our Solana-based vault leverages advanced cryptography and non-custodial access for total fund protection.",
    icon: <Shield size={30} className="text-crypto-orange" />,
    bg: "bg-gradient-to-br from-[#23283b] to-[#1a1f2c]",
    row: "row-span-2",
  },
  {
    title: "Industry-Leading Yields",
    description:
      "Lock your funds for 6 or 12 months and earn yields higher than a typical savings account.",
    icon: <DollarSign size={28} className="text-green-400" />,
    bg: "bg-gradient-to-br from-green-900/80 to-green-700/40",
    col: "col-span-2",
  },
  {
    title: "Instant Access",
    description:
      "Deposit anytime, withdraw when your lock-in ends. All fully on-chain, 24/7.",
    icon: <Clock size={24} className="text-cyan-300" />,
    bg: "bg-gradient-to-br from-purple-800 to-crypto-gray-dark",
  },
  {
    title: "For All Investors",
    description:
      "Onboard in minutes. Our platform is simple, inclusive, and built for both newcomers and pros.",
    icon: <Users size={28} className="text-violet-300" />,
    bg: "bg-gradient-to-br from-[#363159]/80 to-[#22243c]/90",
  },
  {
    title: "Realtime Analytics",
    description:
      "Track vault performance and returns with beautiful, transparent charts and insights.",
    icon: <BarChart size={25} className="text-blue-300" />,
    bg: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
  },
];

const FeatureBentoGrid = () => (
  <section className="max-w-6xl w-full mx-auto relative px-4 md:px-0 -mt-12 z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-6 md:gap-8">
      {/* Large security card */}
      <div className={`rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start md:col-span-2 ${features[0].bg} ${features[0].row} animate-fade-in`}>
        <div>{features[0].icon}</div>
        <h3 className="text-xl font-bold text-white mt-4 mb-2">{features[0].title}</h3>
        <p className="text-crypto-gray-light text-base mb-2">{features[0].description}</p>
      </div>
      {/* Yield card */}
      <div className={`rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start ${features[1].bg} ${features[1].col} animate-fade-in delay-150`}>
        {features[1].icon}
        <h3 className="text-xl font-bold text-white mt-4 mb-2">{features[1].title}</h3>
        <p className="text-crypto-gray-light text-base">{features[1].description}</p>
      </div>
      {/* Small cards */}
      <div className={`rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start ${features[2].bg} animate-fade-in delay-200`}>
        {features[2].icon}
        <h3 className="text-lg font-semibold text-white mt-3 mb-2">{features[2].title}</h3>
        <p className="text-crypto-gray-light text-sm">{features[2].description}</p>
      </div>
      <div className={`rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start ${features[3].bg} animate-fade-in delay-300`}>
        {features[3].icon}
        <h3 className="text-lg font-semibold text-white mt-3 mb-2">{features[3].title}</h3>
        <p className="text-crypto-gray-light text-sm">{features[3].description}</p>
      </div>
      <div className={`rounded-2xl p-7 shadow-lg flex flex-col justify-between items-start ${features[4].bg} animate-fade-in delay-500`}>
        {features[4].icon}
        <h3 className="text-lg font-semibold text-white mt-3 mb-2">{features[4].title}</h3>
        <p className="text-crypto-gray-light text-sm">{features[4].description}</p>
      </div>
    </div>
  </section>
);

export default FeatureBentoGrid;
