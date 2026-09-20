import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Video, ArrowRight, Compass } from 'lucide-react';
import { Week } from '../../types/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  weeks: Week[];
}

interface SearchResultItem {
  type: 'topic' | 'week' | 'resource';
  title: string;
  subtitle: string;
  link: string;
  badge: string;
  badgeColor: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, weeks }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      const defaultItems: SearchResultItem[] = weeks.map(w => ({
        type: 'week',
        title: `Biome 0${w.number}: ${w.title}`,
        subtitle: w.tagline,
        link: `/week/${w.id}`,
        badge: 'Biome',
        badgeColor: 'text-[#55ff55] border-[#55ff55]',
      }));
      setResults(defaultItems);
      return;
    }

    const q = query.toLowerCase();
    const matches: SearchResultItem[] = [];

    // Search weeks
    for (const week of weeks) {
      if (week.title.toLowerCase().includes(q) || week.description.toLowerCase().includes(q) || week.tagline.toLowerCase().includes(q)) {
        matches.push({
          type: 'week',
          title: `Biome 0${week.number}: ${week.title}`,
          subtitle: week.tagline,
          link: `/week/${week.id}`,
          badge: 'Biome',
          badgeColor: 'text-[#55ff55] border-[#55ff55]',
        });
      }

      // Search topics
      for (const topic of week.topics) {
        if (topic.title.toLowerCase().includes(q) || topic.description.toLowerCase().includes(q)) {
          matches.push({
            type: 'topic',
            title: topic.title,
            subtitle: `Biome 0${week.number} • ${topic.video ? topic.video.duration : 'Quest'}`,
            link: `/topic/${topic.id}`,
            badge: 'Quest',
            badgeColor: 'text-[#fdb813] border-[#fdb813]',
          });
        }

        // Search resources
        for (const res of topic.resources || []) {
          if (res.title.toLowerCase().includes(q) || res.description.toLowerCase().includes(q) || res.source.toLowerCase().includes(q)) {
            matches.push({
              type: 'resource',
              title: res.title,
              subtitle: `${res.source} • In quest: ${topic.title}`,
              link: `/topic/${topic.id}`,
              badge: 'Scroll',
              badgeColor: 'text-[#4dedf4] border-[#4dedf4]',
            });
          }
        }
      }
    }

    setResults(matches.slice(0, 8));
    setSelectedIndex(0);
  }, [query, weeks]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    navigate(item.link);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-2xl mc-card bg-[#1b1a25] border-4 border-[#3f3e4d] shadow-2xl overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b-2 border-black gap-3 bg-[#13121b]">
          <Search className="w-4 h-4 text-[#55ff55] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search biomes, quests, code concepts, scrolls..."
            className="w-full bg-transparent text-white placeholder-[#666] font-silkscreen text-xs focus:outline-none"
          />
          <button
            onClick={onClose}
            className="mc-btn p-1 text-[#888] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1.5">
          {results.length > 0 ? (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between p-3 mc-slot cursor-pointer transition-all ${
                  idx === selectedIndex
                    ? 'border-[#55ff55] bg-[#2a2936] text-white'
                    : 'text-[#a0a0a0] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 mc-slot flex items-center justify-center shrink-0">
                    {item.type === 'week' && <Compass className="w-4 h-4 text-[#55ff55]" />}
                    {item.type === 'topic' && <Video className="w-4 h-4 text-[#ff5533]" />}
                    {item.type === 'resource' && <BookOpen className="w-4 h-4 text-[#4dedf4]" />}
                  </div>
                  <div className="min-w-0">
                    <div className="font-silkscreen font-bold text-xs text-white truncate">{item.title}</div>
                    <div className="text-[11px] text-[#888] font-sans truncate">{item.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className={`font-pixel text-[8px] uppercase tracking-wider px-2 py-0.5 bg-black border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${idx === selectedIndex ? 'text-[#55ff55] translate-x-0.5' : 'text-[#555]'}`} />
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-[#888] font-silkscreen">
              <div className="text-3xl mb-2">🧭</div>
              <p className="text-xs">No results found for "{query}"</p>
              <p className="text-[10px] text-[#666] mt-1">Try searching for "JavaScript", "HTML", "Git", or "Loops"</p>
            </div>
          )}
        </div>

        {/* Footer hints */}
        <div className="px-4 py-2 bg-black/60 border-t-2 border-black text-[10px] font-silkscreen text-[#777] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>[↑] [↓] Navigate</span>
            <span>[Enter] Select</span>
          </div>
          <span>[ESC] Close</span>
        </div>
      </div>
    </div>
  );
};
