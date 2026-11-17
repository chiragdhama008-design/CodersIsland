import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Sparkles, 
  Code2, 
  GraduationCap, 
  Flame, 
  ArrowRight, 
  Quote, 
  Lightbulb, 
  BrainCircuit, 
  CheckCircle2
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  college: string;
  major: string;
  image: string;
  keySkills: string[];
  keenOnVenture: string;
  themeColor: string;
  badgeBg: string;
  borderHover: string;
  crazyQuote: string;
  perspectiveOnAI: string;
  whyIMentor: string;
  weaponOfChoice: string;
  superpower: string;
}

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Record<string, 'quote' | 'ai' | 'mentor'>>({
    chirag: 'quote',
    eshan: 'quote',
    ankit: 'quote',
  });

  const team: TeamMember[] = [
    {
      id: 'chirag',
      name: 'Chirag Dhama',
      role: 'Technical Educator',
      college: 'Punjab Engineering College (PEC)',
      major: 'Computer Science & Engineering (CSE)',
      image: '/team/chirag_dhama.jpg',
      keySkills: ['Web Dev', 'Java', 'C++', 'Machine Learning'],
      keenOnVenture: 'Yes (100% Committed)',
      themeColor: 'text-[#55ff55]',
      badgeBg: 'bg-[#1b2b16]',
      borderHover: 'hover:border-[#55ff55]',
      crazyQuote:
        '“Why write 10 lines of clean code in 5 minutes when you can prompt an AI to write 100 lines and then spend the next 4 hours debugging mysterious edge cases? In all seriousness: AI will NOT replace programmers who understand algorithmic foundations—it will replace programmers who only know how to copy-paste. At CodersIsland, we train you to be the architect pulling the strings, not the user trapped in a black box!”',
      perspectiveOnAI:
        '“AI is the ultimate lever, but a lever needs a solid fulcrum—and that fulcrum is computational thinking. If you know how memory, loops, and data structures actually work under the hood, ChatGPT and Claude become your tireless junior developers. If you don’t, you’re just building digital castles on quicksand. We teach students the foundational bedrock so they never fear what the future builds on top.”',
      whyIMentor:
        '“Most school computer science classes teach kids to memorize textbook definitions of RAM and draw flowcharts on paper without ever letting them touch real code. That’s tragic! Coding should feel like mining for diamonds in Minecraft: hands-on, adventurous, and exhilarating when your build actually lights up.”',
      weaponOfChoice: 'Vim, Java Spring Boot & High-Throughput Microservices',
      superpower: 'Can spot an off-by-one error from across the room in under 3 seconds.',
    },
    {
      id: 'eshan',
      name: 'Eshan Sharma',
      role: 'Creative Educator',
      college: 'Punjab Engineering College (PEC)',
      major: 'Computer Science & Engineering (CSE)',
      image: '/team/eshan_sharma.jpg',
      keySkills: ['App Dev', 'C++', 'Creative UX', 'Soft Skills & Mentorship'],
      keenOnVenture: 'Yes (100% Committed)',
      themeColor: 'text-[#fdb813]',
      badgeBg: 'bg-[#2b2512]',
      borderHover: 'hover:border-[#fdb813]',
      crazyQuote:
        '“Code is just digital poetry compiled into binary. Anyone can memorize syntax off a cheat sheet, but building an application that makes someone’s jaw drop? That takes taste, empathy, and a healthy dose of creative madness. AI can generate boilerplates in half a second, but it has zero soul. The real magic happens right at the intersection of creative design and engineering!”',
      perspectiveOnAI:
        '“People panic that AI will make coders obsolete. The open secret? AI eliminates the boring, repetitive grunt work so creative minds can build 100x faster! In the next decade, young builders who can combine app design, empathy, and computational logic will build things that used to take entire 50-person startups. CodersIsland is where that creative spark gets lit.”',
      whyIMentor:
        '“I love seeing the exact second a student’s eyes widen when their very first button click triggers an animation or plays an 8-bit sound. That moment transforms a child from a passive consumer of video games into an active creator of digital worlds.”',
      weaponOfChoice: 'Flutter, Mobile App Architectures & Pixel-Perfect UI Systems',
      superpower: 'Explains complex recursion using Minecraft Nether portals and pizza slices.',
    },
    {
      id: 'ankit',
      name: 'Ankit Gupta',
      role: 'Finance & Tech Lead',
      college: 'Punjab Engineering College (PEC)',
      major: 'Computer Science & Engineering (CSE)',
      image: '/team/ankit_gupta.jpg',
      keySkills: ['C++', 'Quantitative Finance', 'Competitive Programming (CP)'],
      keenOnVenture: 'Yes (100% Committed)',
      themeColor: 'text-[#4dedf4]',
      badgeBg: 'bg-[#122830]',
      borderHover: 'hover:border-[#4dedf4]',
      crazyQuote:
        '“If writing O(N²) algorithms was a punishable offense, half the tech industry would be serving life in prison without parole. Optimize your loops, minimize your cognitive latency, and let your problem-solving skills compound like exponential interest. AI is literally just linear algebra in a fancy tuxedo—master the math and the competitive grind, and absolutely nothing in technology will ever intimidate you!”',
      perspectiveOnAI:
        '“Whether in high-frequency trading or competitive programming, the winners are the ones with ruthless analytical clarity and algorithmic discipline. Generative AI is reshaping software delivery speed, but competitive programming intuition remains the gold standard of raw mental horsepower. We give school students that unfair advantage before they even set foot in college.”',
      whyIMentor:
        '“Math and algorithms have an unfair reputation for being dry and intimidating. When you frame competitive problem-solving as a multiplayer tournament where efficiency wins, kids become obsessed with optimization. That discipline pays dividends for life.”',
      weaponOfChoice: 'C++ STL, Fast I/O & Quantitative Algorithmic Models',
      superpower: 'Optimizes runtime complexity from O(2ⁿ) to O(log N) in his head.',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        {/* Advancement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mc-card bg-[#1a1924] text-xs mb-4">
          <span className="w-2.5 h-2.5 bg-[#55ff55] border border-black animate-ping" />
          <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            MEET THE FOUNDING GUILD
          </span>
          <span className="text-[#666]">|</span>
          <span className="font-silkscreen text-[11px] text-[#4dedf4]">
            PUNJAB ENGINEERING COLLEGE (PEC)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-pixel text-white mc-text-shadow leading-tight max-w-4xl mx-auto mb-4">
          THE ENGINEERS BEHIND <br />
          <span className="text-[#55ff55] mc-xp-text">CODERSISLAND</span>
        </h1>

        <p className="font-silkscreen text-sm sm:text-base text-[#fdb813] mc-gold-text mb-4">
          Built by Computer Science Engineers from Punjab Engineering College (PEC)
        </p>

        <p className="text-sm sm:text-base text-[#b0b0b0] max-w-2xl mx-auto font-sans leading-relaxed">
          We are three CS undergraduates on a mission to transform school computer science education
          from boring rote memorization into an epic, gamified quest of building, deploying, and problem-solving.
        </p>

        {/* Quick Stats Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-silkscreen text-xs text-[#a0a0a0]">
          <div className="flex items-center gap-2 mc-slot px-3 py-1.5 bg-[#181724]">
            <GraduationCap className="w-4 h-4 text-[#55ff55]" />
            <span>Punjab Engineering College (PEC)</span>
          </div>
          <div className="flex items-center gap-2 mc-slot px-3 py-1.5 bg-[#181724]">
            <Code2 className="w-4 h-4 text-[#4dedf4]" />
            <span>Computer Science & Engineering</span>
          </div>
          <div className="flex items-center gap-2 mc-slot px-3 py-1.5 bg-[#181724]">
            <Flame className="w-4 h-4 text-[#ff2200]" />
            <span>100% Committed to Youth Education</span>
          </div>
        </div>
      </section>

      {/* 2. TEAM PROFILES SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member) => {
            const currentTab = activeTab[member.id] || 'quote';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`mc-card flex flex-col justify-between p-6 sm:p-7 ${member.borderHover} transition-all`}
              >
                <div className="space-y-6">
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4 border-b-2 border-black/60 pb-5">
                    {/* Pixel-Framed Avatar */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mc-slot bg-[#14131f] p-1 shrink-0 overflow-hidden relative group">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-none transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 border-2 border-black/40 pointer-events-none" />
                    </div>

                    {/* Member Details */}
                    <div>
                      <span className={`font-pixel text-[9px] uppercase tracking-wider ${member.themeColor}`}>
                        {member.role}
                      </span>
                      <h3 className="text-xl font-pixel text-white mc-text-shadow mt-0.5">
                        {member.name}
                      </h3>
                      <div className="font-silkscreen text-[11px] text-[#fdb813] mc-gold-text mt-0.5">
                        {member.college}
                      </div>
                      <div className="font-silkscreen text-[10px] text-[#888]">
                        Major: {member.major}
                      </div>
                    </div>
                  </div>

                  {/* Key Skills Pills */}
                  <div className="space-y-2">
                    <span className="font-pixel text-[9px] text-[#a0a0a0] uppercase">
                      ⚡ Key Abilities & Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 mc-slot bg-[#12111d] font-silkscreen text-[10px] text-[#55ff55]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Quote / Perspective Switcher Hotbar */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 bg-[#15141f] border-2 border-black p-1 shadow-mc-slot">
                      <button
                        onClick={() => setActiveTab({ ...activeTab, [member.id]: 'quote' })}
                        className={`flex-1 py-1.5 font-silkscreen text-[10px] text-center transition-all ${
                          currentTab === 'quote'
                            ? 'bg-[#4a7726] text-white border border-[#7ab73f] mc-text-shadow'
                            : 'text-[#888] hover:text-white'
                        }`}
                      >
                        Crazy Quote
                      </button>
                      <button
                        onClick={() => setActiveTab({ ...activeTab, [member.id]: 'ai' })}
                        className={`flex-1 py-1.5 font-silkscreen text-[10px] text-center transition-all ${
                          currentTab === 'ai'
                            ? 'bg-[#248f95] text-white border border-[#4dedf4] mc-text-shadow'
                            : 'text-[#888] hover:text-white'
                        }`}
                      >
                        On CS & AI
                      </button>
                      <button
                        onClick={() => setActiveTab({ ...activeTab, [member.id]: 'mentor' })}
                        className={`flex-1 py-1.5 font-silkscreen text-[10px] text-center transition-all ${
                          currentTab === 'mentor'
                            ? 'bg-[#80501a] text-white border border-[#fdb813] mc-text-shadow'
                            : 'text-[#888] hover:text-white'
                        }`}
                      >
                        Why I Mentor
                      </button>
                    </div>

                    {/* Content Box */}
                    <div className="p-4 mc-slot bg-[#151420] min-h-[160px] flex flex-col justify-between">
                      {currentTab === 'quote' && (
                        <div className="space-y-2 animate-in fade-in">
                          <div className="flex items-center gap-2 text-[#fdb813] font-silkscreen text-[10px]">
                            <Quote className="w-3.5 h-3.5 shrink-0" />
                            <span>Founder Quote:</span>
                          </div>
                          <p className="text-xs text-[#d0d0d0] font-sans leading-relaxed italic">
                            {member.crazyQuote}
                          </p>
                        </div>
                      )}

                      {currentTab === 'ai' && (
                        <div className="space-y-2 animate-in fade-in">
                          <div className="flex items-center gap-2 text-[#4dedf4] font-silkscreen text-[10px]">
                            <BrainCircuit className="w-3.5 h-3.5 shrink-0" />
                            <span>Perspective on AI & The Future:</span>
                          </div>
                          <p className="text-xs text-[#c0c0c0] font-sans leading-relaxed">
                            {member.perspectiveOnAI}
                          </p>
                        </div>
                      )}

                      {currentTab === 'mentor' && (
                        <div className="space-y-2 animate-in fade-in">
                          <div className="flex items-center gap-2 text-[#55ff55] font-silkscreen text-[10px]">
                            <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                            <span>Why I Teach School Students:</span>
                          </div>
                          <p className="text-xs text-[#c0c0c0] font-sans leading-relaxed">
                            {member.whyIMentor}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Superpower & Tool of Choice */}
                  <div className="space-y-2 text-xs font-sans">
                    <div className="flex items-start gap-2 text-[11px] text-[#909090]">
                      <Terminal className="w-3.5 h-3.5 text-[#55ff55] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-silkscreen text-[10px]">Weapon of Choice: </strong>
                        <span>{member.weaponOfChoice}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-[#909090]">
                      <Sparkles className="w-3.5 h-3.5 text-[#fdb813] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-silkscreen text-[10px]">Superpower: </strong>
                        <span>{member.superpower}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Venture Commitment Badge */}
                <div className="pt-4 border-t border-[#333] mt-5 flex items-center justify-between text-xs font-silkscreen">
                  <span className="text-[#888]">Keen on Venture:</span>
                  <span className="text-[#55ff55] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{member.keenOnVenture}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. FOUNDERS SNAPSHOT CARD (Original Photo from Venture) */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mc-card p-6 sm:p-8 bg-[#151420] border-4 border-[#3a3949] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-black pb-4">
            <div>
              <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
                OFFICIAL VENTURE PROFILE
              </span>
              <h3 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow mt-0.5">
                The Founding Trio Credentials
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 font-silkscreen text-xs text-[#55ff55] border border-[#333]">
              <span className="w-2 h-2 bg-[#55ff55] border border-black animate-pulse" />
              <span>Verified PEC CSE Undergraduates</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans leading-relaxed">
            CodersIsland was born out of late-night hack sessions at Punjab Engineering College (PEC). 
            Here is our original venture formation record:
          </p>

          {/* Original Uploaded Image Display */}
          <div className="mc-slot p-2 bg-black/80 border-2 border-black overflow-hidden shadow-2xl">
            <img
              src="/team/team_original.jpg"
              alt="CodersIsland Founding Team - Chirag Dhama, Eshan Sharma, Ankit Gupta"
              className="w-full h-auto object-cover border border-[#333]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-silkscreen text-[#a0a0a0]">
            <div className="p-3 bg-black/40 border border-[#333]">
              <span className="text-[#55ff55] block mb-1">Chirag Dhama</span>
              <span className="text-[10px] text-[#777] font-sans">
                Technical Educator • Web Dev, Java, C++, ML • Keen: Yes
              </span>
            </div>
            <div className="p-3 bg-black/40 border border-[#333]">
              <span className="text-[#fdb813] block mb-1">Eshan Sharma</span>
              <span className="text-[10px] text-[#777] font-sans">
                Creative Educator • App Dev, C++, Soft Skills • Keen: Yes
              </span>
            </div>
            <div className="p-3 bg-black/40 border border-[#333]">
              <span className="text-[#4dedf4] block mb-1">Ankit Gupta</span>
              <span className="text-[10px] text-[#777] font-sans">
                Finance & Tech Lead • C++, Finance, CP • Keen: Yes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CODERSISLAND ORIGIN & PHILOSOPHY */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="mc-card p-6 sm:p-8 bg-[#181724] space-y-4">
            <span className="font-pixel text-[9px] text-[#55ff55] mc-xp-text">
              WHY WE STARTED
            </span>
            <h3 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow">
              The Broken School Code Trap
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans leading-relaxed">
              In most schools across the country, computer science is treated like a history exam. 
              Students memorize what an algorithm is, write down loops on paper with a blue ballpoint pen, 
              and take multiple-choice tests on outdated software.
            </p>
            <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans leading-relaxed">
              When students get to college, they realize they have spent years memorizing without ever 
              experiencing the exhilaration of building a web app, committing code to GitHub, or solving 
              a live problem. We wanted to destroy that model.
            </p>
          </div>

          <div className="mc-card p-6 sm:p-8 bg-[#181724] space-y-4">
            <span className="font-pixel text-[9px] text-[#4dedf4] mc-diamond-text">
              OUR EXPEDITION PHILOSOPHY
            </span>
            <h3 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow">
              Build Like You're Playing Minecraft
            </h3>
            <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans leading-relaxed">
              In Minecraft, nobody gives you a 400-page manual on how to craft a pickaxe. You punch a tree, 
              collect wood, craft planks, experiment, fail, and build a fortress.
            </p>
            <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans leading-relaxed">
              Software engineering is exactly the same! When you teach kids through quest biomes, 
              reward them with advancements, and give them real mentors from top engineering colleges, 
              they learn faster than in any traditional classroom.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 mc-card bg-[#141320] border-4 border-[#55ff55] text-center shadow-[0_0_30px_rgba(85,255,85,0.25)] space-y-4">
          <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            READY TO JOIN OUR GUILD?
          </span>
          <h3 className="text-2xl sm:text-3xl font-pixel text-white mc-text-shadow">
            Start Your Journey with Chirag, Eshan & Ankit
          </h3>
          <p className="text-xs sm:text-sm text-[#b0b0b0] font-sans max-w-xl mx-auto leading-relaxed">
            Choose between the Junior Wing (Classes 6–8 for ₹999) or Senior Wing (Classes 9–12 for ₹1,199). 
            Live cohorts, hands-on builds, and lifelong community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              to="/batches"
              className="w-full sm:w-auto mc-btn mc-btn-green px-8 py-3.5 text-xs text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <span>EXPLORE BATCHES & ENROLL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/learn"
              className="w-full sm:w-auto mc-btn mc-btn-diamond px-7 py-3.5 text-xs text-white flex items-center justify-center gap-2"
            >
              <span>VIEW ISLAND BIOMES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
