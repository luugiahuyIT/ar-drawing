import { useState } from 'react';
import { TraceActionBar } from './components/TraceActionBar';
import { TraceCanvas } from './components/TraceCanvas';
import { TraceControls } from './components/TraceControls';
import { useScreenLock } from './hooks/useScreenLock';

export function ScreenTracePage({ imageUrl }: { imageUrl?: string }) {
  const [opacity, setOpacity] = useState(100);
  const { isLocked, startPress, cancelPress, unlock } = useScreenLock(800);

  return (
    <div className="bg-surface-bright min-h-screen w-full max-w-md mx-auto flex flex-col font-sans text-on-surface overflow-hidden relative shadow-2xl selection:bg-primary-container selection:text-on-primary">
      {/* Global styles from the HTML */}
      <style>{`
        body {
          min-height: 100dvh;
          background-color: #f4f0ea; /* dark background for the outside */
        }
      `}</style>
      
      <TraceActionBar />
      <TraceCanvas opacity={opacity} imageUrl={imageUrl} />
      <TraceControls 
        opacity={opacity}
        setOpacity={setOpacity}
        isLocked={isLocked}
        startPress={startPress}
        cancelPress={cancelPress}
        unlock={unlock}
      />
    </div>
  );
}
