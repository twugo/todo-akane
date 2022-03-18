import Image from 'next/image'
import { useState } from 'react';

enum AkaneState {
  Normal = 'Normal.png',
  Smug = 'Smug.png',
  Think = 'Think.png',
  Victory = 'Victory.png',
}

const AkaneImage = () => {
  const akaneImageDir = "/copyrighted/akane/"
  let [currentAkaneImagePath, SetCurrentAkaneImagePath] = useState(akaneImageDir + AkaneState.Normal);

  const SetAkaneImage = (state: AkaneState) => {
    SetCurrentAkaneImagePath(akaneImageDir + state)
  };

  return (
    <Image
      src={currentAkaneImagePath}
      alt="akane"
      width={480}
      height={720}
      objectFit="contain"
    />
  )
}

export default AkaneImage
export { AkaneState }