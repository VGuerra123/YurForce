import { useCallback, useEffect, useState } from 'react';

type SoundType = 'nav' | 'hover' | 'click' | 'success' | 'error';

export const useAudio = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Audio URLs - these would be actual sound files in a real project
  const soundUrls = {
    nav: '/sounds/nav.mp3',
    hover: '/sounds/hover.mp3',
    click: '/sounds/click.mp3',
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3'
  };
  
  // Create audio elements for each sound
  const [sounds, setSounds] = useState<Record<SoundType, HTMLAudioElement | null>>({
    nav: null,
    hover: null,
    click: null,
    success: null,
    error: null
  });
  
  // Initialize sound objects (mock implementation)
  useEffect(() => {
    // In a real project, we would create actual Audio objects
    // Here we're just mocking the behavior
    const mockAudio = (type: SoundType) => {
      const audio = new Audio();
      audio.volume = 0.5;
      return audio;
    };
    
    setSounds({
      nav: mockAudio('nav'),
      hover: mockAudio('hover'),
      click: mockAudio('click'),
      success: mockAudio('success'),
      error: mockAudio('error')
    });
  }, []);
  
  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => !prev);
  }, []);
  
  const playSound = useCallback((type: SoundType) => {
    if (soundEnabled && sounds[type]) {
      // In a real implementation, we would play the sound
      // sounds[type]?.play();
      console.log(`Playing ${type} sound`);
    }
  }, [soundEnabled, sounds]);
  
  const playNavSound = useCallback(() => playSound('nav'), [playSound]);
  const playHoverSound = useCallback(() => playSound('hover'), [playSound]);
  const playClickSound = useCallback(() => playSound('click'), [playSound]);
  const playSuccessSound = useCallback(() => playSound('success'), [playSound]);
  const playErrorSound = useCallback(() => playSound('error'), [playSound]);
  
  return {
    soundEnabled,
    toggleSound,
    playNavSound,
    playHoverSound,
    playClickSound,
    playSuccessSound,
    playErrorSound
  };
};