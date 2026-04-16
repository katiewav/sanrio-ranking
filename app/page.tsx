import Header from "@/components/Header";
import WinnersGrid from "@/components/WinnersGrid";

export default function Home() {
  return (
    <main className="flex-grow">
      <Header />
      <WinnersGrid />
    </main>
  );
}
