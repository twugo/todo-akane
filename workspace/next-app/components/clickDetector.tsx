import { useState } from 'react';

const ClickDetector = () => {
  return (
    <div
      onClick={() => {
        const voice = new Audio('/copyrighted/akane/voice/greeting1.wav');
        voice.play();
        console.log('hoge');
      }}
      className="z-10 absolute w-full h-full bg-red-900 opacity-50"
    />
  )
}

export default ClickDetector
