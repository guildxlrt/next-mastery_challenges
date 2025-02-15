import Image from "next/image";
import Button from "./button";

export default function News() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <p>News</p>

      <Button />
    </main>
  );
}
