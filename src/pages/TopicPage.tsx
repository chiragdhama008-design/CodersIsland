import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Video, BookOpen, Bookmark, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { contentService } from '../services/contentService';
import { progressService } from '../services/progressService';
import { VideoPlayer } from '../components/video/VideoPlayer';
import { ResourceCard } from '../components/cards/ResourceCard';

export const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const data = topicId ? contentService.getTopic(topicId) : undefined;

  const [completed, setCompleted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (topicId) {
      setCompleted(progressService.isCompleted(topicId));
      setBookmarked(progressService.isBookmarked(topicId));
      progressService.setLastVisited(topicId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [topicId]);

  if (!data) {
    return (
      <div className="pt-36 pb-20 max-w-2xl mx-auto px-4 text-center">
        <div className="p-10 mc-card">
          <div className="text-4xl mb-3">🧭</div>
          <h2 className="font-pixel text-base text-white mc-text-shadow mb-2">
            Quest Not Found!
          </h2>
          <p className="text-xs text-[#a0a0a0] mb-6 font-sans">
            The topic or quest you are looking for has wandered off the map.
          </p>
          <Link
            to="/learn"
            className="mc-btn mc-btn-green inline-flex items-center gap-2 px-6 py-3 text-xs text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Biomes</span>
          </Link>
        </div>
      </div>
    );
  }

  const { topic, week, prevTopic, nextTopic } = data;

  const handleToggleComplete = () => {
    const newState = progressService.toggleComplete(topic.id);
    setCompleted(newState);

    if (newState) {
      // Minecraft green/gold XP confetti explosion!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#7fff00', '#55ff55', '#fdb813', '#4dedf4', '#ffffff']
      });
    }
  };

  const handleToggleBookmark = () => {
    const newState = progressService.toggleBookmark(topic.id);
    setBookmarked(newState);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={topic.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3 }}
        className="relative pt-24 sm:pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Navigation Breadcrumb & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            to={`/week/${week.id}`}
            className="mc-btn px-4 py-2 text-xs text-white flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-[#55ff55]" />
            <span>Back to Biome 0{week.number}: {week.title}</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="mc-btn p-2 text-xs text-white flex items-center gap-1.5"
              title="Share Quest Link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="font-silkscreen text-[11px] hidden sm:inline">
                {copied ? 'Copied!' : 'Share'}
              </span>
            </button>

            <button
              onClick={handleToggleBookmark}
              className={`mc-btn p-2 text-xs flex items-center gap-1.5 ${
                bookmarked ? 'border-[#fdb813] text-[#fdb813]' : 'text-[#888]'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Bookmark Quest'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#fdb813]' : ''}`} />
              <span className="font-silkscreen text-[11px] hidden sm:inline">
                {bookmarked ? 'Saved' : 'Save'}
              </span>
            </button>

            {/* Complete Quest Button */}
            <button
              onClick={handleToggleComplete}
              className={`mc-btn px-4 py-2 text-xs font-silkscreen flex items-center gap-2 ${
                completed ? 'mc-btn-green text-white' : 'text-[#fdb813]'
              }`}
            >
              <span className={`w-2.5 h-2.5 border border-black ${completed ? 'bg-[#7fff00] shadow-[0_0_6px_#7fff00]' : 'bg-[#333]'}`} />
              <span>{completed ? '✔ +XP Claimed' : 'Complete Quest'}</span>
            </button>
          </div>
        </div>

        {/* Quest Title & Description Header */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2 font-silkscreen text-xs text-[#a0a0a0]">
            <span className="font-pixel text-[9px] px-2.5 py-0.5 bg-black text-[#55ff55] border-2 border-[#55ff55] mc-xp-text">
              QUEST 0{topic.order}
            </span>
            <span>Part of Biome 0{week.number} • {week.title}</span>
          </div>

          <h1 className="font-pixel text-2xl sm:text-3xl text-white mc-text-shadow leading-snug">
            {topic.title}
          </h1>

          <p className="text-sm sm:text-base text-[#c0c0c0] leading-relaxed font-sans max-w-3xl">
            {topic.description}
          </p>
        </div>

        {/* SECTION 1: WORKSHOP STREAM */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#ff5533] mc-redstone-text uppercase">
              <span className="w-2.5 h-2.5 bg-[#ff2200] border border-black animate-pulse" />
              <span>🎥 Workshop Stream Recording</span>
            </div>
            <span className="font-silkscreen text-xs text-[#888] hidden sm:inline">
              Watch full mentor broadcast
            </span>
          </div>

          <VideoPlayer video={topic.video} topicTitle={topic.title} />
        </section>

        {/* SECTION 2: ENCHANTED SCROLLS (RESOURCES) */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 font-pixel text-xs text-[#4dedf4] mc-diamond-text uppercase">
              <span className="w-2.5 h-2.5 bg-[#4dedf4] border border-black" />
              <span>📚 Read Enchanted Scrolls & Guides</span>
            </div>
            <span className="font-silkscreen text-xs text-[#888]">
              {topic.resources?.length || 0} Scrolls Attached
            </span>
          </div>

          {topic.resources && topic.resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.resources.map((res, idx) => (
                <ResourceCard key={res.id || idx} resource={res} index={idx} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center mc-card">
              <BookOpen className="w-8 h-8 text-[#555] mx-auto mb-2" />
              <p className="text-xs text-[#888] font-silkscreen">
                No enchanted scrolls have been added to this quest yet.
              </p>
            </div>
          )}
        </section>

        {/* SECTION 3: DIRECTIONAL QUEST NAVIGATION */}
        <div className="pt-6 border-t-2 border-black/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevTopic ? (
            <Link
              to={`/topic/${prevTopic.id}`}
              className="mc-btn p-4 text-left flex items-center gap-3 group"
            >
              <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#55ff55] group-hover:-translate-x-1 transition-transform shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-pixel text-[8px] text-[#888] uppercase">
                  ← Previous Quest
                </div>
                <div className="font-silkscreen text-xs font-bold text-white truncate group-hover:text-[#55ff55]">
                  {prevTopic.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="p-4 mc-slot opacity-40 flex items-center gap-3">
              <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#555]">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <div className="font-pixel text-[8px] text-[#666]">First Quest</div>
                <div className="font-silkscreen text-xs text-[#888]">Island Spawn Point</div>
              </div>
            </div>
          )}

          {nextTopic ? (
            <Link
              to={`/topic/${nextTopic.id}`}
              className="mc-btn p-4 text-right flex items-center justify-end gap-3 group"
            >
              <div className="min-w-0">
                <div className="font-pixel text-[8px] text-[#888] uppercase">
                  Next Quest →
                </div>
                <div className="font-silkscreen text-xs font-bold text-white truncate group-hover:text-[#4dedf4]">
                  {nextTopic.title}
                </div>
              </div>
              <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#4dedf4] group-hover:translate-x-1 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ) : (
            <div className="p-4 mc-slot opacity-40 flex items-center justify-end gap-3 text-right">
              <div>
                <div className="font-pixel text-[8px] text-[#666]">Final Quest</div>
                <div className="font-silkscreen text-xs text-[#55ff55]">All Quests Mastered!</div>
              </div>
              <div className="w-9 h-9 mc-slot flex items-center justify-center text-[#555]">
                <span>⚔️</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
