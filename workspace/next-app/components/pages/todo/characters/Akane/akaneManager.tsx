import AkaneImage from './akaneImage';
import DialogueBox from '../../dialogueBox'
import ClickDetector from '../../clickDetector'
import useNovel from '../../../../../hooks/useNovel';
import { useFetch } from '../../../../../hooks/useFetch';
import Menu from '../../Menu';

import { useState, useEffect } from 'react';

const AkaneManager = () => {
  const { showingText, charaState, TurnPage, ChangeNovel } = useNovel();
  const { data: homeData, loading: homeLoading, error: homeError } = useFetch('/api/akane/homeText');


  useEffect(() => {
    if (homeData) {
      ChangeNovel(homeData.text);
    }
  }, [homeData]);

  return (
    <>
      <div className="ml-16">
        <Menu ChangeNovel={ChangeNovel} />
      </div>
      <ClickDetector onClick={TurnPage} />
      <div className='h-screen text-right my-0'>
        <AkaneImage state={charaState} />
      </div>
      <DialogueBox text={showingText} />
    </>
  )
}

export default AkaneManager
