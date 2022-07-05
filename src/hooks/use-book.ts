import useResource from "./use-resource";

export interface Book {
  id: string;
  title: string;
  year: string;
  author: string[];
  wiki_url: string;
}

const path = "/books";

const useBook = () => useResource<Book[]>(path);

export default useBook;
