import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { useChallenges } from '../store/useChallenge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Challenges = () => {
  const { challenges, fetchChallenges, loading, error } = useChallenges();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    fetchChallenges();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      gridRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, [challenges]);

  const visibleChallenges = challenges.filter(challenge => challenge.visible);

  return (
    <div className='text-white min-h-screen bg-black flex flex-col items-center p-10'>
      <div ref={sectionRef} className='text-center'>
        <h3 className='text-5xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text animate-fadeIn'>
          Ongoing Startupathon Challenges
        </h3>
        <p className='text-xl mt-5 font-[cursive] text-gray-400 max-w-2xl mx-auto'>
          Start your journey—tackle live challenges, earn equity, and lead the future.
        </p>
      </div>

      {loading && (
        <p className='text-yellow-500 text-lg mt-6 animate-pulse'>Loading challenges...</p>
      )}

      {error && <p className='text-red-500 text-lg mt-6'>{error}</p>}

      {!loading && !error && (
        <div
          ref={gridRef}
          className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-10 px-4 w-full max-w-6xl'
        >
          {visibleChallenges.length > 0 ? (
            visibleChallenges.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                funding={item.funding}
                description={item.description}
                deadline={item.deadline}
              />
            ))
          ) : (
            <p className='text-gray-400 text-lg col-span-full text-center'>
              No challenges available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Challenges;
