'use client';
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const CtaSection = ({ count, icon, title }) => {
  const [key, setKey] = useState(0); // Key to force remount
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKey((prevKey) => prevKey + 1); // Change key to remount CountUp
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className='flex flex-col items-start gap-5 justify-center text-center'>
        <div className='text-6xl text-white'>{icon}</div>
        <h1 className='text-5xl font-serif text-left font-bold text-white min-w-[180px]'>
          {typeof count === 'string' && count.includes('/') ? (
            <>
              <CountUp
                key={`${key}-numerator`}
                end={Number(count.split('/')[0])}
                start={0}
                duration={2.5}
              />
              /
              <CountUp
                key={`${key}-denominator`}
                end={Number(count.split('/')[1])}
                start={0}
                duration={2.5}
              />
            </>
          ) : (
            <CountUp key={key} end={count} start={0} duration={2.5} />
          )}
          +
        </h1>
        <p className='text-lg font-bold text-white'>{title}</p>
      </div>
    </div>
  );
};

export default CtaSection;
