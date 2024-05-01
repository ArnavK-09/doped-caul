import { useLogin } from "@refinedev/core";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SupabaseProviderContext } from "../App";

export default function Navbar() {
  const { mutate } = useLogin();
  const { currentUser } = useContext(SupabaseProviderContext);

  return (
    <nav className="w-full px-5 md:px-10 flex h-full px-4 py-5 justify-between">
      <div>
        <NavLink
          aria-label="home"
          to="/"
          className="flex gap-4 align-middle text-center items-center justify-center"
        >
          <img
            src="/logo.svg"
            className="hover:scale-105 w-11 h-11 transition-all ease-in-out"
            alt="logo"
          />
          <span className="md:flex hidden font-extrabold !text-white uppercase tracking-tighter">
            Doped-Caul
          </span>
        </NavLink>
      </div>
      <div>
        {currentUser?.aud.toLowerCase() == "authenticated" ? (
          <NavLink
            aria-label="go to dashboard"
            to={"/dashboard"}
            className="primary_btn"
          >
            Go To Dashboard
          </NavLink>
        ) : (
          <button
            aria-label="get started"
            onClick={mutate}
            className="primary_btn"
          >
            Start Writing!
          </button>
        )}
      </div>
    </nav>
  );
}
