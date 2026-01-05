import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { CountdownTime } from "../types";

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

/**
 * Countdown Timer Component
 * Displays days, hours, minutes, and seconds until birthday
 */
const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        if (onComplete) onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isFinished: false,
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg min-w-17.5 md:min-w-25"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-5xl font-bold text-pink-600"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
