import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import Home from "./home/Home";
import About from "./about/About";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const router = useRouter();

  const renderPage = () => {
    // Get the pathname from the router
    const { pathname } = router;

    // Render the appropriate component based on the pathname
    switch (pathname) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      default:
        return <div>Not Found Baby!</div>;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div> */}
      {/* Render the appropriate page */}
      {renderPage()}
    </main>
  );
}
