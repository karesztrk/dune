import { Suspense } from "react";
import Quote from "./Quote";

const Content = () => {
  return (
    <Suspense fallback="Loading...">
      <Quote />
    </Suspense>
  );
};

export default Content;
