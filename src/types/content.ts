export type AccentColor = 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber' | 'pink';

export interface Resource {
  id: string;
  title: string;
  description: string;
  source: string;
  url: string;
  readingTime: string;
  type?: 'article' | 'documentation' | 'tutorial' | 'interactive';
}

export interface WorkshopVideo {
  title: string;
  youtubeUrl: string;
  date: string;
  duration: string;
  instructor?: string;
  recordingId?: string; // YouTube video ID or full URL
}

export interface Topic {
  id: string;
  weekId: string;
  order: number;
  title: string;
  description: string;
  summary?: string;
  video: WorkshopVideo;
  resources: Resource[];
}

export interface Week {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: AccentColor;
  learningGoals: string[];
  topics: Topic[];
}

export interface StudentProgress {
  completedTopicIds: string[];
  bookmarkedTopicIds: string[];
  lastVisitedTopicId?: string;
}

export interface PlatformStats {
  totalWeeks: number;
  totalTopics: number;
  totalVideos: number;
  totalResources: number;
}
