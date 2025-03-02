import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ image, title, description, funding, deadline }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const formattedDeadline = new Date(deadline).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })


  return (
    <div
      ref={cardRef}
      className='relative flex flex-col items-center justify-center w-full max-w-[400px] min-h-[420px] bg-[#1a1a1a] p-6 rounded-xl border border-purple-800 shadow-lg transition-transform duration-500 hover:scale-105 hover:bg-[black]'
    >
      {image && (
        <img className='w-32 h-32 object-cover mt-2 rounded-lg' src={image} alt={title} />
      )}

      <p className='text-2xl font-semibold text-center mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text'>
        {title}
      </p>

      <p className='font-semibold text-lg text-purple-700 text-center mt-2'>
        Initial Funding: ${funding}
      </p>

      <p className='text-gray-400 text-center mt-3 text-sm px-2'>{description}</p>

      <div className='flex flex-col items-center gap-3 mt-8 w-full'>
        <p className='font-medium  text-purple-700 text-lg'>Deadline approaching! Apply by {formattedDeadline}</p>
        <button className='relative z-10 bg-purple-700 text-white w-full py-3 rounded-lg hover:bg-purple-600 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg'>
          View Challenge Details
        </button>
      </div>

      <div className='absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-transparent via-purple-700/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-500'></div>
    </div>
  );
};

export default Card;
