import { useState, useEffect } from "react";
import useMountedRef from "./useMountedRef";

const useFetch = (uri: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);

  const mounted = useMountedRef();
  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then(data => {
        if (!mounted.current) throw new Error("component is not mounted");
        return data;
      })
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [uri]);

  return {
    loading,
    data,
    error
  };
}

export { useFetch }