"use client";

import Link from "next/link";

import { toast } from "@/components/Toast";

const Home = () => {
  return (
    <main className="layout flex flex-col items-center justify-center text-center">
      <p>
        Fadhilkholaf next.js starter template by{" "}
        <Link href="https://fadhilkholaf.my.id">@fadhilkholaf</Link>.
      </p>
      <button
        type="button"
        onClick={() =>
          toast({
            type: "info",
            title: "Hello World!",
            description: "This is a toast!",
          })
        }
      >
        Click me!
      </button>
    </main>
  );
};

export default Home;
