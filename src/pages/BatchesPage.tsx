import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  ArrowRight, 
  X
} from 'lucide-react';

interface BatchInfo {
  id: 'junior' | 'senior';
  title: string;
  subtitle: string;
  wings: string;
  grades: string;
  ageGroup: string;
  price: number;
  originalPrice: number;
  badge: string;
  badgeColor: string;
  borderHover: string;
  accentBg: string;
  accentText: string;
  btnClass: string;
  description: string;
  highlights: string[];
  curriculum: {
    week: string;
    topic: string;
    desc: string;
  }[];
  schedule: {
    days: string;
    time: string;
    mode: string;
    batchSize: string;
    duration: string;
  };
  mentors: string;
  perks: string[];
}

export const BatchesPage: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState<'all' | 'junior' | 'senior'>('all');
  const [modalBatch, setModalBatch] = useState<BatchInfo | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentEmail: '',
    phone: '',
    grade: '',
    schoolName: '',
    preferredSlot: 'Weekend Evening (Sat & Sun)',
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const batches: BatchInfo[] = [
    {
      id: 'junior',
      title: 'Junior Wing Cohort',
      subtitle: 'The Redstone Apprentice',
      wings: 'Junior Wing (Batches of 2 Wings)',
      grades: 'Classes 6, 7 & 8',
      ageGroup: 'Ages 10 – 13',
      price: 999,
      originalPrice: 1999,
      badge: 'TIER: JUNIOR CRAFTER',
      badgeColor: 'text-[#55ff55]',
      borderHover: 'hover:border-[#55ff55]',
      accentBg: 'bg-[#1e2e1a]',
      accentText: 'text-[#55ff55]',
      btnClass: 'mc-btn-green',
      description:
        'A fun, highly visual, gamified coding adventure crafted for middle school students. We transition kids from block concepts to real programming logic, interactive web structures, and algorithmic puzzles without the boring syntax overload.',
      highlights: [
        'Introductory Algorithmic Thinking & Flowcharts',
        'Visual Code & Scratch to Python/JS concepts',
        'Crafting Web Pages: HTML5 & Pixel Styling',
        'Building Interactive Mini-Games & Puzzles',
        'Digital Citizenship, Safe Web & Logic Quests',
      ],
      curriculum: [
        {
          week: 'Week 1',
          topic: 'Overworld Logic & Algorithmic Thinking',
          desc: 'Variables, loops, and decision trees explained using Minecraft inventory mechanics.',
        },
        {
          week: 'Week 2',
          topic: 'Crafting Table: Web Blocks with HTML5',
          desc: 'Build your first real website layout with headings, images, and cyber style buttons.',
        },
        {
          week: 'Week 3',
          topic: 'CSS Styler: Colors, Flexbox & Pixel Art',
          desc: 'Design beautiful retro game interfaces, glowing buttons, and responsive cards.',
        },
        {
          week: 'Week 4',
          topic: 'Redstone Circuits: JavaScript Interactions',
          desc: 'Add life to buttons: click counters, secret sound triggers, and mini quiz engines.',
        },
        {
          week: 'Week 5',
          topic: 'The Ender Showcase: Final Mini-Game',
          desc: 'Present your completed game project to friends, parents, and mentors live!',
        },
      ],
      schedule: {
        days: 'Every Saturday & Sunday (Weekends)',
        time: '4:00 PM – 5:30 PM IST',
        mode: 'Live Interactive Sessions on Google Meet + Discord Community',
        batchSize: 'Maximum 15 Students per mentor group',
        duration: '5 Weeks Intensive + Lifelong Community Access',
      },
      mentors: 'Mentored live by Punjab Engineering College (PEC) CSE educators',
      perks: [
        'Junior Crafter Certificate of Completion',
        '10+ Hands-on coding challenges & starter kits',
        'Weekly 1-on-1 doubt clearing office hours',
        'Parent progress reporting & showcase demo day',
        'Official CodersIsland Discord Junior Crafter role',
      ],
    },
    {
      id: 'senior',
      title: 'Senior Wing Cohort',
      subtitle: 'The Netherite Architect',
      wings: 'Senior Wing (Batches of 2 Wings)',
      grades: 'Classes 9, 10, 11 & 12',
      ageGroup: 'Ages 14 – 18',
      price: 1199,
      originalPrice: 2499,
      badge: 'TIER: SENIOR ARCHITECT',
      badgeColor: 'text-[#4dedf4]',
      borderHover: 'hover:border-[#4dedf4]',
      accentBg: 'bg-[#162736]',
      accentText: 'text-[#4dedf4]',
      btnClass: 'mc-btn-diamond',
      description:
        'A comprehensive, industry-grade software engineering launchpad for high school students. Master real-world full-stack web development, algorithmic complexity, Git version control, and modern AI tooling to build production-grade web applications.',
      highlights: [
        'Full-Stack Web Foundations (HTML5, Modern CSS, JS/TS)',
        'Algorithmic Complexity ($O(N)$) & Problem-Solving intuition',
        'Git & GitHub Workflow (Commits, Branches, Pull Requests)',
        'Integrating Real-world APIs & Practical AI Tools (LLMs)',
        'Building & Deploying a flagship Capstone Project live on the web',
      ],
      curriculum: [
        {
          week: 'Week 1',
          topic: 'Computational Thinking & Algorithmic Foundations',
          desc: 'Deep dive into data types, memory, sorting, time complexity, and problem decomposition.',
        },
        {
          week: 'Week 2',
          topic: 'Modern Responsive Web Architecture',
          desc: 'Semantic HTML5, CSS Grid, Flexbox, Tailwind mechanics, and interactive UI systems.',
        },
        {
          week: 'Week 3',
          topic: 'Advanced JavaScript: DOM, Async & State',
          desc: 'Event loops, asynchronous fetching, APIs, and building dynamic single-page features.',
        },
        {
          week: 'Week 4',
          topic: 'Nether Expedition: Git, GitHub & Team Workflow',
          desc: 'Version control like real software engineers: branching, pull requests, and CI/CD basics.',
        },
        {
          week: 'Week 5',
          topic: 'The End Battle: Capstone Project & AI Integrations',
          desc: 'Build, deploy to Vercel/Render, leverage AI prompt workflows, and publish to your GitHub portfolio!',
        },
      ],
      schedule: {
        days: 'Every Saturday & Sunday (Weekends)',
        time: '6:00 PM – 7:45 PM IST',
        mode: 'Live Interactive Studio Sessions + Code Reviews on GitHub',
        batchSize: 'Maximum 15 Students per mentor group',
        duration: '5 Weeks Intensive + Portfolio Mentorship',
      },
      mentors: 'Mentored live by Punjab Engineering College (PEC) CSE engineers & CP leads',
      perks: [
        'Senior Architect Certificate of Excellence',
        'Verified GitHub Portfolio Project for college & hackathons',
        'Competitive Programming fundamentals & tips from PEC CP leads',
        '1-on-1 Code reviews and engineering feedback',
        'Hackathon preparation & tech roadmap consultation',
      ],
    },
  ];

  const faqs = [
    {
      q: 'What does "Batches of 2 Wings" mean?',
      a: 'We divide our students into two specialized age-appropriate cohorts: Junior Wing (Classes 6–8) and Senior Wing (Classes 9–12). This ensures that younger learners get gamified, visual learning without intimidation, while older students dive into real software engineering, Git, and algorithmic complexity.',
    },
    {
      q: 'Do students need any prior coding experience?',
      a: 'Zero prior experience is required! For the Junior Wing, we start from absolute fundamentals of logic and visual blocks. For the Senior Wing, even if a student has never written code, we build up computational intuition from scratch with friendly, step-by-step guidance.',
    },
    {
      q: 'What hardware or software do students need?',
      a: 'All you need is a laptop or desktop computer (Windows, Mac, or Linux) with a modern web browser (Google Chrome, Firefox, or Edge) and an internet connection. All coding tools and IDEs used are 100% free and cloud-accessible.',
    },
    {
      q: 'What if a student misses a live weekend session?',
      a: 'Every single live workshop is recorded in high definition and posted to the student portal along with code notes, scrolls, and exercises. Mentors are also available throughout the week on Discord/WhatsApp to answer questions.',
    },
    {
      q: 'Who will be teaching the batches?',
      a: 'All sessions are taught live by Computer Science & Engineering students from Punjab Engineering College (PEC Chandigarh)—Chirag Dhama, Eshan Sharma, and Ankit Gupta—who combine deep technical acumen with real passion for student mentorship.',
    },
    {
      q: 'How does payment work?',
      a: 'The price (₹999 for Junior Wing and ₹1,199 for Senior Wing) is a one-time fee for the entire 5-week expedition with lifetime access to recordings and community. There are no recurring fees or hidden charges.',
    },
  ];

  const handleEnrollClick = (batch: BatchInfo) => {
    setModalBatch(batch);
    setIsSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentEmail || !formData.phone) {
      alert('Please fill in student name, email, and contact number.');
      return;
    }

    // Trigger Minecraft celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#55ff55', '#4dedf4', '#fdb813', '#a855f7'],
    });

    setIsSuccess(true);
  };

  return (
    <div className="relative pt-24 sm:pt-32 pb-20">
      {/* 1. HERO HEADER */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        {/* Advancement Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mc-card bg-[#1a1924] text-xs mb-4">
          <span className="w-2.5 h-2.5 bg-[#fdb813] border border-black animate-pulse" />
          <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            BATCH EXPEDITIONS OPEN
          </span>
          <span className="text-[#666]">|</span>
          <span className="font-silkscreen text-[11px] text-[#55ff55]">
            2 DISTINCT WINGS
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-pixel text-white mc-text-shadow leading-tight max-w-4xl mx-auto mb-4">
          CHOOSE YOUR <span className="text-[#55ff55] mc-xp-text">COHORT WING</span>
        </h1>

        <p className="font-silkscreen text-sm sm:text-base text-[#fdb813] mc-gold-text mb-4">
          Junior Wing: ₹999 INR &nbsp;•&nbsp; Senior Wing: ₹1,199 INR
        </p>

        <p className="text-sm sm:text-base text-[#b0b0b0] max-w-2xl mx-auto font-sans leading-relaxed">
          We separate learners into 2 tailored wings so every student learns at the perfect pace.
          Interactive live sessions, hands-on projects, and mentorship from Punjab Engineering College CSE mentors.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedWing('all')}
            className={`mc-btn px-4 py-2 text-xs ${
              selectedWing === 'all' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            All Wings
          </button>
          <button
            onClick={() => setSelectedWing('junior')}
            className={`mc-btn px-4 py-2 text-xs ${
              selectedWing === 'junior' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            Junior Wing (Classes 6–8) • ₹999
          </button>
          <button
            onClick={() => setSelectedWing('senior')}
            className={`mc-btn px-4 py-2 text-xs ${
              selectedWing === 'senior' ? 'mc-btn-diamond text-white' : 'text-[#a0a0a0]'
            }`}
          >
            Senior Wing (Classes 9–12) • ₹1,199
          </button>
        </div>
      </section>

      {/* 2. BATCH CARDS GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {batches
            .filter((b) => selectedWing === 'all' || selectedWing === b.id)
            .map((batch) => {
              return (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`mc-card flex flex-col justify-between p-6 sm:p-8 ${batch.borderHover} transition-all`}
                >
                  <div className="space-y-6">
                    {/* Top Tier Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black/60 pb-4">
                      <div>
                        <span className={`font-pixel text-[10px] tracking-wider ${batch.badgeColor}`}>
                          {batch.badge}
                        </span>
                        <h2 className="text-2xl font-pixel text-white mc-text-shadow mt-1">
                          {batch.title}
                        </h2>
                        <span className="font-silkscreen text-xs text-[#a0a0a0]">
                          {batch.subtitle} &nbsp;•&nbsp; {batch.grades} ({batch.ageGroup})
                        </span>
                      </div>

                      {/* Pricing Box */}
                      <div className="text-right mc-slot p-2.5 px-4 bg-[#15141f]">
                        <div className="text-[10px] font-silkscreen text-[#777] line-through">
                          ₹{batch.originalPrice.toLocaleString('en-IN')} INR
                        </div>
                        <div className="font-pixel text-2xl sm:text-3xl text-[#55ff55] mc-xp-text">
                          ₹{batch.price.toLocaleString('en-IN')}
                        </div>
                        <div className="font-silkscreen text-[9px] text-[#fdb813] mc-gold-text">
                          One-time • Full 5 Weeks
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#c0c0c0] leading-relaxed font-sans">
                      {batch.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-pixel text-[10px] uppercase text-[#fdb813] mc-gold-text">
                        ★ What You Will Master
                      </h4>
                      <ul className="space-y-2">
                        {batch.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#d0d0d0] font-sans">
                            <span className="w-4 h-4 rounded-none bg-black border border-[#55ff55] text-[#55ff55] flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                              ✓
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Batch Schedule Details */}
                    <div className="p-4 mc-slot bg-[#161520] space-y-2 text-xs font-sans">
                      <div className="flex items-center gap-2 text-[#fdb813] font-silkscreen text-[11px]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Schedule & Format:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#a0a0a0] text-xs">
                        <div>
                          <strong className="text-white">Live Days:</strong> {batch.schedule.days}
                        </div>
                        <div>
                          <strong className="text-white">Timing:</strong> {batch.schedule.time}
                        </div>
                        <div className="sm:col-span-2">
                          <strong className="text-white">Mode:</strong> {batch.schedule.mode}
                        </div>
                        <div className="sm:col-span-2">
                          <strong className="text-white">Cohort Size:</strong> {batch.schedule.batchSize}
                        </div>
                      </div>
                    </div>

                    {/* 5-Week Biome Roadmap Preview */}
                    <div className="space-y-2.5">
                      <h4 className="font-pixel text-[10px] uppercase text-[#4dedf4] mc-diamond-text">
                        🗺️ 5-Week Quest Syllabus
                      </h4>
                      <div className="space-y-2">
                        {batch.curriculum.map((c, i) => (
                          <div
                            key={i}
                            className="p-2.5 bg-black/40 border border-[#333] hover:border-[#555] transition-colors"
                          >
                            <div className="flex items-center justify-between text-xs font-silkscreen text-white mb-0.5">
                              <span className="text-[#55ff55]">{c.week}</span>
                              <span className="text-white font-medium">{c.topic}</span>
                            </div>
                            <p className="text-[11px] text-[#909090] font-sans leading-snug">
                              {c.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perks Box */}
                    <div className="p-3 bg-[#1e1d27] border-2 border-dashed border-[#444] space-y-1.5">
                      <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
                        🎁 ENCHANTMENTS INCLUDED:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#b0b0b0] font-sans">
                        {batch.perks.map((p, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="text-[#4dedf4]">✦</span>
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enroll CTA */}
                  <div className="pt-6 border-t-2 border-black/60 mt-6">
                    <button
                      onClick={() => handleEnrollClick(batch)}
                      className={`w-full py-4 text-sm font-silkscreen text-white flex items-center justify-center gap-2 shadow-lg ${batch.btnClass}`}
                    >
                      <span>ENROLL IN {batch.title.toUpperCase()} (₹{batch.price})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center font-silkscreen text-[10px] text-[#707070] mt-2">
                      🔒 Instant Confirmation & Discord Invite • 100% Satisfaction Guarantee
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* 3. COMPARISON MATRIX */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            SIDE-BY-SIDE INVENTORY
          </span>
          <h3 className="text-2xl font-pixel text-white mc-text-shadow mt-1">
            Wing Comparison Table
          </h3>
        </div>

        <div className="mc-card p-4 sm:p-6 bg-[#161520] overflow-x-auto">
          <table className="w-full text-left text-xs font-sans min-w-[550px]">
            <thead>
              <tr className="border-b-2 border-black font-silkscreen text-[11px] text-[#a0a0a0]">
                <th className="py-3 px-3">FEATURE</th>
                <th className="py-3 px-3 text-[#55ff55]">JUNIOR WING (₹999)</th>
                <th className="py-3 px-3 text-[#4dedf4]">SENIOR WING (₹1,199)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2935] text-[#d0d0d0]">
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Target Classes</td>
                <td className="py-3 px-3 text-[#55ff55]">Classes 6, 7 & 8</td>
                <td className="py-3 px-3 text-[#4dedf4]">Classes 9, 10, 11 & 12</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Batch Fee</td>
                <td className="py-3 px-3 font-pixel text-sm text-[#55ff55]">₹999 INR</td>
                <td className="py-3 px-3 font-pixel text-sm text-[#4dedf4]">₹1,199 INR</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Core Focus</td>
                <td className="py-3 px-3">Visual Logic, Scratch to Python, Fun Web Pages</td>
                <td className="py-3 px-3">Full-Stack Web, Modern JS/TS, Algorithms & AI</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Tooling</td>
                <td className="py-3 px-3">Browser Sandbox, Scratch, Replit</td>
                <td className="py-3 px-3">VS Code, Git, GitHub, Terminal, Vercel</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Project Deliverable</td>
                <td className="py-3 px-3">Interactive Mini-Game & Personal Web Page</td>
                <td className="py-3 px-3">Production Web Application deployed live on GitHub</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Mentorship</td>
                <td className="py-3 px-3">PEC CSE Technical & Creative Educators</td>
                <td className="py-3 px-3">PEC CSE Engineers + Competitive Programming Leads</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-white">Certificate</td>
                <td className="py-3 px-3">Junior Crafter Certificate</td>
                <td className="py-3 px-3">Senior Architect Verified Certificate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text">
            KNOWLEDGE BASE
          </span>
          <h3 className="text-2xl font-pixel text-white mc-text-shadow mt-1">
            Questions from Students & Parents
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="mc-card bg-[#1a1924] cursor-pointer transition-all"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className="p-4 flex items-center justify-between text-xs sm:text-sm font-silkscreen text-white">
                <span className="flex items-center gap-2">
                  <span className="text-[#fdb813]">Q.</span>
                  {faq.q}
                </span>
                <span className="text-[#55ff55] font-pixel text-base">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </div>
              {activeFaq === idx && (
                <div className="px-4 pb-4 pt-1 text-xs text-[#b0b0b0] font-sans border-t border-black/40 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. ENROLLMENT MODAL */}
      <AnimatePresence>
        {modalBatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="mc-card bg-[#181724] border-4 border-[#3f3e4d] max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalBatch(null)}
                className="absolute top-4 right-4 mc-btn p-1.5 text-white"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSuccess ? (
                <div className="space-y-5">
                  <div className="border-b-2 border-black pb-3">
                    <span className={`font-pixel text-[9px] ${modalBatch.badgeColor}`}>
                      {modalBatch.badge}
                    </span>
                    <h3 className="font-pixel text-xl text-white mc-text-shadow mt-1">
                      Enroll in {modalBatch.title}
                    </h3>
                    <p className="font-silkscreen text-xs text-[#fdb813] mc-gold-text mt-0.5">
                      Fee: ₹{modalBatch.price} INR (One-Time Expedition Pass)
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-3.5 font-sans text-xs">
                    <div>
                      <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full mc-slot px-3 py-2 text-white bg-black/60 border border-[#444] focus:border-[#55ff55] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                          Parent/Student Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={formData.parentEmail}
                          onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                          className="w-full mc-slot px-3 py-2 text-white bg-black/60 border border-[#444] focus:border-[#55ff55] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full mc-slot px-3 py-2 text-white bg-black/60 border border-[#444] focus:border-[#55ff55] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                          Class / Grade *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={modalBatch.id === 'junior' ? 'e.g. Class 7' : 'e.g. Class 10'}
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className="w-full mc-slot px-3 py-2 text-white bg-black/60 border border-[#444] focus:border-[#55ff55] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                          School Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Delhi Public School"
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          className="w-full mc-slot px-3 py-2 text-white bg-black/60 border border-[#444] focus:border-[#55ff55] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#a0a0a0] font-silkscreen text-[11px] mb-1">
                        Preferred Weekend Slot
                      </label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full mc-slot px-3 py-2 text-white bg-[#100f18] border border-[#444] outline-none"
                      >
                        <option value="Saturday & Sunday (Standard Slot)">
                          {modalBatch.schedule.time} — Standard Weekend Cohort
                        </option>
                        <option value="Flexible / Recorded Catchup">
                          Flexible / Weekly Catch-up + Mentor Doubt Sessions
                        </option>
                      </select>
                    </div>

                    {/* Order Summary Box */}
                    <div className="p-3 bg-black/70 border-2 border-[#333] space-y-1">
                      <div className="flex justify-between text-xs font-silkscreen">
                        <span className="text-[#a0a0a0]">Expedition Pass:</span>
                        <span className="text-white">{modalBatch.title}</span>
                      </div>
                      <div className="flex justify-between text-xs font-silkscreen">
                        <span className="text-[#a0a0a0]">Mentor Group:</span>
                        <span className="text-[#55ff55]">PEC CSE Mentors</span>
                      </div>
                      <div className="flex justify-between text-sm font-pixel text-[#55ff55] pt-1 border-t border-[#333]">
                        <span>Total Payable:</span>
                        <span>₹{modalBatch.price} INR</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`w-full py-3.5 text-sm font-silkscreen text-white flex items-center justify-center gap-2 ${modalBatch.btnClass}`}
                    >
                      <span>CONFIRM & GET ADMISSION PASS (₹{modalBatch.price})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Confirmation Pass */
                <div className="text-center space-y-5 py-2">
                  <div className="w-16 h-16 mx-auto bg-[#4a7726] border-2 border-black flex items-center justify-center text-3xl shadow-lg">
                    ✨
                  </div>

                  <div>
                    <span className="font-pixel text-[9px] text-[#55ff55] mc-xp-text">
                      ADMISSION CONFIRMED!
                    </span>
                    <h3 className="font-pixel text-xl sm:text-2xl text-white mc-text-shadow mt-1">
                      Welcome to CodersIsland!
                    </h3>
                    <p className="font-silkscreen text-xs text-[#fdb813] mc-gold-text mt-1">
                      Player: {formData.studentName} ({modalBatch.title})
                    </p>
                  </div>

                  {/* Minecraft Inventory Admission Ticket */}
                  <div className="p-4 mc-slot bg-[#12111d] text-left space-y-2 font-silkscreen text-xs">
                    <div className="flex justify-between border-b border-[#333] pb-1.5">
                      <span className="text-[#888]">EXPEDITION TICKET:</span>
                      <span className="text-[#55ff55]">#CI-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Batch Wing:</span>
                      <span className="text-white">{modalBatch.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Class:</span>
                      <span className="text-white">{formData.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Price Paid:</span>
                      <span className="text-[#55ff55]">₹{modalBatch.price} INR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Mentors:</span>
                      <span className="text-[#fdb813]">Chirag, Eshan & Ankit (PEC CSE)</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#a0a0a0] font-sans">
                    A confirmation email and Google Meet / Discord invite has been sent to{' '}
                    <strong className="text-white">{formData.parentEmail}</strong> and WhatsApp{' '}
                    <strong className="text-white">{formData.phone}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <Link
                      to="/learn"
                      onClick={() => setModalBatch(null)}
                      className="mc-btn mc-btn-green py-2.5 px-4 text-xs text-white flex-1 text-center"
                    >
                      Explore Biomes Now
                    </Link>
                    <button
                      onClick={() => setModalBatch(null)}
                      className="mc-btn py-2.5 px-4 text-xs text-white flex-1"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
