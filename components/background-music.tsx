'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on first render
  useEffect(() => {
    audioRef.current = new Audio('/simi-song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6; // 60% volume

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented, handle it here
            console.log('Autoplay prevented');
          });
        }
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="rounded-full w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
