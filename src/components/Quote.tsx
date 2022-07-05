import { FC } from "react";
import { Quote as QuoteType } from "../hooks/use-quote";

interface QuoteProps {
  resource: { read: () => QuoteType[] | undefined };
}

const Quote: FC<QuoteProps> = ({ resource }) => {
  const quotes = resource.read();
  return (
    <div>
      {quotes && (
        <blockquote>
          <p>{quotes[0].quote}</p>
        </blockquote>
      )}
    </div>
  );
};

export default Quote;
