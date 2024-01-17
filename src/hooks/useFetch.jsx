import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const FetchData = async () => {
      setIsLoading(false);
      const response = await fetch(url);
      const S = await response.json();
      setData(S);
    };
    FetchData();
    console.log(Data);
  }, [url]);

  return [Data, isLoading];
};
