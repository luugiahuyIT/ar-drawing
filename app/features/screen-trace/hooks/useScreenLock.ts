import { useState, useRef, useEffect, useCallback } from 'react';

interface UseScreenLockReturn {
  isLocked: boolean;
  startPress: (e: React.SyntheticEvent) => void;
  cancelPress: () => void;
  unlock: () => void;
  isPressing: boolean;
}

export function useScreenLock(pressDuration: number = 800): UseScreenLockReturn {
  const [isLocked, setIsLocked] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const pressTimer = useRef<NodeJS.Timeout | null>(null);

  const startPress = useCallback((e: React.SyntheticEvent) => {
    // Prevent default context menus on touch devices
    if (e.type === 'touchstart') {
      // In React, preventDefault on touch events can be tricky, but we try
      // e.preventDefault(); // Sometimes Causes passive listener warnings in React 18+
    }
    
    if (isLocked) return;
    
    setIsPressing(true);
    
    pressTimer.current = setTimeout(() => {
      setIsLocked(true);
      setIsPressing(false);
    }, pressDuration);
  }, [isLocked, pressDuration]);

  const cancelPress = useCallback(() => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    setIsPressing(false);
  }, []);

  const unlock = useCallback(() => {
    if (isLocked) {
      setIsLocked(false);
    }
  }, [isLocked]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (pressTimer.current) {
        clearTimeout(pressTimer.current);
      }
    };
  }, []);

  return {
    isLocked,
    startPress,
    cancelPress,
    unlock,
    isPressing,
  };
}
