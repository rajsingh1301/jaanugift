import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { reasonsData } from "../data/reasonsData";
import ConfettiEffect from "../components/ConfettiEffect";
import InfiniteScrollBackground from "../components/InfiniteScrollBackground";

/**
 * REASONS PAGE - Why I Love You
 * Shows reasons one by one, ends with birthday message
 */
const Reasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const isLastCard = currentIndex === reasonsData.length;

  const handleNext = () => {
    if (currentIndex < reasonsData.length) {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === reasonsData.length - 1) {
        setShowConfetti(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-transparent">
      <InfiniteScrollBackground />
      <ConfettiEffect trigger={showConfetti} />

      <div className="max-w-2xl w-full relative z-30">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-10 -mt-20 drop-shadow-sm"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-primary-dark)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Why I Love You
        </motion.h1>

        {/* Progress */}
        <div className="mb-8 p-1 glass rounded-full">
          <div className="bg-transparent h-3 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, var(--color-primary), var(--color-primary-dark))" }}
              initial={{ width: 0 }}
              animate={{
                width: `${((currentIndex + 1) / (reasonsData.length + 1)) * 100
                  }%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-xs font-medium mt-2 tracking-widest uppercase" style={{ color: "var(--color-text-light)" }}>
            {isLastCard
              ? "Final Message"
              : `Reason ${currentIndex + 1} of ${reasonsData.length}`}
          </p>
        </div>

        {/* Card and Navigation Layout */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`p-4 rounded-full font-semibold flex-shrink-0 text-2xl shadow-md transition-all ${currentIndex === 0
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-white text-pink-400 hover:text-pink-600 hover:shadow-lg"
              }`}
            whileHover={currentIndex > 0 ? { scale: 1.1 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
          >
            ←
          </motion.button>

          {/* Reason Card / Final Card */}
          <AnimatePresence mode="wait">
            {!isLastCard ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                className="glass romantic-card p-8 md:p-12 min-h-[300px] flex items-center justify-center flex-1"
              >
                <p
                  className="text-2xl md:text-4xl text-center font-medium leading-relaxed italic"
                  style={{ color: "var(--color-text-main)", fontFamily: "var(--font-serif)" }}
                >
                  "{reasonsData[currentIndex].text}"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 md:p-12 text-center flex-1 border-2 border-pink-200"
                style={{ background: "rgba(255, 255, 255, 0.8)" }}
              >
                <motion.div
                  className="text-6xl md:text-8xl mb-6"
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  🎂
                </motion.div>

                <h2
                  className="text-3xl md:text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-primary-dark)" }}
                >
                  Happy Birthday Jaanu! ❤️
                </h2>

                <p
                  className="text-lg md:text-xl mb-8 mt-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-text-main)" }}
                >
                  Thank you for everything you are and all the joy you bring
                  into my life. Here's to many more beautiful moments together.
                  I love you so much! 💕
                </p>

                <motion.div
                  className="text-sm font-medium tracking-widest uppercase mb-6"
                  style={{ color: "var(--color-text-light)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Made with ❤️ by Your Bubu 👦🏻
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.button
                    onClick={() => navigate('/letter')}
                    className="mt-8 relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className=" absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="relative px-8 py-4 bg-white rounded-full leading-none flex items-center divide-x divide-gray-200 shadow-xl border border-pink-100">
                      <span className="flex items-center space-x-3">
                        <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💌</span>
                        <span className="text-pink-600 font-bold uppercase tracking-wider text-sm pr-4">Read My Letter</span>
                      </span>
                      <span className="pl-4 text-pink-400 group-hover:text-pink-600 transition-colors uppercase font-bold text-xs tracking-widest">
                        Click to Open
                      </span>
                    </div>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {!isLastCard && (
            <motion.button
              onClick={handleNext}
              className="p-4 rounded-full font-semibold btn-primary flex-shrink-0 text-2xl shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          )}
          {isLastCard && <div className="w-16 flex-shrink-0"></div>}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
