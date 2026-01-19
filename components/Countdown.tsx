
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Arbitrary target date: 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center bg-white/10 p-4 rounded-2xl w-24 md:w-32 glass-card">
      <span className="text-3xl md:text-5xl font-extrabold text-[#f9bf29]">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm md:text-base text-gray-300 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <TimeUnit label="يوم" value={timeLeft.days} />
      <TimeUnit label="ساعة" value={timeLeft.hours} />
      <TimeUnit label="دقيقة" value={timeLeft.minutes} />
      <TimeUnit label="ثانية" value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
