import React from 'react';
import Midnight from './Midnight.mp3';

export default function RainMusic() {
  const audio = new Audio (
    Midnight, { interrupt: true });
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };
  return (
    <div>
      <button onClick={start}>Set The Vibes</button>
      <button onClick={stop}>Pause</button>
    </div>
  );
}