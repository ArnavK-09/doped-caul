import { Authenticated, useList } from "@refinedev/core";
import PageSection from "../components/Section";
import { NavLink } from "react-router-dom";
import LoadingPage from "../components/Loading";
import NoAuthPage from "../components/NoAuth";

export interface Project {
  content: string;
  created_on: string;
  id: string;
  image?: string;
  post_owner_uid: string;
  published_to: string[];
  short_description: string;
  title: string;
}

export default function Dashboard() {
  const { data } = useList<Project>({
    resource: "posts",
  });

  return (
    <Authenticated
      key="dashboard"
      fallback={<NoAuthPage />}
      loading={<LoadingPage />}
    >
      <PageSection title="Dashboard">
        <div className="mt-5 mb-14 grid place-items-center w-full">
          <NavLink
            className="primary_btn"
            aria-label="new post"
            to="/dashboard/post/new"
          >
            + New Post
          </NavLink>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-14">
          {data?.total !== 0 &&
            data?.data.map((P) => (
              <NavLink
                key={P.id}
                to={`/dashboard/post/${P.id}/edit`}
                aria-label="Post"
                className="hover:scale-98 transition-all ease-in-out h-64 relative w-[80%] grid grid-cols-1 md:grid-cols-3 bg-gray-100/3 rounded-xl"
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
                      {P.title}
                    </h3>
                    <p className=" block mx-auto opacity-80 text-sm w-[80%] line-clamp-2">
                      {P.short_description}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          {(!data || data?.total == 0) && (
            <div className="grid place-items-center h-32 w-full opacity-70 text-xl break-words px-4">
              (￣┰￣*)
              <br />
              You haven't created any posts yet!
            </div>
          )}
        </div>
      </PageSection>
    </Authenticated>
  );
}
