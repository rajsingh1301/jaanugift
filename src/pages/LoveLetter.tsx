import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * LOVE LETTER PAGE
 * High-end premium coffee theme design
 */
const LoveLetter = () => {
  const navigate = useNavigate();

  // Candle flame animation variants
  const flameVariants = {
    animate: {
      scale: [1, 1.1, 1, 0.9, 1],
      opacity: [0.8, 1, 0.8, 0.9, 0.8],
      borderRadius: ["50% 50% 50% 50% / 60% 60% 40% 40%", "50% 50% 50% 50% / 60% 60% 40% 40%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[#1a120e]">
      {/* 🌟 Background Ambiance: Dark warm coffee shop vibe with bokeh */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3e2723_0%,_#1a120e_100%)] opacity-100" />
        
        {/* Floating dust/bokeh particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ffcc80] mixture-blend-screen layer-blur-xl"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 10 + 20}px)`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Vignette */}
        <div className="absolute inset-0 bg-transparent shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />
      </div>

      {/* 🕯️ Scene Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Side Decor (Desktop Only): Candle & Coffee */}
        <motion.div 
          className="hidden md:flex flex-col items-center gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
           {/* Realistic Candle */}
           <div className="relative group">
              {/* Glow */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-orange-500/20 blur-2xl rounded-full animate-pulse" />
              
              {/* Flame */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-10 bg-gradient-to-t from-orange-600 via-yellow-400 to-white rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-[0_0_20px_rgba(255,165,0,0.6)]"
                variants={flameVariants}
                animate="animate"
              />
              {/* Wick */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-black opacity-80" />
              
              {/* Candle Body */}
              <div className="w-16 h-28 bg-gradient-to-b from-[#f5e6d3] to-[#dcc0a3] rounded-sm shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 w-full h-4 bg-[#fff9f0] rounded-full opacity-60" />
                 <div className="absolute top-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
              </div>
              {/* Candle Base/Shadow */}
              <div className="absolute -bottom-2 -left-2 -right-2 h-4 bg-black/50 blur-md rounded-full" />
           </div>

           {/* Coffee Cup */}
           <div className="relative">
             {/* Steam Particles */}
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-8 bg-white/20 blur-[2px] rounded-full"
                    animate={{
                       y: [-5, -20, -35],
                       opacity: [0, 0.4, 0],
                       scaleY: [0.5, 1.2, 1.5],
                       x: [0, i % 2 === 0 ? 5 : -5, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeInOut"
                    }}
                  />
                ))}
             </div>
             
             {/* Cup Handle */}
             <div className="absolute top-2 -right-4 w-10 h-10 border-4 border-[#fff] rounded-full shadow-md" />
             {/* Cup Body */}
             <div className="w-20 h-16 bg-[#fafafa] rounded-b-3xl relative z-10 shadow-inner flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-200" />
             </div>
             {/* Saucer */}
             <div className="absolute -bottom-2 -left-4 w-28 h-6 bg-white rounded-[50%] shadow-lg z-0 flex items-center justify-center">
                <div className="w-16 h-4 bg-gray-100 rounded-[50%] blur-[1px] mt-1" />
             </div>
           </div>
        </motion.div>

        {/* 📜 The Letter Card */}
        <motion.div
          className="relative w-full max-w-2xl perspective-1000"
          initial={{ rotateX: 10, opacity: 0, y: 50 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
        >
          {/* Floating Animation Wrapper */}
          <motion.div
             animate={{ y: [0, -8, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative"
          >
            {/* Paper */}
            <div 
              className="relative bg-[#fdf6e3] p-8 md:p-16 rounded-[2px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{
                // Complex paper texture with stains
                backgroundImage: `
                  radial-gradient(circle at 10% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 20%),
                  radial-gradient(circle at 90% 80%, rgba(139, 69, 19, 0.05) 0%, transparent 20%),
                  linear-gradient(#fdf6e3, #fdf6e3)
                `,
              }}
            >
              {/* Burnt Edges / Vintage Look */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(101,67,33,0.15)] pointer-events-none" />
              <div className="absolute inset-0 border-[1px] border-[#8b5e3c]/20 m-1 pointer-events-none" />

              {/* Coffee Stains */}
              <div className="absolute -top-12 -right-12 w-40 h-40 border-[15px] border-[#8b4513]/10 rounded-full blur-[2px] pointer-events-none mix-blend-multiply" />
              <div className="absolute bottom-10 -left-16 w-32 h-32 bg-[#8b4513]/5 rounded-full blur-xl pointer-events-none" />

              {/* Text Content */}
              <div className="relative z-10 text-[#4e342e]">
                {/* Header Date */}
                <motion.div 
                  className="flex justify-end mb-10 font-serif italic text-[#8d6e63] border-b border-[#8d6e63]/20 pb-2 inline-block ml-auto w-fit"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  January 4th, 2026
                </motion.div>

                {/* Salutation */}
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-8 text-[#3e2723]"
                  style={{ fontFamily: "var(--font-display)" }} // Dancing Script
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  Meri Pyari Jaanu❤️,
                </motion.h1>

                {/* Body Text */}
                <div 
                  className="space-y-6 text-xl md:text-2xl leading-relaxed font-medium" 
                  style={{ fontFamily: "var(--font-display)" }} // Use Handwriting font for body too for realism
                >
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.5 }}
                  >
                    Mujhe jada likhna nhi ata lekin main tumko ye bolna chahta hu ki I Love You So Much ❤️ , tumhare sath bitaye har pal mujhe yaad hai , tumhara diya hua pehla letter ✉️ abhi bhi apne wallet me sambhal ke rakha hu , 
                  </motion.p>
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.2 }}
                  >
                    aur main tumhare sath bitaye har pal ko aise hi sambhal ke rakhna chahta hu 💕. I'm sorry maine tumhara birthday week kharab kar diya lekin main but I'm giving my best tumhare birthday ke liye kuch karu lekin thoda exam ke wajah se disturb chal rha hu Jaanu❤️.
                  </motion.p>
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.9 }}
                  >
                    Main to waise tumhare pe puri kitaab likh du lekin main baaki bhi kuch aage ke liye bacha ke rakhu , ye to bas ek virtual letter hai . Main tumhare birthday pe jada kuch kar nhi paunga kyuki usi din mera exam hai lekin hum agle din sath me honge aur tumhara birthday manayenge Jaanu❤️.
                  </motion.p>
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.9 }}
                  >
                    Happy Birthday Jaanu❤️.I wish ki jab tum ye dekho to main tumahre pass hota khair koi na , agle din sath me honge aur bahut maje karenge , I Love you Sweety❤️.
                  </motion.p>
                </div>

                {/* Sign-off */}
                <motion.div 
                  className="mt-12 text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 }}
                >
                  <p className="text-xl text-[#5d4037] font-serif italic">Yours Forever,</p>
                  <div className="text-3xl md:text-3xl mt-2 text-[#271c19] drop-shadow-sm" style={{ fontFamily: "var(--font-display)" }}>
                     Bubu❤️
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Paper Shadows (Stacked effect) */}
            <div className="absolute top-2 left-2 w-full h-full bg-white opacity-20 rounded-[2px] -z-10 transform rotate-1" />
            <div className="absolute top-4 left-4 w-full h-full bg-white opacity-10 rounded-[2px] -z-20 transform rotate-2" />
          </motion.div>

          {/* Action Button */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
             <button
              onClick={() => navigate("/")}
              className="relative px-10 py-4 bg-gradient-to-r from-[#5d4037] to-[#4e342e] text-[#fdf6e3] rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 hover:shadow-orange-900/40 group border border-[#8b5e3c]/50"
             >
               <span className="relative z-10 font-serif font-semibold tracking-wider text-lg flex items-center gap-2">
                 <span>Return Home</span> 
                 <span className="group-hover:rotate-45 transition-transform duration-300">☕</span>
               </span>
               {/* Hover Shine Effect */}
               <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
             </button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default LoveLetter;
