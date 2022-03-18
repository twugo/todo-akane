import { useState, useEffect } from 'react';

const ClickDetector = ({ onClick = () => { } }) => {
  return (
    <div
      onClick={(event) => {
        event.preventDefault;
        onClick();
      }}
      // className="z-10 absolute w-full h-full bg-red-900 opacity-50"
      className="z-10 absolute w-full h-full"
    />
  )
}

export default ClickDetector
