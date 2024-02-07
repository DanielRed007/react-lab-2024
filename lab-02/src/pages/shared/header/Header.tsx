import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4 px-6 md:py-6 md:px-12 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Hello Header</h1>
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
