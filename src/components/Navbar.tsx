export default function Navbar() {
    return (
      <nav className="w-full px-5 md:px-10 flex h-full px-4 py-5 justify-between">
        <div>
          <a
            aria-label="home"
            href="/"
            className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-5 py-2 font-bold tracking-wide uppercase"
          >
            Logo
          </a>
        </div>
        <div>
          <a
            aria-label="get starter"
            href="/login"
            className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-5 py-2 font-bold tracking-wide uppercase"
          >
            Start Writing!
          </a>
        </div>
      </nav>
    );
  }
  