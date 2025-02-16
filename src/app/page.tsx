import Link from "next/link";

const Home = () => {
  return (
    <main className="layout flex items-center justify-center text-center">
      <p>
        Fadhilkholaf next.js starter template by{" "}
        <Link href="https://fadhilkholaf.my.id">@fadhilkholaf</Link>.
      </p>
    </main>
  );
};

export default Home;
