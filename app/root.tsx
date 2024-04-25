// imports
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar";

// stylesheets
// eslint-disable-next-line import/no-unresolved
import "virtual:uno.css";
import "~/global.css";
import "@unocss/reset/tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className="text-gray-100 overflow-x-hidden">
        <header className="bg-white/3 backdrop-blur-sm w-screen overflow-x-hidden">
          <Navbar />
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
