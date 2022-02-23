import type { NextPage } from 'next'
import Image from 'next/image'

const Akane: NextPage = () => {
  return (
    <>
      <div className="flex flex-row-reverse h-screen mb-0">
        <div className="flex flex-col-reverse">
          <Image
            src="/copyrighted/akane/Normal.png"
            alt="akane"
            width={480}
            height={720}
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-10 w-11/12 h-40 p-4 
                                font-mono font-medium text-2xl text-gray-800 dark:text-gray-200 
                                border-4 border-slate-400 rounded-xl"
        >
          テキストが入ります。
        </div>
      </div>
    </>
  )
}

export default Akane
