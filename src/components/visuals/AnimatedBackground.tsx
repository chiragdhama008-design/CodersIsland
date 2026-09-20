import React from 'react';
import { motion } from 'framer-motion';

const pixelStars = [
  { top: '8%', left: '15%', size: 4, delay: 0 },
  { top: '14%', left: '82%', size: 6, delay: 1 },
  { top: '22%', left: '35%', size: 4, delay: 2.2 },
  { top: '30%', left: '68%', size: 5, delay: 0.8 },
  { top: '45%', left: '12%', size: 6, delay: 1.5 },
  { top: '55%', left: '90%', size: 4, delay: 2 },
  { top: '68%', left: '28%', size: 5, delay: 0.5 },
  { top: '78%', left: '75%', size: 6, delay: 1.8 },
  { top: '88%', left: '18%', size: 4, delay: 2.5 },
];

const floatingXpOrbs = [
  { top: '18%', left: '8%', delay: 0, duration: 7 },
  { top: '38%', right: '12%', delay: 2, duration: 9 },
  { top: '65%', left: '6%', delay: 1, duration: 8.5 },
  { top: '82%', right: '18%', delay: 3, duration: 10 },
];

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 mc-bg-pattern">
      {/* Twilight / Deep Minecraft Sky Gradients */}
      <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-none bg-[#5b8731]/10 blur-[140px]" />
      <div className="absolute top-[25%] right-[-15%] w-[45vw] h-[45vw] rounded-none bg-[#a855f7]/10 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-none bg-[#248f95]/10 blur-[150px]" />

      {/* Minecraft Pixel Stars */}
      {pixelStars.map((star, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + (idx % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}

      {/* Floating Minecraft Square Clouds */}
      <motion.div
        className="absolute top-[12%] -left-32 w-64 h-12 bg-white/[0.04] border border-white/10"
        animate={{ x: [0, 1500] }}
        transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-[40%] -left-48 w-80 h-16 bg-white/[0.03] border border-white/10"
        animate={{ x: [0, 1600] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear', delay: 15 }}
      />

      {/* Drifting XP (Experience) Orbs */}
      {floatingXpOrbs.map((orb, idx) => (
        <motion.div
          key={idx}
          className="absolute w-3 h-3 bg-[#7fff00] border border-[#1a3800] shadow-glow-xp select-none"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
          }}
          animate={{
            y: [-16, 16, -16],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#55ff55]/40 to-transparent" />
    </div>
  );
};
