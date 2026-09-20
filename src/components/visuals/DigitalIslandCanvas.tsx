import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Pickaxe } from 'lucide-react';

export const DigitalIslandCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] aspect-square mx-auto flex items-center justify-center select-none perspective-[1200px]"
    >
      {/* Minecraft Pixel Night Clouds */}
      <motion.div
        className="absolute top-6 left-2 w-28 h-8 bg-white/10 border-2 border-white/20 shadow-md"
        animate={{ x: [-10, 20, -10] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-12 right-4 w-36 h-10 bg-white/10 border-2 border-white/20 shadow-md"
        animate={{ x: [15, -25, 15] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orbiting Experience (XP) Orbs */}
      <motion.div
        className="absolute w-7 h-7 rounded-none bg-[#7fff00] border-2 border-[#1a3800] shadow-glow-xp z-30 flex items-center justify-center font-pixel text-[8px] text-black"
        animate={{
          x: [160, 0, -160, 0, 160],
          y: [0, -110, 0, 110, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        XP
      </motion.div>

      <motion.div
        className="absolute w-6 h-6 rounded-none bg-[#fdb813] border-2 border-[#4d3300] shadow-glow-gold z-30 flex items-center justify-center font-pixel text-[7px] text-black"
        animate={{
          x: [-140, 0, 140, 0, -140],
          y: [0, 90, 0, -90, 0],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        ★
      </motion.div>

      {/* 3D Tilted Voxel Floating Island Centerpiece */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] flex items-center justify-center transition-transform duration-200"
      >
        {/* Soft Voxel Base Glow */}
        <div className="absolute inset-4 rounded-full bg-[#5b8731]/20 blur-3xl" />

        {/* Isometric SVG Voxel Island */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
        >
          <defs>
            <filter id="oreGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* VOXEL LOWER BEDROCK CRUST */}
          <polygon points="200,340 280,290 280,310 200,360 120,310 120,290" fill="#161616" stroke="#000" strokeWidth="2" />
          <polygon points="200,310 310,245 310,270 200,335 90,270 90,245" fill="#262626" stroke="#000" strokeWidth="2" />

          {/* DIRT LAYERS */}
          <polygon points="200,260 335,180 335,225 200,305 65,225 65,180" fill="#573d26" stroke="#000" strokeWidth="2" />
          <polygon points="200,235 345,150 345,190 200,275 55,190 55,150" fill="#866043" stroke="#000" strokeWidth="2" />

          {/* TOP GRASS BLOCK CRUST */}
          <polygon points="200,110 345,190 200,270 55,190" fill="#5b8731" stroke="#000" strokeWidth="2.5" />

          {/* Grass side overhang pixel fringes */}
          <polygon points="55,190 85,208 85,218 55,200" fill="#72b036" />
          <polygon points="120,225 150,242 150,250 120,233" fill="#72b036" />
          <polygon points="200,270 240,247 240,256 200,280" fill="#72b036" />
          <polygon points="280,225 320,202 320,212 280,234" fill="#72b036" />

          {/* Grid lines on grass surface */}
          <line x1="130" y1="150" x2="275" y2="230" stroke="#72b036" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="90" y1="170" x2="235" y2="250" stroke="#72b036" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="270" y1="150" x2="125" y2="230" stroke="#4a6e27" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="310" y1="170" x2="165" y2="250" stroke="#4a6e27" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* EXPOSED DIAMOND ORE BLOCK */}
          <g transform="translate(130, 185)">
            <polygon points="0,0 25,-14 50,0 25,14" fill="#606060" stroke="#000" strokeWidth="1.5" />
            <polygon points="0,0 25,14 25,35 0,21" fill="#404040" stroke="#000" strokeWidth="1.5" />
            <polygon points="25,14 50,0 50,21 25,35" fill="#303030" stroke="#000" strokeWidth="1.5" />
            {/* Diamond Ore Cyan Pixels */}
            <rect x="18" y="-4" width="6" height="5" fill="#4dedf4" filter="url(#oreGlow)" />
            <rect x="28" y="2" width="5" height="5" fill="#4dedf4" filter="url(#oreGlow)" />
            <rect x="10" y="8" width="5" height="5" fill="#4dedf4" filter="url(#oreGlow)" />
            <rect x="35" y="10" width="5" height="5" fill="#29b8c0" />
          </g>

          {/* EXPOSED REDSTONE ORE BLOCK */}
          <g transform="translate(230, 195)">
            <polygon points="0,0 22,-12 44,0 22,12" fill="#606060" stroke="#000" strokeWidth="1.5" />
            <polygon points="0,0 22,12 22,30 0,18" fill="#404040" stroke="#000" strokeWidth="1.5" />
            <polygon points="22,12 44,0 44,18 22,30" fill="#303030" stroke="#000" strokeWidth="1.5" />
            {/* Redstone Glowing Pixels */}
            <rect x="14" y="-3" width="5" height="5" fill="#ff2200" filter="url(#oreGlow)" className="animate-pulse" />
            <rect x="25" y="1" width="5" height="4" fill="#ff5533" filter="url(#oreGlow)" />
            <rect x="8" y="6" width="4" height="5" fill="#ff2200" />
          </g>

          {/* VOXEL OAK TREE */}
          <g transform="translate(180, 50)">
            {/* Wood Trunk */}
            <rect x="14" y="65" width="12" height="40" fill="#66451e" stroke="#000" strokeWidth="1.5" />
            <rect x="17" y="65" width="4" height="40" fill="#9c6e3b" />
            {/* Foliage Layers */}
            <polygon points="20,0 55,20 20,40 -15,20" fill="#5b8731" stroke="#000" strokeWidth="1.5" />
            <polygon points="20,20 60,42 20,64 -20,42" fill="#4a7726" stroke="#000" strokeWidth="1.5" />
            <polygon points="20,40 65,65 20,90 -25,65" fill="#3d631f" stroke="#000" strokeWidth="1.5" />
            {/* Foliage Pixel Highlights */}
            <rect x="10" y="10" width="8" height="6" fill="#72b036" />
            <rect x="25" y="30" width="7" height="6" fill="#72b036" />
          </g>

          {/* WATERFALL STREAM (FLOWING OFF CLIFF) */}
          <g>
            <polygon points="100,180 115,190 115,280 100,270" fill="#2d68c4" stroke="#1d488e" strokeWidth="1" />
            <polygon points="115,190 125,185 125,275 115,280" fill="#1b4588" stroke="#1d488e" strokeWidth="1" />
            {/* Water foam at base */}
            <ellipse cx="108" cy="285" rx="14" ry="6" fill="#ffffff" opacity="0.6" className="animate-pulse" />
          </g>

          {/* CRAFTING TABLE BLOCK */}
          <g transform="translate(265, 140)">
            <polygon points="0,0 18,-10 36,0 18,10" fill="#9c6e3b" stroke="#000" strokeWidth="1.2" />
            <polygon points="0,0 18,10 18,25 0,15" fill="#66451e" stroke="#000" strokeWidth="1.2" />
            <polygon points="18,10 36,0 36,15 18,25" fill="#4a3014" stroke="#000" strokeWidth="1.2" />
            {/* Crafting Grid lines on top */}
            <line x1="9" y1="-5" x2="27" y2="5" stroke="#331e08" strokeWidth="1" />
            <line x1="9" y1="5" x2="27" y2="-5" stroke="#331e08" strokeWidth="1" />
          </g>
        </svg>

        {/* Floating Holographic Minecraft Code Box */}
        <motion.div
          className="absolute -top-6 -right-2 sm:-right-8 w-56 sm:w-64 p-3.5 mc-card font-mono text-[11px] text-white z-40"
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#3f3e4d]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#ff2200] border border-black" />
              <span className="w-2.5 h-2.5 bg-[#fdb813] border border-black" />
              <span className="w-2.5 h-2.5 bg-[#55ff55] border border-black" />
            </div>
            <span className="font-pixel text-[9px] text-[#55ff55] mc-text-shadow">
              CODERS_ISLAND v2.6
            </span>
          </div>
          <div className="space-y-1 text-xs">
            <p className="text-[#a0a0a0] font-pixel text-[9px]">$ spawn world --coding</p>
            <p className="text-[#55ff55] font-silkscreen flex items-center gap-1">
              <span>✔</span> 5 Island Biomes Ready
            </p>
            <p className="text-[#4dedf4] font-silkscreen flex items-center gap-1">
              <span>✔</span> 20 Quests Unlocked
            </p>
            <p className="text-[#fdb813] font-silkscreen flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#fdb813]" />
              <span>Earn 100+ XP Points!</span>
            </p>
          </div>
        </motion.div>

        {/* Floating Minecraft Achievement Badge */}
        <motion.div
          className="absolute -bottom-4 -left-2 sm:-left-8 mc-card px-3.5 py-2.5 flex items-center gap-3 z-40"
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#4dedf4]">
            <Pickaxe className="w-5 h-5 text-[#4dedf4]" />
          </div>
          <div>
            <div className="font-pixel text-[8px] text-[#fdb813] mc-text-shadow uppercase">
              Advancement Made!
            </div>
            <div className="font-silkscreen text-xs font-bold text-white mc-text-shadow">
              Classes 6–10 Workshop
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
