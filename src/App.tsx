import { Refine } from "@refinedev/core";

import routerBindings from "@refinedev/react-router-v6";
import { dataProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { CopilotKit } from "@copilotkit/react-core";
import supabase from "./utility/supabase";
import EditPost from "./pages/PostEdit";
import PublishPost from "./pages/PostPublish";
import authProvider from "./authProvider";
import {
  useEffect,
  useState,
  createContext,
  type ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import NewPost from "./pages/PostNew";
import LoadingPage from "./components/Loading";

export const SupabaseProviderContext = createContext<{
  currentUser: any;
  loading: boolean;
  setLoading?: Dispatch<SetStateAction<boolean>>;
}>({ currentUser: null, loading: false });
export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser();
      setCurrentUser(user.data.user);
    })();
  }, []);

  return (
    <SupabaseProviderContext.Provider
      value={{ currentUser, setLoading, loading }}
    >
      {children}
      {loading && (
        <div className="absolute top-0 left-0 z-1000 bg-black/60 fixed h-full backdrop-blur-sm grid place-items-center overflow-x-hidden">
          <LoadingPage message="Processing your request..." />
        </div>
      )}
    </SupabaseProviderContext.Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider(supabase)}
        routerProvider={routerBindings}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "cxmmaQ-86Kqev-Oz118I",
        }}
        authProvider={authProvider}
        resources={[
          {
            name: "posts",
            list: "/dashboard",
            show: "/dashboard/post/:id/publish",
            create: "/dashboard/post/new",
            edit: "/dashboard/post/:id/edit",
          },
        ]}
      >
        <CopilotKit url="/api">
          <SupabaseProvider>
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  element={<h1>API</h1>}
                  path="/api/"
                  loader={async ({ params }) => {
                    return params;
                  }}
                  action={async ({ request }) => {
                    switch (request.method) {
                      case "PUT": {
                        return { hi: true };
                      }
                      default: {
                        throw new Response("", { status: 405 });
                      }
                    }
                  }}
                />
                <Route path="/dashboard/post/new" element={<NewPost />} />
                <Route path="/dashboard/post/:id/edit" element={<EditPost />} />
                <Route
                  path="/dashboard/post/:id/publish"
                  element={<PublishPost />}
                />
              </Routes>
            </Layout>
          </SupabaseProvider>
        </CopilotKit>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
