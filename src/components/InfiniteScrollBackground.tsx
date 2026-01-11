import { motion } from "framer-motion";

import photo1 from '../assets/scroll-images/photo1.jpg';
import photo2 from '../assets/scroll-images/photo2.jpg';
import photo3 from '../assets/scroll-images/photo3.jpg';
import photo4 from '../assets/scroll-images/photo4.jpg';
import photo5 from '../assets/scroll-images/photo5.jpg';
import photo6 from '../assets/scroll-images/photo6.jpg';
import photo7 from '../assets/scroll-images/photo7.jpg';
import photo8 from '../assets/scroll-images/photo8.jpg';
import photo9 from '../assets/scroll-images/photo9.jpg';
import photo10 from '../assets/scroll-images/photo10.jpg';
import photo11 from '../assets/scroll-images/photo11.jpg';

/**
 * Infinite Scrolling Background Component
 * Creates a smooth horizontal scrolling effect with placeholder cards
 * These cards can later be replaced with images
 */

// Your beautiful photos together! 📸
const imageCards = [
  { id: 1, image: photo1, alt: "Our memory 1" },
  { id: 2, image: photo2, alt: "Our memory 2" },
  { id: 3, image: photo3, alt: "Our memory 3" },
  { id: 4, image: photo4, alt: "Our memory 4" },
  { id: 5, image: photo5, alt: "Our memory 5" },
  { id: 6, image: photo6, alt: "Our memory 6" },
  { id: 7, image: photo7, alt: "Our memory 7" },
  { id: 8, image: photo8, alt: "Our memory 8" },
  { id: 9, image: photo9, alt: "Our memory 9" },
  { id: 10, image: photo10, alt: "Our memory 10" },
  { id: 11, image: photo11, alt: "Our memory 11" },
];

const InfiniteScrollBackground = () => {
  // Duplicate cards to create seamless loop
  const allCards = [...imageCards, ...imageCards];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Soft romantic overlay for readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(135deg, rgba(255, 240, 245, 0.6), rgba(255, 245, 230, 0.6))",
          backdropFilter: "blur(2px)"
        }}
      />

      {/* Scrolling container */}
      <div className="relative w-full h-full opacity-60">
        {/* First row - scrolling left */}
        <motion.div
          className="absolute top-[5%] flex gap-8"
          animate={{
            x: [0, -1920], // Adjust based on total width
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allCards.map((card, index) => (
            <div
              key={`row1-${index}`}
              className="rounded-2xl shadow-lg overflow-hidden min-w-[240px] h-[180px] transform rotate-3 border-4 border-white"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>

        {/* Second row - scrolling right */}
        <motion.div
          className="absolute top-[30%] flex gap-8"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allCards.map((card, index) => (
            <div
              key={`row2-${index}`}
              className="rounded-2xl shadow-lg overflow-hidden min-w-[240px] h-[180px] transform -rotate-2 border-4 border-white"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>

        {/* Third row - scrolling left */}
        <motion.div
          className="absolute top-[55%] flex gap-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allCards.map((card, index) => (
            <div
              key={`row3-${index}`}
              className="rounded-2xl shadow-lg overflow-hidden min-w-[240px] h-[180px] transform rotate-1 border-4 border-white"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>

        {/* Fourth row - scrolling right (bottom) */}
        <motion.div
          className="absolute top-[80%] flex gap-8"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {allCards.map((card, index) => (
            <div
              key={`row4-${index}`}
              className="rounded-2xl shadow-lg overflow-hidden min-w-[240px] h-[180px] transform -rotate-3 border-4 border-white"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollBackground;
