import Image from 'next/image'
import { useEffect, useState } from 'react';

const AkaneImage = ({ state = "Normal" }) => {
  const akaneImageDir = "/copyrighted/akane/"
  let [currentAkaneImagePath, SetCurrentAkaneImagePath] = useState(akaneImageDir + state + ".png");

  useEffect(() => {
    const path = akaneImageDir + state + ".png";
    SetCurrentAkaneImagePath(path);
  }, [state]);

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
