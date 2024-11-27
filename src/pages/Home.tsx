import React, { useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { videos } from '../data/videos';
import { RefreshCw } from 'lucide-react';
import { shuffleArray } from '../utils/shuffle';

export function Home() {
  const [displayedVideos, setDisplayedVideos] = useState(videos);
  const [isRotating, setIsRotating] = useState(false);

  const handleReload = () => {
    setIsRotating(true);
    // Shuffle the videos array
    const shuffledVideos = shuffleArray(videos);
    
    // Simulate network delay
    setTimeout(() => {
      setDisplayedVideos(shuffledVideos);
      setIsRotating(false);
    }, 1000);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleReload}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={isRotating}
        >
          <RefreshCw className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium">Reload</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}