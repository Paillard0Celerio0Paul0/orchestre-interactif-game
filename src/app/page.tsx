'use client';

import React from 'react';
import VideoUploader from '@/components/VideoUploader';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Gestionnaire de Vidéos</h1>
      <VideoUploader />
    </main>
  );
} 