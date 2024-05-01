// imports

import Navbar from "./Navbar";

// stylesheets
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-gray-100 overflow-x-hidden">
      <header className="bg-white/3 backdrop-blur-sm w-screen overflow-x-hidden">
        <Navbar />
      </header>
      {children}
    </main>
  );
}
