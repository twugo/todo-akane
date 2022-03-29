import { useEffect, useRef } from "react"
/**
 * コンポーネントがマウントされているかを識別する
 * コンポーネントのアンマウントエラーを回避するために使用
 * 参考：React ハンズオンラーニング P207
 */
const useMountedRef = () => {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false };
  });

  return mounted;
}

export default useMountedRef;