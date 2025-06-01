import { ProjectList } from "@/app/components/project-list";
import { Navigation } from "@/app/components/navigation";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-700 via-blue-800 to-blue-950">
      <Navigation />
      <div className="max-w-screen-lg mx-auto text-lg flex flex-col gap-6 py-24">
        <h2 className="text-2xl text-gray-100 mb-4">My school projects:</h2>
        <ProjectList />
      </div>
    </div>
  );
}
