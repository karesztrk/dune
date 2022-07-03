import { useEffect } from "react";
import useQuote from "../hooks/use-quote";

const Quote = () => {
  const quote = useQuote();
  return (
    <blockquote>
      <p>{quote}</p>
    </blockquote>
  );
};

export default Quote;
