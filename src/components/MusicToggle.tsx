import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

/**
 * Music Toggle Component
 * Plays romantic background music with play/pause control
 *
 * NOTE: Add your music file to public/music.mp3 or update the path
 */
const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Check if file loads
    audioRef.current.addEventListener("error", () => {
      console.error("Failed to load music file");
      setError(true);
    });

    audioRef.current.addEventListener("canplay", () => {
      console.log("Music file loaded successfully");
    });

    // Listen for custom event to start music
    const handleStartMusic = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("Background music started automatically");
          })
          .catch((err) => {
            console.error("Auto-play failed:", err);
          });
      }
    };

    window.addEventListener("startBackgroundMusic", handleStartMusic);

    return () => {
      window.removeEventListener("startBackgroundMusic", handleStartMusic);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      console.error("Audio element not initialized");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      console.log("Music paused");
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Music playing");
        })
        .catch((err) => {
          console.error("Audio playback failed:", err);
          setError(true);
          alert(
            "Unable to play music. Please check if the music.mp3 file exists in the public folder."
          );
        });
    }
  };

  // Don't show button on the countdown (Home) page
  if (location.pathname === "/") return null;

  return (
    <motion.button
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 ${error ? "bg-red-400 hover:bg-red-500 text-white" : "btn-primary"
        } rounded-full p-4 shadow-lg z-50 transition-all flex items-center justify-center`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
      title={
        error
          ? "Music file not found"
          : isPlaying
            ? "Pause music"
            : "Play music"
      }
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clipRule="evenodd"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}
    </motion.button>
  );
};

export default MusicToggle;
