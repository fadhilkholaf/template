import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <p>
        [404] Not Found. <Link href="/">Back to home page</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
