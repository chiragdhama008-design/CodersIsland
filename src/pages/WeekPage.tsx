import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Video, BookOpen } from 'lucide-react';
import { useContentData } from '../hooks/useContentData';
import { TopicCard } from '../components/cards/TopicCard';
import { progressService } from '../services/progressService';

const biomeSymbols: Record<number, string> = {
  1: '⛏️',
  2: '🧱',
  3: '⚡',
  4: '🔥',
  5: '⚔️',
};

export const WeekPage: React.FC = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const { weeks } = useContentData();
  const [, setRefreshTrigger] = useState(0);

  const week = weeks.find(w => w.id === weekId || String(w.number) === weekId);

  if (!week) {
    return (
      <div className="pt-36 pb-20 max-w-2xl mx-auto px-4 text-center">
        <div className="p-10 mc-card">
          <div className="text-4xl mb-3">🧭</div>
          <h2 className="font-pixel text-base text-white mc-text-shadow mb-2">
            Biome Not Found!
          </h2>
          <p className="text-[#a0a0a0] text-xs mb-6 font-sans">
            The sector you are looking for hasn't spawned on the island yet.
          </p>
          <Link
            to="/learn"
            className="mc-btn mc-btn-green inline-flex items-center gap-2 px-6 py-3 text-xs text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Biome Map</span>
          </Link>
        </div>
      </div>
    );
  }

  const weekProg = progressService.getWeekProgress(week);
  const totalVideos = week.topics.filter(t => t.video && t.video.youtubeUrl).length;
  const totalResources = week.topics.reduce((acc, t) => acc + (t.resources ? t.resources.length : 0), 0);
  const iconSymbol = biomeSymbols[week.number] || '🏝️';

  return (
    <div className="relative pt-24 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Minecraft Breadcrumb */}
      <div className="flex items-center gap-2 font-silkscreen text-xs text-[#888] mb-6">
        <Link to="/" className="hover:text-[#55ff55] transition-colors">Spawn Point</Link>
        <span>&gt;</span>
        <Link to="/learn" className="hover:text-[#55ff55] transition-colors">Biomes</Link>
        <span>&gt;</span>
        <span className="text-[#fdb813] mc-gold-text font-pixel text-[10px]">Biome 0{week.number}</span>
      </div>

      {/* Week Header Banner */}
      <div className="p-6 sm:p-8 mc-card bg-[#1b1a25] border-4 border-[#3f3e4d] mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left info */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[9px] px-2.5 py-1 bg-black text-[#55ff55] border-2 border-[#55ff55] mc-xp-text uppercase">
                BIOME 0{week.number} EXPEDITION
              </span>
              <div className="w-10 h-10 mc-slot flex items-center justify-center text-xl">
                <span>{iconSymbol}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-pixel text-white mc-text-shadow leading-snug">
              {week.title}
            </h1>

            <p className="text-sm sm:text-base text-[#c0c0c0] leading-relaxed font-sans max-w-3xl">
              {week.description}
            </p>

            {/* Learning Goals Checklist */}
            {week.learningGoals && week.learningGoals.length > 0 && (
              <div className="pt-2">
                <h4 className="font-pixel text-[10px] text-[#fdb813] mc-gold-text uppercase mb-2">
                  ⚔️ Sector Quest Objectives:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-silkscreen text-xs text-[#d0d0d0]">
                  {week.learningGoals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-black/40 p-2 border border-[#333]">
                      <span className="text-[#55ff55]">✔</span>
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-4 p-5 mc-card bg-[#15141f] border-2 border-black space-y-3">
            <div className="flex items-center justify-between font-silkscreen text-xs">
              <span className="text-[#888]">Biome Progress:</span>
              <span className="mc-xp-text font-pixel text-xs">
                {weekProg.completedCount} / {weekProg.totalCount} Quests
              </span>
            </div>

            {/* Experience Bar */}
            <div className="mc-xp-bar">
              <div
                className="mc-xp-fill"
                style={{ width: `${weekProg.percentage}%` }}
              />
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2 text-center font-silkscreen text-xs text-[#a0a0a0]">
              <div className="p-2 mc-slot">
                <div className="font-pixel text-base text-[#ff5533]">{totalVideos}</div>
                <div className="text-[10px]">Recordings</div>
              </div>
              <div className="p-2 mc-slot">
                <div className="font-pixel text-base text-[#4dedf4]">{totalResources}</div>
                <div className="text-[10px]">Scrolls</div>
              </div>
            </div>

            <Link
              to="/learn"
              className="w-full mc-btn py-2 text-center text-xs text-white block mt-2"
            >
              ← Back to Biome Inventory
            </Link>
          </div>
        </div>
      </div>

      {/* Workshop Topics Section */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-pixel text-[9px] text-[#fdb813] mc-gold-text uppercase">
              SECTOR QUESTS
            </span>
            <h2 className="text-xl sm:text-2xl font-pixel text-white mc-text-shadow mt-1">
              Workshop Topics
            </h2>
          </div>

          <span className="font-silkscreen text-xs text-[#a0a0a0]">
            {week.topics.length} Interactive Quests
          </span>
        </div>

        {week.topics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {week.topics.map((topic, idx) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={idx}
                onProgressChange={() => setRefreshTrigger(prev => prev + 1)}
              />
            ))}
          </div>
        ) : (
          <div className="p-10 text-center mc-card max-w-md mx-auto">
            <div className="text-3xl mb-2">⛏️</div>
            <h3 className="font-pixel text-sm text-white mc-text-shadow mb-1">
              Biome Under Construction!
            </h3>
            <p className="text-xs text-[#888] font-sans mb-4">
              No quests have spawned in this sector yet. Check back soon!
            </p>
            <Link to="/learn" className="mc-btn mc-btn-green px-4 py-2 text-xs text-white">
              Explore Other Biomes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
