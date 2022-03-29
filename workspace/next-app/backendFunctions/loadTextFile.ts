// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path'
import * as fs from 'fs'

function loadTextFileRaw(textFile: string): string {
  const textPath = path.join(process.cwd(), 'texts', textFile);
  const rawText = fs.readFileSync(textPath, 'utf-8');

  return rawText;
}

function formatRawText(rawText: string): string[] {
  const texts: string[] = rawText.split(/\r\n|\r|\n/);

  while (texts[texts.length - 1] === '') {
    texts.pop();
  }

  return texts;
}

function loadTextFile(textFile: string): string[] {
  const rawText = loadTextFileRaw(textFile);
  const texts = formatRawText(rawText);

  return texts;
}

export default loadTextFile
export { loadTextFileRaw, formatRawText }