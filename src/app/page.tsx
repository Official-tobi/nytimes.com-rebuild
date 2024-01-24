import Navbar from "@/app/ui/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-[40vh] bg-background-secondary border-b-stroke-quartenary border border-solid"></section>
      <Navbar />
    </main>
  );
}
