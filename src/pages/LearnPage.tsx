import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { WeekCard } from '../components/cards/WeekCard';
import { useContentData } from '../hooks/useContentData';
import { progressService } from '../services/progressService';

export const LearnPage: React.FC = () => {
  const { weeks } = useContentData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'completed' | 'in-progress'>('all');

  const overallProg = progressService.getOverallProgress(weeks);
  const currentLevel = Math.max(1, overallProg.completedCount);

  // Filter weeks
  const filteredWeeks = weeks.filter(week => {
    const matchesSearch =
      week.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      week.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      week.topics.some(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    const prog = progressService.getWeekProgress(week);
    if (filterMode === 'completed') return prog.percentage === 100;
    if (filterMode === 'in-progress') return prog.percentage > 0 && prog.percentage < 100;
    return true;
  });

  return (
    <div className="relative pt-24 sm:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Header Section */}
      <div className="space-y-4 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 mc-card bg-[#1e1a33] font-pixel text-[9px] text-[#55ff55] mc-xp-text">
          <span>⚔️ PLAYER ADVENTURE INVENTORY</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-4xl font-pixel text-white mc-text-shadow">
              Your Learning Island
            </h1>
            <p className="text-sm sm:text-base text-[#a0a0a0] mt-1 font-sans">
              Select an island biome and continue your coding expedition.
            </p>
          </div>

          {/* Minecraft Player Status & XP Level Box */}
          <div className="p-4 mc-card bg-[#1a1924] border-3 border-[#3f3e4d] flex items-center gap-5 min-w-[280px]">
            <div className="w-14 h-14 mc-slot flex flex-col items-center justify-center">
              <span className="font-pixel text-lg mc-xp-text font-black leading-none">
                {currentLevel}
              </span>
              <span className="font-silkscreen text-[9px] text-[#55ff55] mt-0.5">LEVEL</span>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between font-silkscreen text-[11px]">
                <span className="text-[#a0a0a0]">Island XP Progress:</span>
                <span className="font-pixel text-[9px] mc-xp-text">
                  {overallProg.completedCount}/{overallProg.totalCount} ({overallProg.percentage}%)
                </span>
              </div>
              <div className="mc-xp-bar">
                <div
                  className="mc-xp-fill"
                  style={{ width: `${overallProg.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minecraft Inventory Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 mc-card bg-[#1e1d27] mb-8">
        {/* Search Input styled like Minecraft Anvil search slot */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#55ff55] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search quests & biomes..."
            className="w-full pl-10 pr-4 py-2 bg-[#121218] border-2 border-black text-white placeholder-[#666] font-silkscreen text-xs focus:outline-none focus:border-[#55ff55]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilterMode('all')}
            className={`mc-btn px-3 py-1.5 text-[11px] ${
              filterMode === 'all' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            All Biomes ({weeks.length})
          </button>
          <button
            onClick={() => setFilterMode('in-progress')}
            className={`mc-btn px-3 py-1.5 text-[11px] ${
              filterMode === 'in-progress' ? 'mc-btn-diamond text-white' : 'text-[#a0a0a0]'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilterMode('completed')}
            className={`mc-btn px-3 py-1.5 text-[11px] ${
              filterMode === 'completed' ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Weeks Grid */}
      {filteredWeeks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeeks.map((week, idx) => (
            <WeekCard key={week.id} week={week} index={idx} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-10 text-center mc-card max-w-lg mx-auto">
          <div className="text-3xl mb-2">🧭</div>
          <h3 className="font-pixel text-sm text-white mc-text-shadow mb-1">
            No Island Biomes Found
          </h3>
          <p className="text-xs text-[#a0a0a0] mb-4 font-sans">
            We couldn't find any quests matching your search. Try resetting your search filter!
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterMode('all');
            }}
            className="mc-btn mc-btn-green px-4 py-2 text-xs text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
