import React, { useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { videos } from '../data/videos';
import { subscribedChannels } from '../data/channels';
import { RefreshCw } from 'lucide-react';
import { shuffleArray } from '../utils/shuffle';

export function Subscriptions() {
  const [isRotating, setIsRotating] = useState(false);
  
  // Filter videos to only show those from subscribed channels
  const subscribedChannelNames = subscribedChannels.map(channel => channel.name);
  const subscribedVideos = videos.filter(video => 
    subscribedChannelNames.includes(video.channel.name)
  );

  const [displayedVideos, setDisplayedVideos] = useState(subscribedVideos);

  const handleReload = () => {
    setIsRotating(true);
    // Shuffle the subscribed videos
    const shuffledVideos = shuffleArray(subscribedVideos);
    
    // Simulate network delay
    setTimeout(() => {
      setDisplayedVideos(shuffledVideos);
      setIsRotating(false);
    }, 1000);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <button
          onClick={handleReload}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          disabled={isRotating}
        >
          <RefreshCw className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
          <span className="text-sm font-medium">Reload</span>
        </button>
      </div>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
        {subscribedChannels.map((channel) => (
          <div key={channel.id} className="flex flex-col items-center min-w-[100px]">
            <div className="relative">
              <img
                src={channel.avatar}
                alt={channel.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              {channel.isLive && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
              )}
            </div>
            <p className="mt-2 text-sm font-medium text-center">{channel.name}</p>
            <p className="text-xs text-gray-500">{channel.subscribers}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}