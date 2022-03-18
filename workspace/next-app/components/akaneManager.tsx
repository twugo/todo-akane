import AkaneImage, { AkaneState } from './akaneImage';
import DialogueBox from '../components/dialogueBox'
import ClickDetector from '../components/clickDetector'

import { useState, useEffect } from 'react';

const AkaneManager = ({ akaneState = AkaneState.Normal }) => {
  const [texts, setTexts] = useState([]);
  const [showingText, setShowingText] = useState("");
  const [showingTextNum, setShowingTextNum] = useState(0);

  useEffect(() => {
    fetch('/api/akaneText')
      .then((res: any) => res.json())
      .then((res) => {
        setTexts(res.text);
        console.log(res.text);
        setShowingText(res.text[0]);
      });
  }, []);

  const onClick = () => {
    const voice = new Audio('/copyrighted/akane/voice/greeting1.wav');
    voice.play();
    console.log('Clicked.');
    setShowingTextNum(showingTextNum + 1);
  };

  return (
    <>
      <ClickDetector onClick={onClick} />
      <div className="flex flex-row-reverse h-screen mb-0">
        <div className="flex flex-col-reverse">
          <AkaneImage />
          {/* <AkaneImage akaneState={akaneState} /> */}
        </div>
        <DialogueBox text={texts[showingTextNum]} />
      </div>
    </>
  )
}

export default AkaneManager
