import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { storyData } from "../data/storyData";

/**
 * STORY PAGE - Our Love Story Timeline
 * Shows each milestone of your relationship journey
 */
const Story = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStory = storyData[currentIndex];
  const isLastSlide = currentIndex === storyData.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      navigate("/reasons");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-center gap-2 mb-2">
            {storyData.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-pink-500 w-8"
                    : index < currentIndex
                    ? "bg-pink-300 w-2"
                    : "bg-gray-300 w-2"
                }`}
                initial={false}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            {currentIndex + 1} of {storyData.length}
          </p>
        </div>

        {/* Story Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
          >
            {/* Image (if provided) */}
            {currentStory.image && (
              <motion.div
                className="mb-6 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              >
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </motion.div>
            )}

            {/* Emoji */}
            <motion.div
              className="text-6xl md:text-8xl text-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            ></motion.div>

            {/* Title */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-pink-600 text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {currentStory.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-gray-700 text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {currentStory.description}
            </motion.p>
          </motion.div>
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

          <motion.button
            onClick={handleNext}
            className="px-6 py-3 rounded-full font-semibold bg-pink-500 hover:bg-pink-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLastSlide ? "Continue →" : "Next →"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Story;
