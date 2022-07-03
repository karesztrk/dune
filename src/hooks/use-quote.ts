import { useEffect, useRef, useState } from "react";

interface QuoteEntry {
  id: number;
  quote: string;
}

const path = "/quotes";

const useQuote = () => {
  const promise = useRef<Promise<void>>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string>("");

  const fetchResource = async (): Promise<QuoteEntry[]> => {
    const res = await fetch(
      new URL(path, `${import.meta.env.VITE_API_URL}`).toString(),
      {
        method: "GET",
      }
    );
    return await res.json();
  };

  useEffect(() => {
    if (promise.current) {
      // Prevents double mount on strict dev mode
      return;
    }

    setLoading(true);
    promise.current = new Promise<void>((resolve, reject) => {
      fetchResource()
        .then((response) => {
          setData(response[0].quote);
          resolve();
        })
        .catch(reject)
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  if (loading && promise.current) {
    throw promise.current;
  } else {
    return data;
  }
};

export default useQuote;
