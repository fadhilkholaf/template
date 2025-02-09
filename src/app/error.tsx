"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full w-full items-center justify-center">
      <p>
        [500] Server Error
        <button type="button" onClick={() => reset()}>
          Try Again
        </button>
      </p>
    </main>
  );
};

export default ErrorPage;
