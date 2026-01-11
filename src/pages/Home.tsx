import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CountdownTimer from "../components/CountdownTimer";
import ConfettiEffect from "../components/ConfettiEffect";
import InfiniteScrollBackground from "../components/InfiniteScrollBackground";

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
    // Trigger background music to play
    window.dispatchEvent(new CustomEvent("startBackgroundMusic"));
    navigate("/story");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-transparent">
      {/* Infinite Scrolling Background */}
      <InfiniteScrollBackground />

      <ConfettiEffect trigger={showConfetti} />

      <motion.div
        className="text-center max-w-2xl w-full relative z-30"
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
          className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-sm"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-primary-dark)" }}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Countdown ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-3xl font-light mb-12"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-main)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Something special is waiting for you...
        </motion.p>

        {/* Lock/Unlock Button */}
        <motion.button
          onClick={handleOpenSurprise}
          disabled={!isUnlocked}
          className={`px-10 py-5 rounded-full text-xl md:text-2xl font-semibold shadow-lg transition-all ${
            isUnlocked
              ? "btn-primary"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          whileHover={isUnlocked ? { scale: 1.05 } : {}}
          whileTap={isUnlocked ? { scale: 0.95 } : {}}
          animate={
            isUnlocked
              ? {
                  boxShadow: [
                    "0px 0px 0px rgba(236, 72, 153, 0)",
                    "0px 0px 30px rgba(255, 143, 163, 0.6)",
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
