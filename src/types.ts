export type Language = 'en' | 'zh';

export interface Sermon {
  id: string;
  title: string;
  titleZh: string;
  speaker: string;
  speakerZh: string;
  date: string;
  scripture: string;
  scriptureZh: string;
  series: string;
  seriesZh: string;
  audioUrl?: string;
  videoUrl?: string;
  summary: string;
  summaryZh: string;
  points: string[];
  pointsZh: string[];
}

export interface Ministry {
  id: string;
  name: string;
  nameZh: string;
  leader: string;
  leaderZh: string;
  description: string;
  descriptionZh: string;
  meetingTime: string;
  meetingTimeZh: string;
  location: string;
  locationZh: string;
  iconName: string;
  tags: string[];
}

export interface ChurchEvent {
  id: string;
  title: string;
  titleZh: string;
  date: string;
  time: string;
  timeZh: string;
  location: string;
  locationZh: string;
  description: string;
  descriptionZh: string;
  category: 'worship' | 'prayer' | 'fellowship' | 'special';
  zoomId?: string;
}

export interface PrayerRequest {
  id: string;
  author: string;
  category: 'health' | 'family' | 'faith' | 'thanksgiving' | 'general';
  title: string;
  content: string;
  date: string;
  isConfidential: boolean;
  prayedCount: number;
}

export interface StatementOfFaith {
  title: string;
  titleZh: string;
  content: string;
  contentZh: string;
  verses: string[];
}
