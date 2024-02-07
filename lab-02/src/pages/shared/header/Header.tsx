import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4 px-6 md:py-6 md:px-12 flex justify-between items-center">
        <span className="text-2xl md:text-3xl font-bold">
          <HomeIcon className="h-10 w-10 text-white" />
        </span>
        <nav className="mt-2">
          <Link
            href="/"
            className="text-white mr-4 transition-colors hover:text-blue-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white mr-4 transition-colors hover:text-blue-300"
          >
            About
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
