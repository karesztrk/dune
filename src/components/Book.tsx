import { FC } from "react";
import { Book as BookType } from "../hooks/use-book";

interface BookProps {
  resource: { read: () => BookType[] | undefined };
}

const Book: FC<BookProps> = ({ resource }) => {
  const books = resource.read();

  return (
    <div>
      {books && (
        <p>
          <cite>{books[0].title}</cite> by {books[0].author}. Written in{" "}
          {books[0].year}.
        </p>
      )}
    </div>
  );
};

export default Book;
