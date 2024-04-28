import { NavLink } from "react-router-dom";

export default function NoAuthPage() {
    return (
      <section className="grid place-items-center h-screen w-full">
        <div className="text-center align-middle">
        <h2 className="my-6 font-semibold tracking-wide opacity-85">You are not authorized</h2>
        <NavLink
            aria-label="go to home"
            to={"/"}
            className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-5 py-2 font-bold tracking-wide uppercase"
          >
            Go To Home
          </NavLink>
        </div>

      </section>
    );
  }
  