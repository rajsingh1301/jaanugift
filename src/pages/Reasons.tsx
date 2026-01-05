import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reasonsData } from "../data/reasonsData";
import ConfettiEffect from "../components/ConfettiEffect";

/**
 * REASONS PAGE - Why I Love You
 * Shows reasons one by one, ends with birthday message
 */
const Reasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

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
    <div className="min-h-screen flex items-center justify-center p-4">
      <ConfettiEffect trigger={showConfetti} />

      <div className="max-w-2xl w-full">
        {/* Header */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-pink-600 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Why I Love You
        </motion.h1>

        {/* Progress */}
        <div className="mb-8">
          <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
            <motion.div
              className="bg-pink-500 h-full"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  ((currentIndex + 1) / (reasonsData.length + 1)) * 100
                }%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            {isLastCard
              ? "Final Message"
              : `Reason ${currentIndex + 1} of ${reasonsData.length}`}
          </p>
        </div>

        {/* Reason Card / Final Card */}
        <AnimatePresence mode="wait">
          {!isLastCard ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl min-h-75 flex items-center justify-center"
            >
              <p className="text-xl md:text-3xl text-gray-800 text-center font-medium leading-relaxed">
                {reasonsData[currentIndex].text}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-linear-to-br from-pink-200 to-purple-200 rounded-3xl p-8 md:p-12 shadow-xl text-center"
            >
              <motion.div
                className="text-6xl md:text-8xl mb-6"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                🎂
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">
                Happy Birthday Jaanu! ❤️
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Thank you for being you. Here's to many more beautiful years
                together!
              </p>

              <motion.div
                className="text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Made with ❤️ by Your Love
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`px-6 py-3 rounded-full font-semibold ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-pink-400 hover:bg-pink-500 text-white"
            }`}
            whileHover={currentIndex > 0 ? { scale: 1.05 } : {}}
            whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
          >
            ← Previous
          </motion.button>

          {!isLastCard && (
            <motion.button
              onClick={handleNext}
              className="px-6 py-3 rounded-full font-semibold bg-pink-500 hover:bg-pink-600 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next →
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
