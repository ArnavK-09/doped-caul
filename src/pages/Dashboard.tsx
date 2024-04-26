import { useGetIdentity, useList } from "@refinedev/core";
import PageSection from "../components/Section";
import { NavLink } from "react-router-dom";
import LoadingPage from "../components/Loading";

interface Project {
  title: string;
  id: string;
  description?: string;
  image?: string;
}

export default function Dashboard() {
  const userProjects: Project[] = [
    {
      title: "Post 1",
      id: "2323",
    },
  ];

  const { data, isLoading } = useList();
const {data:user}: {data: any} = useGetIdentity();
console.log(user?.email)
  if (isLoading) return <LoadingPage />;
  return (
    <PageSection title="Dashboard">
      <div className="mt-5 mb-14 grid place-items-center w-full">
        <NavLink
          className="hover:scale-105 block bg-gradient-to-br from-primary to-primary/80 transition-all ease-in-out shadow-md shadow-primary px-50 py-4 font-bold tracking-wide uppercase"
          aria-label="new post"
          to="/dashboard/post/new"
        >
          + New Post
        </NavLink>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-14">
        {data &&
          userProjects.map((P) => (
            <NavLink
              to={`/dashboard/post/${P.id}/edit`}
              aria-label="Post"
              className="hover:scale-98 transition-all ease-in-out h-64 relative w-[80%] grid grid-cols-3 bg-gray-100/3 rounded-xl"
            >
              <div
                style={{
                  background: `url(${
                    P.image ?? "https://picsum.photos/1280/640"
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="relative h-full w-full col-span-1 rounded-l-xl"
              ></div>
              <div className="grid w-full place-items-start place-items-center pl-2 pr-4 col-span-2">
                <div className="w-full">
                  <h3 className="text-xl mb-5 font-bold tracking-wide">
                    {P.title ?? "Post title"}
                  </h3>
                  <p className=" block mx-auto opacity-80 text-sm w-[80%] line-clamp-2">
                    {P.description ?? "No Content Available..."}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        {!data && (
          <div className="grid place-items-center h-32 w-full opacity-70 text-xl break-words px-4">
            (￣┰￣*)
            <br />
            You haven't created any posts yet!
          </div>
        )}
      </div>
    </PageSection>
  );
}
