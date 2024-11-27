export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
  };
  views: number;
  timestamp: string;
  duration: string;
}