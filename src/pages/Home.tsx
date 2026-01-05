import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CountdownTimer from "../components/CountdownTimer";
import ConfettiEffect from "../components/ConfettiEffect";

/**
 * HOME PAGE - Birthday Countdown
 * Shows countdown timer and unlocks button when countdown finishes
 */
const Home = () => {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Set your girlfriend's birthday here!
  // Format: new Date('YYYY-MM-DD HH:MM:SS')
  // For testing, you can set a date in the near future
  const birthdayDate = new Date("2026-01-04 00:00:00");

  const handleCountdownComplete = () => {
    setIsUnlocked(true);
    setShowConfetti(true);
  };

  const handleOpenSurprise = () => {
    navigate("/story");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ConfettiEffect trigger={showConfetti} />

      <motion.div
        className="text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Countdown Timer */}
        <div className="mb-20">
          <CountdownTimer
            targetDate={birthdayDate}
            onComplete={handleCountdownComplete}
          />
        </div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Countdown ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Something special is waiting for you ❤️
        </motion.p>

        {/* Lock/Unlock Button */}
        <motion.button
          onClick={handleOpenSurprise}
          disabled={!isUnlocked}
          className={`px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg transition-all ${
            isUnlocked
              ? "bg-pink-500 hover:bg-pink-600 text-white cursor-pointer transform hover:scale-105"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          whileHover={isUnlocked ? { scale: 1.05 } : {}}
          whileTap={isUnlocked ? { scale: 0.95 } : {}}
          animate={
            isUnlocked
              ? {
                  boxShadow: [
                    "0px 0px 0px rgba(236, 72, 153, 0)",
                    "0px 0px 20px rgba(236, 72, 153, 0.5)",
                    "0px 0px 0px rgba(236, 72, 153, 0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {isUnlocked ? <>Open My Surprise 🎁</> : <>🔒 Locked</>}
        </motion.button>

        {/* Helper text */}
        {!isUnlocked && (
          <motion.p
            className="text-sm text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Wait for the countdown to finish...
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
