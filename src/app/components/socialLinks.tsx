import React from "react";
import Link from "next/link";
import { links } from "@/utils/linksData";
const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-500 via-blue-800 to-gray-800 p-8 rounded-lg shadow-lg">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href} className="flex items-center space-x-4">
            <img src={link.icon} alt={link.text} className="w-6 h-6" />
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
