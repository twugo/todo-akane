import { useState, useEffect } from 'react';

const DialogueBox = ({ text = '' }) => {
  const [showedText, SetShowedText] = useState('');

  useEffect(() => {
    SetShowedText(text);
  }, [text]);
  return (
    <div className="absolute bottom-10 w-11/12 h-40 p-4 
                    font-mono font-medium text-2xl text-gray-800 dark:text-gray-200 
                    border-4 border-slate-400 rounded-xl
                    whitespace-pre-wrap"
    >
      {showedText}
    </div>
  )
}

export default DialogueBox
