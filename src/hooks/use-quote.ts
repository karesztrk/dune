import useResource from "./use-resource";

export interface Quote {
  id: number;
  quote: string;
}

const path = "/quotes";

const useQuote = () => useResource<Quote[]>(path);

export default useQuote;
