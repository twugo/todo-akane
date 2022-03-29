import React, { ReactElement } from "react";
import { useFetch } from "../../hooks/useFetch";

type Props = {
  uri: string,
  renderSuccess: ({ data }: any) => ReactElement,
  loadingFallback?: ReactElement,
  renderError?: (error: any) => ReactElement
}

const Fetch = ({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: any) => <pre>{JSON.stringify(error, null, 2)}</pre>
}: Props): ReactElement => {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
  return <></>
}

export default Fetch;