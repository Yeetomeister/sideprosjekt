import { ProjectList } from "@/app/components/project-list";
import { Navigation } from "@/app/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-700 via-blue-800 to-blue-950 text-white">
      <Navigation />
      <br />
      <div className="flex flex-1 items-center justify-center">
        <Header />
      </div>
      <Footer />
    </div>
  );

  function Header() {
    return (
      <div>
        <h1 className="text-5xl font-semibold text-center text-indigo-500">
          Welcome
        </h1>
      </div>
    );
  }

  function Footer() {
    return (
      <div>
        <p className="text-center p-4">Made by Trym, as a hobby project</p>
      </div>
    );
  }
}
