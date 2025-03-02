import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cp, header, reward1, reward3, reward4, reward5, reward6, reward7, reward8 } from "../assets/image";
import { HiSpeakerWave } from "react-icons/hi2";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa";

const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const cardData = [
    { text: "Ongoing Startupathon", icon: <HiSpeakerWave className="text-2xl" /> },
    { text: "Ask Questions", icon: <BsFillQuestionSquareFill className="text-2xl" /> },
    { text: "Verify Ideas", icon: <CiCircleCheck className="text-2xl" /> },
    { text: "Collaborate", icon: <FaHandshake className="text-2xl" /> },
  ];

  const rewardData = [
    {image: cp , text: "Competitive Salary"},
    {image: reward1 , text: "≥ $10,000 USD in Company Funding"},
    {image: reward3 , text: "≥ 10% Founder Equity"},
    {image: reward4 , text: "≥ $100,000 USD AWS Credits"},
    {image: reward5 , text: "$1,000 OpenAI Credits"},
    {image:  reward6 , text: "$120,000 USD IBM Cloud Credits"},
    {image: reward7 , text: "$2,500 Twilio Credits"},
    {image: reward8 , text: "$2,000 Airtable Credits"},
  ]

  return (
    <div className="bg-black min-h-screen w-full gap-y-6 flex flex-col items-center p-6 lg:p-10">
      <div className="mb-6">
        <img src={header} className="w-full brightness-50" alt="Startupathon" />
      </div>

      <div className="text-center text-white">
        <h1
          ref={headingRef}
          className="text-3xl lg:text-[6rem] font-bold z-30 bg-gradient-to-r from-purple-600 via-white to-purple-500 bg-clip-text text-transparent"
          style={{
            backgroundSize: "300% 100%",
            display: "inline-block",
          }}
        >
          Startupathon
        </h1>
        <p className="text-2xl lg:text-4xl font-semibold mt-2">
          Your Chance to Build, Lead, and Succeed as a Founder
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#03045e] flex w-full sm:w-[45vw] lg:w-[27vh] container mx-auto justify-between h-16 hover:bg-purple-700 transition duration-300 cursor-pointer px-6 py-3 rounded-lg  items-center text-white gap-2"
          >
            <p className="text-[#efeaea]">{card.text}</p>
            {card.icon}
          </div>
        ))}
      </div>

  <div className="flex flex-col text-white px-4">
  {/* Title */}
  <p className="text-2xl sm:text-3xl md:text-4xl text-center my-6 font-semibold">
    Startupathon Success Comes with Extraordinary Rewards
  </p>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
    {rewardData.map((item, index) => (
      <div
        key={index}
        className="bg-[#02031e] hover:bg-[#23243d] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-y-3 transition duration-300 min-h-[200px] w-full sm:w-[150px] md:w-[180px] lg:w-[200px] rounded-lg shadow-lg hover:scale-105"
      >
        <img className="w-[70px]" src={item.image} alt={`Reward ${index}`} />
        <p className="text-center text-sm sm:text-base">{item.text}</p>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Header;
