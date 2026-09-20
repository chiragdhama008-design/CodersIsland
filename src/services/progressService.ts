import { StudentProgress, Week } from '../types/content';

const PROGRESS_STORAGE_KEY = 'codersisland_student_progress_v1';
const PROGRESS_UPDATE_EVENT = 'codersisland_progress_updated';

function notifyProgressUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(PROGRESS_UPDATE_EVENT));
  }
}

export const progressService = {
  getProgress(): StudentProgress {
    if (typeof window === 'undefined') {
      return { completedTopicIds: [], bookmarkedTopicIds: [] };
    }
    try {
      const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (!raw) {
        // Pre-mark first topic as completed for instant friendly feel
        const defaultProg: StudentProgress = {
          completedTopicIds: ['what-is-programming'],
          bookmarkedTopicIds: ['semantic-html-architecture'],
          lastVisitedTopicId: 'what-is-programming',
        };
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(defaultProg));
        return defaultProg;
      }
      return JSON.parse(raw);
    } catch {
      return { completedTopicIds: [], bookmarkedTopicIds: [] };
    }
  },

  saveProgress(progress: StudentProgress): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
      notifyProgressUpdate();
    } catch (e) {
      console.error('Failed to save student progress', e);
    }
  },

  isCompleted(topicId: string): boolean {
    const p = this.getProgress();
    return p.completedTopicIds.includes(topicId);
  },

  toggleComplete(topicId: string): boolean {
    const p = this.getProgress();
    const index = p.completedTopicIds.indexOf(topicId);
    let isNowComplete = false;
    if (index > -1) {
      p.completedTopicIds.splice(index, 1);
      isNowComplete = false;
    } else {
      p.completedTopicIds.push(topicId);
      isNowComplete = true;
    }
    this.saveProgress(p);
    return isNowComplete;
  },

  isBookmarked(topicId: string): boolean {
    const p = this.getProgress();
    return p.bookmarkedTopicIds.includes(topicId);
  },

  toggleBookmark(topicId: string): boolean {
    const p = this.getProgress();
    const index = p.bookmarkedTopicIds.indexOf(topicId);
    let isNowBookmarked = false;
    if (index > -1) {
      p.bookmarkedTopicIds.splice(index, 1);
      isNowBookmarked = false;
    } else {
      p.bookmarkedTopicIds.push(topicId);
      isNowBookmarked = true;
    }
    this.saveProgress(p);
    return isNowBookmarked;
  },

  setLastVisited(topicId: string): void {
    const p = this.getProgress();
    p.lastVisitedTopicId = topicId;
    this.saveProgress(p);
  },

  getWeekProgress(week: Week): { completedCount: number; totalCount: number; percentage: number } {
    const p = this.getProgress();
    const totalCount = week.topics.length;
    if (totalCount === 0) return { completedCount: 0, totalCount: 0, percentage: 0 };
    const completedCount = week.topics.filter(t => p.completedTopicIds.includes(t.id)).length;
    return {
      completedCount,
      totalCount,
      percentage: Math.round((completedCount / totalCount) * 100),
    };
  },

  getOverallProgress(weeks: Week[]): { completedCount: number; totalCount: number; percentage: number } {
    const p = this.getProgress();
    let totalCount = 0;
    let completedCount = 0;
    for (const week of weeks) {
      totalCount += week.topics.length;
      for (const topic of week.topics) {
        if (p.completedTopicIds.includes(topic.id)) {
          completedCount += 1;
        }
      }
    }
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    return { completedCount, totalCount, percentage };
  },

  onUpdate(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {};
    const handler = () => callback();
    window.addEventListener(PROGRESS_UPDATE_EVENT, handler);
    return () => {
      window.removeEventListener(PROGRESS_UPDATE_EVENT, handler);
    };
  }
};
