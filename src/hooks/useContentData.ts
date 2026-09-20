import { useState, useEffect } from 'react';
import { contentService } from '../services/contentService';
import { progressService } from '../services/progressService';
import { Week, PlatformStats, StudentProgress } from '../types/content';

export function useContentData() {
  const [weeks, setWeeks] = useState<Week[]>(() => contentService.getWeeks());
  const [stats, setStats] = useState<PlatformStats>(() => contentService.getStats());
  const [progress, setProgress] = useState<StudentProgress>(() => progressService.getProgress());

  useEffect(() => {
    const handleContentUpdate = () => {
      setWeeks(contentService.getWeeks());
      setStats(contentService.getStats());
    };

    const handleProgressUpdate = () => {
      setProgress(progressService.getProgress());
    };

    const unsubContent = contentService.onUpdate(handleContentUpdate);
    const unsubProgress = progressService.onUpdate(handleProgressUpdate);

    return () => {
      unsubContent();
      unsubProgress();
    };
  }, []);

  return {
    weeks,
    stats,
    progress,
    refreshContent: () => {
      setWeeks(contentService.getWeeks());
      setStats(contentService.getStats());
    },
    refreshProgress: () => {
      setProgress(progressService.getProgress());
    }
  };
}
