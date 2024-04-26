import { useLogin } from "@refinedev/core";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const {mutate} = useLogin()
    return (
      <nav className="w-full px-5 md:px-10 flex h-full px-4 py-5 justify-between">
        <div>
          <NavLink
            aria-label="home"
            to="/"
            className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-5 py-2 font-bold tracking-wide uppercase"
          >
            Logo
          </NavLink>
        </div>
        <div>
          <button
            aria-label="get starter"
            onClick={mutate}
            className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-5 py-2 font-bold tracking-wide uppercase"
          >
            Start Writing!
          </button>
        </div>
      </nav>
    );
  }
  