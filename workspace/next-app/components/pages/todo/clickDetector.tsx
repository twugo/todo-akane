import { useState, useEffect } from 'react';

const ClickDetector = ({ onClick = (..._: any) => { } }) => {
  return (
    <div
      onClick={(event) => {
        console.log("clicked.");
        event.preventDefault;
        onClick();
      }}
      // className="z-10 absolute w-full h-full bg-red-900 opacity-50"
      className="z-10 absolute w-full h-full"
    />
  )
}

export default ClickDetector
