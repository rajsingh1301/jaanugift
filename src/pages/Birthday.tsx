import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Birthday = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    // Generate continuous floating hearts
    const generateHearts = () => {
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 20 + Math.random() * 20,
      }));
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-play music with user interaction fallback
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch(() => {
            // Auto-play failed, will need user interaction
            setIsMusicPlaying(false);
          });
      }
    };

    // Try to play immediately
    playMusic();

    // Also add click listener to enable music on first interaction
    const handleFirstClick = () => {
      playMusic();
      document.removeEventListener("click", handleFirstClick);
    };
    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play();
        setIsMusicPlaying(true);
      }
    }
  };

  const handleStartStory = () => {
    navigate("/story");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 relative overflow-hidden">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float-up-continuous opacity-70"
            style={{
              left: `${heart.left}%`,
              bottom: "-10%",
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            {
              ["❤️", "💕", "💖", "💗", "💝", "💘"][
                Math.floor(Math.random() * 6)
              ]
            }
          </div>
        ))}
      </div>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="absolute top-6 right-6 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 z-20"
        title={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? (
          <span className="text-2xl">🔊</span>
        ) : (
          <span className="text-2xl">🔇</span>
        )}
      </button>

      {/* Main Content */}
      <div className="text-center p-8 relative z-10 max-w-4xl">
        <div className="animate-fade-in-scale">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 mb-8 animate-pulse-slow drop-shadow-lg">
            Happy Birthday
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-red-700 mb-12 animate-bounce-slow">
            My Love ❤️
          </h2>
        </div>

        <div className="mb-12 animate-fade-in-delay">
          <p className="text-2xl md:text-3xl text-gray-700 font-light italic mb-6">
            Today is all about you...
          </p>
          <p className="text-xl md:text-2xl text-gray-600">
            The most special person in my life 💝
          </p>
        </div>

        <button
          onClick={handleStartStory}
          className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-bold shadow-2xl hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300 animate-bounce-gentle"
        >
          Start Our Story ➡️
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float-up-continuous {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes fade-in-scale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          0%, 50% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
        }

        .animate-float-up-continuous {
          animation: float-up-continuous linear infinite;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 1.5s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 2s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Birthday;
