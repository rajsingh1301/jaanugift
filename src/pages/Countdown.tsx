import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  const navigate = useNavigate();
  // Set your target birthday date here (Year, Month-1, Day, Hour, Minute, Second)
  const targetDate = new Date(2026, 0, 1, 0, 0, 0).getTime(); // January 1, 2026

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [backgroundHearts, setBackgroundHearts] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);
  const [celebrationHearts, setCelebrationHearts] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  // Continuous floating hearts in background
  useEffect(() => {
    const generateBackgroundHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 5,
        size: 20 + Math.random() * 25,
      }));
      setBackgroundHearts(newHearts);
    };

    generateBackgroundHearts();
    const interval = setInterval(generateBackgroundHearts, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          total: difference,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
        });
        setIsUnlocked(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleUnlock = () => {
    setShowAnimation(true);

    // Generate celebration hearts
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setCelebrationHearts(newHearts);

    // Navigate to birthday page after animation
    setTimeout(() => {
      navigate("/birthday");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 relative overflow-hidden">
      {/* Continuous background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float-up-slow opacity-40"
            style={{
              left: `${heart.left}%`,
              bottom: "-10%",
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            {
              ["💕", "💖", "💗", "💝", "💘", "🌸", "🦋"][
                Math.floor(Math.random() * 7)
              ]
            }
          </div>
        ))}
      </div>

      {/* Floating stars decoration */}
      <div className="absolute top-10 left-10 text-4xl animate-twinkle opacity-70">
        ✨
      </div>
      <div
        className="absolute top-20 right-20 text-3xl animate-twinkle opacity-60"
        style={{ animationDelay: "1s" }}
      >
        ⭐
      </div>
      <div
        className="absolute bottom-20 left-16 text-3xl animate-twinkle opacity-60"
        style={{ animationDelay: "2s" }}
      >
        💫
      </div>
      <div
        className="absolute bottom-32 right-12 text-4xl animate-twinkle opacity-70"
        style={{ animationDelay: "1.5s" }}
      >
        ✨
      </div>

      {/* Celebration hearts on unlock */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {showAnimation &&
          celebrationHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-4xl animate-float-up"
              style={{
                left: `${heart.left}%`,
                bottom: "-10%",
                animationDelay: `${heart.delay}s`,
              }}
            >
              {Math.random() > 0.5 ? "💕" : "🎉"}
            </div>
          ))}
      </div>

      <div className="text-center p-8 relative z-10 max-w-4xl">
        {/* Cute animated image */}
        <div className="mb-8 flex justify-center">
          <div className="relative animate-float-gentle">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              alt="Cute couple"
              className="w-48 h-48 md:w-64 md:h-64 rounded-3xl shadow-2xl border-4 border-white bg-gradient-to-br from-pink-200 to-purple-200 p-4"
              style={{
                imageRendering: "pixelated",
              }}
            />
            {/* Decorative hearts around image */}
            <span
              className="absolute -top-2 -left-2 text-3xl animate-bounce-gentle"
              style={{ animationDelay: "0.2s" }}
            >
              💖
            </span>
            <span
              className="absolute -top-2 -right-2 text-3xl animate-bounce-gentle"
              style={{ animationDelay: "0.4s" }}
            >
              💕
            </span>
            <span
              className="absolute -bottom-2 -left-2 text-3xl animate-bounce-gentle"
              style={{ animationDelay: "0.6s" }}
            >
              💗
            </span>
            <span
              className="absolute -bottom-2 -right-2 text-3xl animate-bounce-gentle"
              style={{ animationDelay: "0.8s" }}
            >
              💝
            </span>
          </div>
        </div>

        <h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mb-4 drop-shadow-lg animate-gradient"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          ✨ Birthday Countdown ✨
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-600 mb-4"
          style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 300 }}
        >
          Counting down to your special day! 🎂
        </p>
        <p
          className="text-lg md:text-xl text-pink-500 mb-8 italic"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          Every second brings us closer... 💕
        </p>

        {/* Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { value: timeLeft.days, label: "Days", emoji: "📅" },
            { value: timeLeft.hours, label: "Hours", emoji: "⏰" },
            { value: timeLeft.minutes, label: "Minutes", emoji: "⏱️" },
            { value: timeLeft.seconds, label: "Seconds", emoji: "⚡" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 transform hover:scale-110 transition-all duration-500 hover:shadow-pink-300 hover:shadow-2xl border-4 border-pink-200 hover:border-pink-300 animate-pop-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="text-4xl mb-3 animate-bounce-gentle"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.emoji}
              </div>
              <div
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-transparent bg-clip-text mb-2"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div
                className="text-sm md:text-base text-gray-500 font-semibold"
                style={{ fontFamily: "Quicksand, sans-serif" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Unlock Button */}
        <div className="relative inline-block">
          {/* Sparkle effects around button when unlocked */}
          {isUnlocked && (
            <>
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-ping">
                ✨
              </span>
              <span
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-2xl animate-ping"
                style={{ animationDelay: "0.5s" }}
              >
                ✨
              </span>
            </>
          )}
          <button
            onClick={handleUnlock}
            disabled={!isUnlocked}
            className={`
              px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 transform shadow-2xl
              ${
                isUnlocked
                  ? "bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white hover:scale-125 hover:shadow-pink-400 hover:shadow-2xl animate-wiggle cursor-pointer border-4 border-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-60 border-2 border-gray-300"
              }
            `}
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            {isUnlocked
              ? "🎁 Unlock the Surprise! 🎁"
              : "🔒 Unlock the Surprise 🎁"}
          </button>
        </div>

        {isUnlocked && (
          <div className="mt-6 animate-bounce-in">
            <p
              className="text-pink-500 font-semibold text-2xl"
              style={{
                fontFamily: "Dancing Script, cursive",
              }}
            >
              🎉 The surprise is ready! Click to reveal! 🎉
            </p>
            <p
              className="text-purple-400 text-lg mt-2"
              style={{
                fontFamily: "Dancing Script, cursive",
              }}
            >
              Your special moment awaits... 💖
            </p>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        float-gentle {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-5deg) scale(1.05);
          }
          75% {
            transform: rotate(5deg) scale(1.05);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pop-in {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-float-up {
          animation: float-up 3s ease-in-out forwards;
        }

        .animate-float-up-slow {
          animation: float-up-slow linear infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pop-in {
          animation: pop-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards
        .animate-float-up {
          animation: float-up 3s ease-in-out forwards;
        }

        .animate-float-up-slow {
          animation: float-up-slow linear infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Countdown;
