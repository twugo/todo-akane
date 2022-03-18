import AkaneImage from './akaneImage';
import DialogueBox from '../components/dialogueBox'
import ClickDetector from '../components/clickDetector'

import { useState, useEffect } from 'react';

const AkaneManager = () => {
  const [texts, setTexts] = useState<string[]>([]);
  const [showingText, setShowingText] = useState(``);
  const [textCounter, setTextCounter] = useState(0);

  // 参考：https://stackoverflow.com/questions/34757854/referenceerror-audio-is-not-defined
  const [voice, setVoice] = useState(typeof Audio !== "undefined" && new Audio('/copyrighted/akane/voice/greeting1.wav'));
  const [charaState, setCharaState] = useState("Normal");

  useEffect(() => {
    fetch('/api/akaneText')
      .then((res: any) => res.json())
      .then((res) => {
        setTexts(res.text);
      });
  }, []);

  const onClick = () => {
    let tmpText = "";
    let tmpTextCounter = textCounter;

    while (textCounter <= texts.length && texts[tmpTextCounter]) {
      if (texts[tmpTextCounter][0] == '[') {
        const splittedText = texts[tmpTextCounter].split(" ");
        if (splittedText[0] == "[chara") { // 画像設定
          const state = splittedText[2].split('"')[1];
          setCharaState(state);
        } else if (splittedText[0] == "[play") { // 音声再生
          voice.pause();
          const path = "/copyrighted/akane/voice/" + splittedText[2].split('"')[1];
          setVoice(new Audio(path));
          voice.play();
        }
      } else if (texts[tmpTextCounter].startsWith("//")) { // コメントアウト
        break;
      } else {
        tmpText += (texts[tmpTextCounter] + `\n`);
      }

      tmpTextCounter++;
    }
    setTextCounter(tmpTextCounter + 1);
    setShowingText(tmpText);
  };

  return (
    <>
      <ClickDetector onClick={onClick} />
      <div className="flex flex-row-reverse h-screen mb-0">
        <div className="flex flex-col-reverse">
          <AkaneImage state={charaState} />
        </div>
        <DialogueBox text={showingText} />
      </div>
    </>
  )
}

export default AkaneManager
