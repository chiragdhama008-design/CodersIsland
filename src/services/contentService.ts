import { Week, Topic, Resource, PlatformStats } from '../types/content';
import { initialWeeks } from '../data/initialContent';

const STORAGE_KEY = 'codersisland_weeks_data_v1';
const CONTENT_UPDATE_EVENT = 'codersisland_content_updated';

function notifyUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONTENT_UPDATE_EVENT));
  }
}

export const contentService = {
  getWeeks(): Week[] {
    if (typeof window === 'undefined') return initialWeeks;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialWeeks));
        return initialWeeks;
      }
      return JSON.parse(stored) as Week[];
    } catch (e) {
      console.error('Failed to parse weeks from localStorage, falling back to initial data', e);
      return initialWeeks;
    }
  },

  saveWeeks(weeks: Week[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(weeks));
      notifyUpdate();
    } catch (e) {
      console.error('Failed to save weeks to localStorage', e);
    }
  },

  getWeek(idOrNumber: string | number): Week | undefined {
    const weeks = this.getWeeks();
    return weeks.find(w => w.id === String(idOrNumber) || w.number === Number(idOrNumber));
  },

  getTopic(topicId: string): { topic: Topic; week: Week; prevTopic?: Topic; nextTopic?: Topic } | undefined {
    const weeks = this.getWeeks();
    // Flatten all topics across all weeks in order to support cross-topic navigation
    const allTopicsWithWeek: { topic: Topic; week: Week }[] = [];
    for (const week of weeks) {
      const sortedTopics = [...week.topics].sort((a, b) => a.order - b.order);
      for (const topic of sortedTopics) {
        allTopicsWithWeek.push({ topic, week });
      }
    }

    const currentIndex = allTopicsWithWeek.findIndex(item => item.topic.id === topicId);
    if (currentIndex === -1) return undefined;

    const current = allTopicsWithWeek[currentIndex];
    const prev = currentIndex > 0 ? allTopicsWithWeek[currentIndex - 1].topic : undefined;
    const next = currentIndex < allTopicsWithWeek.length - 1 ? allTopicsWithWeek[currentIndex + 1].topic : undefined;

    return {
      topic: current.topic,
      week: current.week,
      prevTopic: prev,
      nextTopic: next,
    };
  },

  addWeek(weekData: Omit<Week, 'id' | 'topics'> & { id?: string }): Week {
    const weeks = this.getWeeks();
    const newNumber = weekData.number || weeks.length + 1;
    const newId = weekData.id || `week-${newNumber}-${Date.now().toString(36)}`;
    const newWeek: Week = {
      ...weekData,
      id: newId,
      number: newNumber,
      topics: [],
    };
    weeks.push(newWeek);
    weeks.sort((a, b) => a.number - b.number);
    this.saveWeeks(weeks);
    return newWeek;
  },

  updateWeek(id: string, updates: Partial<Week>): Week | undefined {
    const weeks = this.getWeeks();
    const index = weeks.findIndex(w => w.id === id);
    if (index === -1) return undefined;

    weeks[index] = { ...weeks[index], ...updates };
    this.saveWeeks(weeks);
    return weeks[index];
  },

  deleteWeek(id: string): boolean {
    const weeks = this.getWeeks();
    const filtered = weeks.filter(w => w.id !== id);
    if (filtered.length === weeks.length) return false;
    this.saveWeeks(filtered);
    return true;
  },

  addTopic(weekId: string, topicData: Omit<Topic, 'id'> & { id?: string }): Topic | undefined {
    const weeks = this.getWeeks();
    const week = weeks.find(w => w.id === weekId);
    if (!week) return undefined;

    const newId = topicData.id || `topic-${Date.now().toString(36)}`;
    const newOrder = topicData.order || week.topics.length + 1;
    const newTopic: Topic = {
      ...topicData,
      id: newId,
      weekId,
      order: newOrder,
      resources: topicData.resources || [],
    };

    week.topics.push(newTopic);
    week.topics.sort((a, b) => a.order - b.order);
    this.saveWeeks(weeks);
    return newTopic;
  },

  updateTopic(topicId: string, updates: Partial<Topic>): Topic | undefined {
    const weeks = this.getWeeks();
    for (const week of weeks) {
      const topicIndex = week.topics.findIndex(t => t.id === topicId);
      if (topicIndex !== -1) {
        week.topics[topicIndex] = {
          ...week.topics[topicIndex],
          ...updates,
          // If video was partially updated, merge video properties
          video: updates.video 
            ? { ...week.topics[topicIndex].video, ...updates.video }
            : week.topics[topicIndex].video,
        };
        this.saveWeeks(weeks);
        return week.topics[topicIndex];
      }
    }
    return undefined;
  },

  deleteTopic(topicId: string): boolean {
    const weeks = this.getWeeks();
    for (const week of weeks) {
      const initialCount = week.topics.length;
      week.topics = week.topics.filter(t => t.id !== topicId);
      if (week.topics.length !== initialCount) {
        this.saveWeeks(weeks);
        return true;
      }
    }
    return false;
  },

  addResource(topicId: string, resourceData: Omit<Resource, 'id'> & { id?: string }): Resource | undefined {
    const weeks = this.getWeeks();
    for (const week of weeks) {
      const topic = week.topics.find(t => t.id === topicId);
      if (topic) {
        const newResource: Resource = {
          ...resourceData,
          id: resourceData.id || `res-${Date.now().toString(36)}`,
        };
        topic.resources.push(newResource);
        this.saveWeeks(weeks);
        return newResource;
      }
    }
    return undefined;
  },

  deleteResource(topicId: string, resourceId: string): boolean {
    const weeks = this.getWeeks();
    for (const week of weeks) {
      const topic = week.topics.find(t => t.id === topicId);
      if (topic) {
        const initialCount = topic.resources.length;
        topic.resources = topic.resources.filter(r => r.id !== resourceId);
        if (topic.resources.length !== initialCount) {
          this.saveWeeks(weeks);
          return true;
        }
      }
    }
    return false;
  },

  getStats(): PlatformStats {
    const weeks = this.getWeeks();
    let totalTopics = 0;
    let totalVideos = 0;
    let totalResources = 0;

    for (const week of weeks) {
      totalTopics += week.topics.length;
      for (const topic of week.topics) {
        if (topic.video && topic.video.youtubeUrl) {
          totalVideos += 1;
        }
        totalResources += (topic.resources || []).length;
      }
    }

    return {
      totalWeeks: weeks.length,
      totalTopics,
      totalVideos,
      totalResources,
    };
  },

  resetToDefault(): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialWeeks));
    notifyUpdate();
  },

  exportData(): string {
    return JSON.stringify(this.getWeeks(), null, 2);
  },

  importData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        this.saveWeeks(parsed as Week[]);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  },

  onUpdate(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {};
    const handler = () => callback();
    window.addEventListener(CONTENT_UPDATE_EVENT, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(CONTENT_UPDATE_EVENT, handler);
      window.removeEventListener('storage', handler);
    };
  }
};
