// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import loadTextFile from '../../../backendFunctions/loadTextFile'

type Data = {
  text: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const textFile = "initial.txt";
  const texts = loadTextFile(textFile);

  res.status(200).json({ text: texts });
}
