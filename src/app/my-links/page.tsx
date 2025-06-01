import React from "react";
import SocialLinks from "@/app/components/socialLinks";
import { Navigation } from "@/app/components/navigation";
export default function MyLinks() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-700 via-blue-800 to-blue-950">
      <Navigation />
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <h2 className="text-2xl text-gray-100 mb-4">Connect with me:</h2>
        <SocialLinks />
      </div>
    </div>
  );
}
