import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TraceActionBar } from './components/TraceActionBar';
import { TraceCanvas } from './components/TraceCanvas';
import { TraceControls } from './components/TraceControls';
import { useScreenLock } from './hooks/useScreenLock';
import { ConfirmModal } from '~/components/ConfirmModal';
import { ExportBottomSheet } from '~/components/ExportBottomSheet';

export function ScreenTracePage({ imageUrl }: { imageUrl?: string }) {
  const navigate = useNavigate();
  const [opacity, setOpacity] = useState(100);
  const [zoom, setZoom] = useState(1);
  const [isMirrored, setIsMirrored] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const { isLocked, startPress, cancelPress, unlock } = useScreenLock(800);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.1, 3));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.1, 0.5));
  const toggleMirror = () => setIsMirrored(m => !m);
  const handleReset = () => {
    setZoom(1);
    setIsMirrored(false);
    setOpacity(100);
  };

  const handleSaveAndExit = () => {
    const existingStr = localStorage.getItem('album-images');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift({
      id: Date.now(),
      image: imageUrl,
      date: 'Just now'
    });
    localStorage.setItem('album-images', JSON.stringify(existing));
    
    setIsConfirmOpen(false);
    setIsExportOpen(true);
  };

  return (
    <div className="bg-surface-bright min-h-screen w-full max-w-md mx-auto flex flex-col font-sans text-on-surface overflow-hidden relative shadow-2xl selection:bg-primary-container selection:text-on-primary">
      {/* Global styles from the HTML */}
      <style>{`
        body {
          min-height: 100dvh;
          background-color: #f4f0ea; /* dark background for the outside */
        }
      `}</style>
      
      <TraceActionBar onComplete={() => setIsConfirmOpen(true)} />
      <TraceCanvas opacity={opacity} imageUrl={imageUrl} zoom={zoom} isMirrored={isMirrored} />
      <TraceControls 
        opacity={opacity}
        setOpacity={setOpacity}
        isLocked={isLocked}
        startPress={startPress}
        cancelPress={cancelPress}
        unlock={unlock}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onMirror={toggleMirror}
        onReset={handleReset}
        isMirrored={isMirrored}
      />

      <ConfirmModal 
        isOpen={isConfirmOpen}
        onConfirm={handleSaveAndExit}
        onCancel={() => setIsConfirmOpen(false)}
      />

      <ExportBottomSheet 
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        imageUrl={imageUrl || ''}
      />
    </div>
  );
}
