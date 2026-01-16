import React, { useEffect, useState } from "react";
import videosJson from "../data/videos.json";

// videos import (dynamic map)
const videoFiles = import.meta.glob("../assets/*.mp4", { eager: true });

export default function VideoSlider() {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const loadedVideos = videosJson.map(item => ({
      ...item,
      videoUrl: videoFiles[`../assets/${item.video}`]?.default
    }));

    setVideos(loadedVideos);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  if (videos.length === 0) return <p className="text-center">Loading...</p>;

  const active = videos[current];

  return (
    <div className="w-full max-w-3xl mx-auto p-5 flex items-center">
      <button 
        onClick={prevSlide}
        className="text-white bg-purple-400 p-3 rounded-full shadow"
      >
        ←
      </button>

      <div className="flex-1 mx-4 bg-white shadow-xl rounded-2xl overflow-hidden flex">
        
        {/* Video Section */}
        <div className="w-1/3 bg-teal-400 flex items-center justify-center p-2">
          <video 
            className="rounded-md"
            controls
            autoPlay
            muted
            src={active.videoUrl}
          />
        </div>

        {/* Text Section */}
        <div className="w-2/3 p-6 relative">
          <p className="text-gray-600 text-sm mb-4">“{active.text}”</p>
          <h3 className="text-xl font-semibold">{active.name}</h3>
          <p className="text-gray-500 text-sm">{active.role}</p>
        </div>
      </div>

      <button 
        onClick={nextSlide}
        className="text-white bg-purple-400 p-3 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
}
