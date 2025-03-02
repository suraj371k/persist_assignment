import React from "react";
import { items } from "./TeamData"; 

const Team = () => {
  return (
    <div className="bg-black min-h-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-3">
      By getting accepted you unlock access to our elite founder network.
      </h2>
      <p className="text-xl text-center font-[cursive] mb-8 font-semibold text-[#d2cfcf]">Join Persist and gain access to our 400+ millionaire and billionaire startup network.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-[#1a1a1a] text-white p-6 rounded-xl border border-purple-700 shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              className="w-24 h-24 object-cover mx-auto rounded-full"
              src={candidate.image}
              alt={candidate.name}
            />

            <h3 className="text-xl font-semibold text-purple-400 text-center mt-3">
              {candidate.name}
            </h3>
            <p className="text-lg text-gray-200 text-center">{candidate.role}</p>
            <p className="text-sm text-gray-400 text-center">{candidate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
