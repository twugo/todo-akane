// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path'
import * as fs from 'fs'
import { text } from 'stream/consumers'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const textFile = "initial.txt";
  const rawText = loadTextFile(textFile);
  const texts = formatRawText(rawText);

  res.status(200).json({ text: texts });
}

function loadTextFile(textFile: string): string {
  const textPath = path.join(process.cwd(), 'texts', textFile);
  const rawText = fs.readFileSync(textPath, 'utf-8');

  return rawText;
}

function formatRawText(rawText: string) {
  const texts: string[] = rawText.split(/\r\n|\r|\n/);

  while (texts[texts.length - 1] === '') {
    texts.pop();
  }

  return texts;
}
