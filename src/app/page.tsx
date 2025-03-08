'use client';

import React, { useState } from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
import VolumeControl from '@/components/VolumeControl';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoVolume, setVideoVolume] = useState(1);

  const handleVolumeChange = (volume: number) => {
    setVideoVolume(volume);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <VolumeControl onVolumeChange={handleVolumeChange} />
      
      {!isPlaying ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Orchestre Interactif
          </h1>
          <button
            onClick={handlePlay}
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4 rounded-lg transition-colors transform hover:scale-105"
          >
            Jouer
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl aspect-video">
          <CldVideoPlayer
            id="introduction"
            width="1920"
            height="1080"
            src="introduction"
            transformation={{
              startOffset: 0,    // Début de la vidéo
              endOffset: "00:59", // Fin à 59 secondes
              crop: "fit"
            }}
            colors={{
              base: '#ffffff',
              text: '#ffffff',
              accent: '#3b82f6'
            }}
            autoPlay={true}
            controls={true}
            muted={false}
            className="rounded-lg shadow-2xl"
            onPlay={() => {
              const player = document.querySelector('video');
              if (player) player.volume = videoVolume;
            }}
          />
        </div>
      )}
    </main>
  );
} 