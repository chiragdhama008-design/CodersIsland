import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ChevronDown, Pickaxe
} from 'lucide-react';
import { DigitalIslandCanvas } from '../components/visuals/DigitalIslandCanvas';
import { WeekCard } from '../components/cards/WeekCard';
import { useContentData } from '../hooks/useContentData';

export const LandingPage: React.FC = () => {
  const { weeks, stats } = useContentData();

  const journeySteps = [
    {
      weekNum: 1,
      id: 'week-1',
      title: 'Overworld Plains: Logic & Foundations',
      description: 'Collect your first wooden pickaxe: Variables, Conditionals, and Algorithmic Thinking.',
      icon: '⛏️',
      badge: 'BIOME 01',
      badgeColor: 'text-[#55ff55]',
    },
    {
      weekNum: 2,
      id: 'week-2',
      title: 'Crafting Workshop: HTML5 & CSS3',
      description: 'Open your crafting table: Build web structures with Flexbox and Cyber pixel layouts.',
      icon: '🧱',
      badge: 'BIOME 02',
      badgeColor: 'text-[#fdb813]',
    },
    {
      weekNum: 3,
      id: 'week-3',
      title: 'Redstone Engineering: Modern JavaScript',
      description: 'Wire up live redstone circuits: Functions, DOM manipulation, and interactive game physics.',
      icon: '⚡',
      badge: 'BIOME 03',
      badgeColor: 'text-[#ff2200]',
    },
    {
      weekNum: 4,
      id: 'week-4',
      title: 'Nether Expedition: Git & GitHub Workflow',
      description: 'Build your Nether portal: Time-travel commits, branch dimensions, and teamwork.',
      icon: '🔥',
      badge: 'BIOME 04',
      badgeColor: 'text-[#a855f7]',
    },
    {
      weekNum: 5,
      id: 'week-5',
      title: 'The End Battle: Build & Launch Capstone',
      description: 'Slay the Ender Dragon: Architect, ship, and demonstrate your own flagship project!',
      icon: '⚔️',
      badge: 'BIOME 05',
      badgeColor: 'text-[#4dedf4]',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Minecraft Hero Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Minecraft Advancement Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mc-card bg-[#1e1a33] text-xs">
              <span className="w-2.5 h-2.5 bg-[#7fff00] border border-black animate-ping" />
              <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">ADVANCEMENT UNLOCKED!</span>
              <span className="text-[#666]">|</span>
              <span className="font-silkscreen text-[11px] text-[#4dedf4]">CLASSES 6–10 QUEST</span>
            </div>

            {/* Main Pixel Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-pixel text-white mc-text-shadow leading-tight sm:leading-[1.25]">
              WELCOME TO <br />
              <span className="text-[#55ff55] mc-xp-text">
                CODERSISLAND
              </span>
            </h1>

            {/* Supporting Copy */}
            <div className="font-silkscreen text-lg sm:text-xl text-[#fdb813] mc-gold-text tracking-wide">
              Craft. Build. Explore.
            </div>

            <p className="text-base sm:text-lg text-[#b8b8b8] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              Your quest into the world of code starts here! Enter a Minecraft-inspired digital universe where school students level up their programming skills through hands-on workshops, YouTube streams, and coding challenges.
            </p>

            {/* Minecraft Beveled Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                to="/batches"
                className="w-full sm:w-auto mc-btn mc-btn-green px-7 py-3.5 text-xs text-white flex items-center justify-center gap-2.5 shadow-lg"
              >
                <span>CHOOSE BATCH (₹999+)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/learn"
                className="w-full sm:w-auto mc-btn mc-btn-diamond px-6 py-3.5 text-xs text-white flex items-center justify-center gap-2 shadow-lg"
              >
                <Pickaxe className="w-4 h-4 text-white" />
                <span>Explore Biomes</span>
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto mc-btn px-5 py-3.5 text-xs text-[#fdb813] flex items-center justify-center gap-2 shadow-lg"
              >
                <span>About Us</span>
              </Link>
            </div>

            {/* Key Adventure Highlights */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-5 font-silkscreen text-xs text-[#a0a0a0]">
              <div className="flex items-center gap-2">
                <span className="text-[#55ff55]">✔</span>
                <span>Junior Wing: ₹999 INR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4dedf4]">✔</span>
                <span>Senior Wing: ₹1,199 INR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#fdb813]">✔</span>
                <span>Mentors from PEC CSE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Voxel Minecraft Floating Island */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <DigitalIslandCanvas />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center">
          <a
            href="#journey"
            className="inline-flex flex-col items-center gap-2 text-[#888] hover:text-[#55ff55] font-silkscreen text-xs transition-colors"
          >
            <span>SCROLL DOWN TO QUEST MAP</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#55ff55]" />
          </a>
        </div>
      </section>

      {/* 2. MINECRAFT HOTBAR STATS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 mc-card bg-[#1b1a25]">
          <div className="text-center p-3 mc-slot space-y-1">
            <div className="font-pixel text-2xl sm:text-3xl text-[#55ff55] mc-xp-text">
              {stats.totalWeeks}
            </div>
            <div className="font-silkscreen text-[11px] text-[#a0a0a0] uppercase">
              Island Biomes
            </div>
          </div>

          <div className="text-center p-3 mc-slot space-y-1">
            <div className="font-pixel text-2xl sm:text-3xl text-[#4dedf4] mc-diamond-text">
              {stats.totalTopics}
            </div>
            <div className="font-silkscreen text-[11px] text-[#a0a0a0] uppercase">
              Workshop Quests
            </div>
          </div>

          <div className="text-center p-3 mc-slot space-y-1">
            <div className="font-pixel text-2xl sm:text-3xl text-[#ff5533] mc-redstone-text">
              {stats.totalVideos}
            </div>
            <div className="font-silkscreen text-[11px] text-[#a0a0a0] uppercase">
              YouTube Streams
            </div>
          </div>

          <div className="text-center p-3 mc-slot space-y-1">
            <div className="font-pixel text-2xl sm:text-3xl text-[#fdb813] mc-gold-text">
              {stats.totalResources}
            </div>
            <div className="font-silkscreen text-[11px] text-[#a0a0a0] uppercase">
              Enchanted Scrolls
            </div>
          </div>
        </div>
      </section>

      {/* 3. MINECRAFT QUEST JOURNEY MAP */}
      <section id="journey" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mc-card font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            <span>🗺️ EXPEDITION BIOME MAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel text-white mc-text-shadow">
            Your Coding Quest Map
          </h2>
          <p className="text-sm sm:text-base text-[#a0a0a0] max-w-2xl mx-auto font-sans">
            Advance across 5 distinctive Minecraft biomes. Every week unlocks new crafting abilities, from basic algorithmic logic to launching your flagship capstone!
          </p>
        </div>

        {/* Biome Adventure Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Redstone Line */}
          <div className="absolute top-6 bottom-6 left-6 sm:left-1/2 -translate-x-1/2 w-1.5 bg-[#ff2200] shadow-[0_0_10px_#ff2200]" />

          <div className="space-y-10 sm:space-y-14">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Biome Card */}
                  <div className="w-full sm:w-1/2 pl-14 sm:pl-0">
                    <Link
                      to={`/week/${step.id}`}
                      className="block p-5 mc-card hover:-translate-y-1 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-pixel text-[9px] uppercase tracking-wider ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                        <span className="font-silkscreen text-[11px] text-[#888] group-hover:text-[#55ff55] flex items-center gap-1">
                          Explore Biome <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                      <h3 className="font-pixel text-xs sm:text-sm text-white mc-text-shadow group-hover:text-[#fdb813] transition-colors mb-2 leading-relaxed">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#a0a0a0] leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </Link>
                  </div>

                  {/* Minecraft Beacon Node in Center */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 mc-slot bg-[#1e1a33] flex items-center justify-center z-20 text-lg shadow-lg">
                    <span>{step.icon}</span>
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/learn"
            className="mc-btn mc-btn-green inline-flex items-center gap-2 px-8 py-3.5 text-xs text-white"
          >
            <span>VIEW ALL 5 BIOMES & 20 QUESTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. ACTIVE BIOMES PREVIEW */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
              START YOUR ADVENTURE
            </span>
            <h2 className="text-xl sm:text-3xl font-pixel text-white mc-text-shadow mt-1">
              Active Island Biomes
            </h2>
          </div>
          <Link
            to="/learn"
            className="font-silkscreen text-xs text-[#55ff55] mc-xp-text flex items-center gap-1"
          >
            <span>Open Player Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeks.slice(0, 3).map((week, idx) => (
            <WeekCard key={week.id} week={week} index={idx} />
          ))}
        </div>
      </section>

      {/* 5. BATCHES OF 2: JUNIOR & SENIOR WING SPOTLIGHT */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mc-card font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            <span>⚡ BATCHES OF 2 WINGS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-pixel text-white mc-text-shadow">
            Pick Your Expedition Wing
          </h2>
          <p className="text-sm sm:text-base text-[#a0a0a0] max-w-2xl mx-auto font-sans">
            Whether taking your first steps in middle school or building production web apps in high school,
            we have a tailored cohort for your exact skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Junior Wing Card */}
          <div className="mc-card p-6 sm:p-8 flex flex-col justify-between hover:border-[#55ff55] transition-all bg-[#171622]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black pb-3">
                <span className="font-pixel text-[9px] text-[#55ff55]">
                  TIER: JUNIOR CRAFTER
                </span>
                <span className="font-silkscreen text-xs text-[#fdb813] mc-gold-text">
                  Classes 6, 7 & 8
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-pixel text-white mc-text-shadow">
                  Junior Wing Cohort
                </h3>
                <p className="text-xs text-[#909090] font-sans mt-1">
                  Computational thinking, visual blocks to Python/JS, pixel-styled HTML web pages, and game building.
                </p>
              </div>

              <div className="p-3 mc-slot bg-[#12111d] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#777] line-through block">₹1,999 INR</span>
                  <span className="font-pixel text-2xl text-[#55ff55] mc-xp-text">₹999 INR</span>
                </div>
                <span className="font-silkscreen text-[10px] text-[#fdb813]">
                  Full 5-Week Pass
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#c0c0c0] font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#55ff55]">✔</span>
                  <span>10+ Live Interactive Coding Quests on Google Meet</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#55ff55]">✔</span>
                  <span>Weekend Sessions (Sat & Sun 4:00 PM – 5:30 PM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#55ff55]">✔</span>
                  <span>Gamified Quests & Junior Crafter Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#55ff55]">✔</span>
                  <span>Mentored live by Punjab Engineering College (PEC) CSE educators</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-black mt-6">
              <Link
                to="/batches"
                className="mc-btn mc-btn-green w-full py-3.5 text-xs text-white flex items-center justify-center gap-2"
              >
                <span>ENROLL IN JUNIOR WING (₹999)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Senior Wing Card */}
          <div className="mc-card p-6 sm:p-8 flex flex-col justify-between hover:border-[#4dedf4] transition-all bg-[#171622]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-black pb-3">
                <span className="font-pixel text-[9px] text-[#4dedf4]">
                  TIER: SENIOR ARCHITECT
                </span>
                <span className="font-silkscreen text-xs text-[#fdb813] mc-gold-text">
                  Classes 9, 10, 11 & 12
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-pixel text-white mc-text-shadow">
                  Senior Wing Cohort
                </h3>
                <p className="text-xs text-[#909090] font-sans mt-1">
                  Full-stack web architecture, modern JavaScript/TypeScript, Git & GitHub, real-world AI tools & deployed capstone.
                </p>
              </div>

              <div className="p-3 mc-slot bg-[#12111d] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#777] line-through block">₹2,499 INR</span>
                  <span className="font-pixel text-2xl text-[#4dedf4] mc-diamond-text">₹1,199 INR</span>
                </div>
                <span className="font-silkscreen text-[10px] text-[#fdb813]">
                  Full 5-Week Pass
                </span>
              </div>

              <ul className="space-y-2 text-xs text-[#c0c0c0] font-sans">
                <li className="flex items-center gap-2">
                  <span className="text-[#4dedf4]">✔</span>
                  <span>Production Full-Stack Web Development & Git Portfolio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4dedf4]">✔</span>
                  <span>Weekend Sessions (Sat & Sun 6:00 PM – 7:45 PM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4dedf4]">✔</span>
                  <span>Competitive Programming Tips & Hackathon Guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4dedf4]">✔</span>
                  <span>Mentored live by PEC CSE Engineers & CP Leads</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-black mt-6">
              <Link
                to="/batches"
                className="mc-btn mc-btn-diamond w-full py-3.5 text-xs text-white flex items-center justify-center gap-2"
              >
                <span>ENROLL IN SENIOR WING (₹1,199)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEET THE FOUNDING GUILD (PEC CSE TEASER) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-8">
        <div className="mc-card p-6 sm:p-10 bg-[#161522] border-4 border-[#3f3e4d] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
            <div>
              <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
                THE FOUNDING ENGINEERS
              </span>
              <h3 className="text-xl sm:text-3xl font-pixel text-white mc-text-shadow mt-1">
                Meet Your Mentors from Punjab Engineering College
              </h3>
            </div>
            <Link
              to="/about"
              className="mc-btn mc-btn-green px-5 py-2.5 text-xs text-white shrink-0 flex items-center gap-1.5"
            >
              <span>Read Quotes & Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chirag */}
            <Link
              to="/about"
              className="p-4 mc-slot bg-[#12111c] hover:border-[#55ff55] transition-all group block"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/team/chirag_dhama.jpg"
                  alt="Chirag Dhama"
                  className="w-12 h-12 object-cover border-2 border-black shrink-0"
                />
                <div>
                  <h4 className="font-pixel text-sm text-white group-hover:text-[#55ff55] transition-colors">
                    Chirag Dhama
                  </h4>
                  <div className="font-silkscreen text-[10px] text-[#55ff55]">
                    Technical Educator
                  </div>
                  <div className="text-[10px] text-[#888] font-sans">
                    PEC Chandigarh • CSE
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#a0a0a0] font-sans italic leading-relaxed">
                “Why write 10 lines of code when you can prompt an AI to write 100... and debug for 4 hours? Learn algorithms to master the machine!”
              </p>
            </Link>

            {/* Eshan */}
            <Link
              to="/about"
              className="p-4 mc-slot bg-[#12111c] hover:border-[#fdb813] transition-all group block"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/team/eshan_sharma.jpg"
                  alt="Eshan Sharma"
                  className="w-12 h-12 object-cover border-2 border-black shrink-0"
                />
                <div>
                  <h4 className="font-pixel text-sm text-white group-hover:text-[#fdb813] transition-colors">
                    Eshan Sharma
                  </h4>
                  <div className="font-silkscreen text-[10px] text-[#fdb813]">
                    Creative Educator
                  </div>
                  <div className="text-[10px] text-[#888] font-sans">
                    PEC Chandigarh • CSE
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#a0a0a0] font-sans italic leading-relaxed">
                “Code is poetry compiled into binary. AI can spit out boilerplate, but soul and creativity are 100% human. Build things people love!”
              </p>
            </Link>

            {/* Ankit */}
            <Link
              to="/about"
              className="p-4 mc-slot bg-[#12111c] hover:border-[#4dedf4] transition-all group block"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/team/ankit_gupta.jpg"
                  alt="Ankit Gupta"
                  className="w-12 h-12 object-cover border-2 border-black shrink-0"
                />
                <div>
                  <h4 className="font-pixel text-sm text-white group-hover:text-[#4dedf4] transition-colors">
                    Ankit Gupta
                  </h4>
                  <div className="font-silkscreen text-[10px] text-[#4dedf4]">
                    Finance & Tech Lead
                  </div>
                  <div className="text-[10px] text-[#888] font-sans">
                    PEC Chandigarh • CSE
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-[#a0a0a0] font-sans italic leading-relaxed">
                “If O(N²) was a crime, half the world would be in jail. AI is just linear algebra in a tuxedo—master competitive logic and conquer tech.”
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. NETHER PORTAL / CAPSTONE CALL TO ACTION */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-12 mc-card bg-[#151324] border-4 border-[#a855f7] text-center shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-pixel text-[9px] px-3 py-1 bg-black text-[#fdb813] border-2 border-[#fdb813] mc-gold-text">
              ★ FREE SCHOOL CODING EXPEDITION
            </span>
            <h3 className="text-2xl sm:text-3xl font-pixel text-white mc-text-shadow">
              Ready to claim your Pioneer Badge?
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0b0] leading-relaxed font-sans">
              Grab your digital pickaxe and jump into Week 01. Watch workshop recordings, complete coding quests, and build something epic!
            </p>
            <div className="pt-3">
              <Link
                to="/learn"
                className="mc-btn mc-btn-green inline-flex items-center gap-3 px-8 py-4 text-sm text-white shadow-xl hover:scale-105 transition-transform"
              >
                <span>ENTER CODERSISLAND NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
