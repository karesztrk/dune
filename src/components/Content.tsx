import { Suspense } from "react";
import useBook from "../hooks/use-book";
import useQuote from "../hooks/use-quote";
import Book from "./Book";
import Quote from "./Quote";

const Content = () => {
  const bookResource = useBook();
  const quoteResource = useQuote();

  return (
    <>
      <Suspense fallback={<div>Loading a quote...</div>}>
        <Quote resource={quoteResource} />
      </Suspense>
      <Suspense fallback={<div>Loading a book...</div>}>
        <Book resource={bookResource} />
      </Suspense>
    </>
  );
};

export default Content;
