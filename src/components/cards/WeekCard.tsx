import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Video, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { Week } from '../../types/content';
import { progressService } from '../../services/progressService';

interface WeekCardProps {
  week: Week;
  index: number;
}

// Minecraft item icon visuals per week
const biomeIcons: Record<number, { symbol: string; label: string; bg: string }> = {
  1: { symbol: '⛏️', label: 'Overworld Plains', bg: 'bg-[#5b8731]' },
  2: { symbol: '🧱', label: 'Crafting Workshop', bg: 'bg-[#866043]' },
  3: { symbol: '⚡', label: 'Redstone Circuits', bg: 'bg-[#ff2200]' },
  4: { symbol: '🔥', label: 'Nether Expedition', bg: 'bg-[#151324]' },
  5: { symbol: '⚔️', label: 'The End Battle', bg: 'bg-[#248f95]' },
};

export const WeekCard: React.FC<WeekCardProps> = ({ week, index }) => {
  const weekProg = progressService.getWeekProgress(week);
  const totalVideos = week.topics.filter(t => t.video && t.video.youtubeUrl).length;
  const totalResources = week.topics.reduce((acc, t) => acc + (t.resources ? t.resources.length : 0), 0);

  const biome = biomeIcons[week.number] || { symbol: '🏝️', label: 'Island Biome', bg: 'bg-[#5b8731]' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <Link
        to={`/week/${week.id}`}
        className="block h-full p-6 mc-card hover:-translate-y-1.5 transition-all flex flex-col justify-between"
      >
        <div>
          {/* Header Badge & Item Frame Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[9px] px-2.5 py-1 bg-black text-[#fdb813] border-2 border-[#555] mc-gold-text">
                BIOME 0{week.number}
              </span>
              {weekProg.percentage === 100 && (
                <span className="font-pixel text-[8px] px-2 py-1 bg-[#1a3800] text-[#55ff55] border-2 border-[#55ff55] mc-xp-text flex items-center gap-1">
                  <span>✔</span> 100%
                </span>
              )}
            </div>

            {/* Minecraft Item Frame Slot */}
            <div className="w-12 h-12 mc-slot flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <span>{biome.symbol}</span>
            </div>
          </div>

          {/* Subtitle tag */}
          <div className="font-silkscreen text-[11px] text-[#55ff55] mb-1 mc-xp-text">
            {biome.label}
          </div>

          {/* Title */}
          <h3 className="font-pixel text-sm sm:text-base text-white mc-text-shadow mb-3 leading-snug group-hover:text-[#4dedf4] transition-colors">
            {week.title}
          </h3>

          {/* Description (clean sans-serif for 100% legibility!) */}
          <p className="text-xs sm:text-sm text-[#a0a0a0] leading-relaxed mb-6 line-clamp-2">
            {week.description}
          </p>
        </div>

        <div>
          {/* Metadata counts (hotbar item counters) */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#d0d0d0] font-silkscreen mb-4 pb-4 border-b-2 border-black/40">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#55ff55]" />
              <span>{week.topics.length} Quests</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#ff2200]" />
              <span>{totalVideos} Streams</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#4dedf4]" />
              <span>{totalResources} Scrolls</span>
            </span>
          </div>

          {/* Authentic Minecraft Experience Bar */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-center justify-between font-silkscreen text-[11px]">
              <span className="text-[#888]">Biome Progress:</span>
              <span className="font-pixel text-[9px] mc-xp-text font-bold">
                {weekProg.completedCount}/{weekProg.totalCount} XP ({weekProg.percentage}%)
              </span>
            </div>
            <div className="mc-xp-bar">
              <div
                className="mc-xp-fill"
                style={{ width: `${weekProg.percentage}%` }}
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="mc-btn mc-btn-green py-2 px-3 text-center text-xs text-white flex items-center justify-center gap-2 group-hover:bg-[#5b8f30]">
            <span>ENTER BIOME</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
