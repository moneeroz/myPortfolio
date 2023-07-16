import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <h2 className="mt-20 font-bold text-gray-700 text-3xl">Projects</h2>
        <Projects />
      </div>
    </main>
  );
}
