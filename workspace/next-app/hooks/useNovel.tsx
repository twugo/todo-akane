import { useState, useEffect } from 'react';
import Fetch from '../components/atoms/Fetch';

const useNovel = () => {
  const [novel, SetNovel] = useState<string[]>([]);
  const [showingText, SetShowingText] = useState(``);
  const [textCounter, SetTextCounter] = useState(0);

  // 参考：https://stackoverflow.com/questions/34757854/referenceerror-audio-is-not-defined
  const [voice, setVoice] = useState(typeof Audio !== "undefined" && new Audio('/copyrighted/akane/voice/greeting1.wav'));
  const [charaState, setCharaState] = useState("Normal");

  const ChangeNovel = (newNovel: string[]) => {
    SetNovel(newNovel);
    SetTextCounter(0);
    TurnPage(newNovel, 0);

    console.log(newNovel);
  }

  const TurnPage = (currentNovel: string[] = novel, currentTextCounter: number = textCounter) => {
    let tmpText = "";
    let tmpTextCounter = currentTextCounter;

    while (tmpTextCounter <= currentNovel.length && currentNovel[tmpTextCounter]) {
      if (currentNovel[tmpTextCounter][0] == '[') {
        const splittedText = currentNovel[tmpTextCounter].split(" ");
        if (splittedText[0] == "[chara") { // 画像設定
          const state = splittedText[2].split('"')[1];
          setCharaState(state);
        } else if (splittedText[0] == "[play") { // 音声再生
          if (voice) {
            voice.pause();
          }
          const path = "/copyrighted/akane/voice/" + splittedText[2].split('"')[1];
          setVoice(new Audio(path));
          if (voice) {
            voice.play();
          }
        }
      } else if (currentNovel[tmpTextCounter].startsWith("//")) { // コメントアウト
        break;
      } else {
        tmpText += (currentNovel[tmpTextCounter] + `\n`);
      }

      tmpTextCounter++;
    }
    SetTextCounter(tmpTextCounter + 1);
    SetShowingText(tmpText);
  }

  return (
    { showingText, charaState, TurnPage, ChangeNovel }
  );
}

export default useNovel
