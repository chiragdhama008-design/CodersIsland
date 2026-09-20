import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, BookOpen, ArrowRight, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Topic } from '../../types/content';
import { progressService } from '../../services/progressService';

interface TopicCardProps {
  topic: Topic;
  index: number;
  weekAccent?: string;
  onProgressChange?: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  index,
  onProgressChange,
}) => {
  const [completed, setCompleted] = useState(() => progressService.isCompleted(topic.id));
  const [bookmarked, setBookmarked] = useState(() => progressService.isBookmarked(topic.id));

  const handleToggleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = progressService.toggleComplete(topic.id);
    setCompleted(newState);

    if (newState) {
      // Minecraft green and gold XP confetti!
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.8 },
        colors: ['#7fff00', '#55ff55', '#fdb813', '#4dedf4', '#ffffff']
      });
    }

    if (onProgressChange) {
      onProgressChange();
    }
  };

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = progressService.toggleBookmark(topic.id);
    setBookmarked(newState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative"
    >
      <Link
        to={`/topic/${topic.id}`}
        className={`block p-5 mc-card hover:-translate-y-1 transition-all ${
          completed ? 'border-[#55ff55] shadow-[0_0_12px_rgba(85,255,85,0.25)]' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          {/* Order Pill & Quest Status */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 mc-slot flex items-center justify-center font-pixel text-[11px] text-[#fdb813] mc-gold-text">
              {topic.order < 10 ? `0${topic.order}` : topic.order}
            </div>

            {completed && (
              <span className="font-pixel text-[8px] px-2 py-0.5 bg-[#1a3800] text-[#55ff55] border-2 border-[#55ff55] mc-xp-text flex items-center gap-1">
                <span>✔</span> COMPLETED!
              </span>
            )}
          </div>

          {/* Action Buttons: Bookmark & Redstone Lever Complete Toggle */}
          <div className="flex items-center gap-2 z-10">
            <button
              onClick={handleToggleBookmark}
              className={`p-1.5 mc-btn text-[10px] ${
                bookmarked ? 'border-[#fdb813] text-[#fdb813]' : 'text-[#888]'
              }`}
              title={bookmarked ? 'Bookmarked in Chest' : 'Bookmark Quest'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#fdb813]' : ''}`} />
            </button>

            <button
              onClick={handleToggleComplete}
              className={`px-2.5 py-1 mc-btn text-[10px] font-silkscreen flex items-center gap-1.5 ${
                completed ? 'mc-btn-green text-white' : 'text-[#a0a0a0]'
              }`}
              title={completed ? 'Mark uncompleted' : 'Claim Quest & Gain XP'}
            >
              <span className={`w-2.5 h-2.5 border border-black ${completed ? 'bg-[#7fff00] shadow-[0_0_5px_#7fff00]' : 'bg-[#333]'}`} />
              <span>{completed ? '+XP Claimed' : 'Complete Quest'}</span>
            </button>
          </div>
        </div>

        {/* Quest Title */}
        <h4 className="font-pixel text-xs sm:text-sm text-white mc-text-shadow group-hover:text-[#4dedf4] transition-colors mb-2 line-clamp-1">
          {topic.title}
        </h4>

        {/* Quest Description */}
        <p className="text-xs sm:text-sm text-[#a0a0a0] line-clamp-2 leading-relaxed mb-4">
          {topic.description}
        </p>

        {/* Footer info: Video Duration, Resources, Quest Arrow */}
        <div className="flex items-center justify-between pt-3 border-t-2 border-black/40 text-xs font-silkscreen text-[#a0a0a0]">
          <div className="flex items-center gap-3">
            {topic.video && topic.video.youtubeUrl && (
              <span className="flex items-center gap-1 text-[#ff5533]">
                <Video className="w-3.5 h-3.5" />
                <span>{topic.video.duration || 'Stream'}</span>
              </span>
            )}
            {topic.resources && topic.resources.length > 0 && (
              <span className="flex items-center gap-1 text-[#4dedf4]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{topic.resources.length} Scrolls</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[#55ff55] mc-xp-text font-bold group-hover:translate-x-1 transition-transform">
            <span>Play Quest</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
