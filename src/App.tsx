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
  showError: (msg: string) => void;
  setLoading?: Dispatch<SetStateAction<boolean>>;
}>({
  currentUser: null,
  loading: false,
  showError: (msg: string) => console.error(msg),
});
export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser();
      setCurrentUser(user.data.user);
    })();
  }, []);

  const showError = (msg: string) => {
    setErrorMessage(msg ?? "Error");
    setTimeout(() => setErrorMessage(null), 1000);
  };

  return (
    <SupabaseProviderContext.Provider
      value={{ currentUser, setLoading, loading, showError }}
    >
      {children}
      {loading && (
        <div className="absolute top-0 left-0 z-1000 bg-black/60 fixed h-full backdrop-blur-sm grid place-items-center overflow-x-hidden">
          <LoadingPage message="Processing your request..." />
        </div>
      )}
      {errorMessage !== null && (
        <div className="absolute top-0 left-0 z-1000 bg-black/60 fixed h-full backdrop-blur-sm grid place-items-center overflow-x-hidden">
          <LoadingPage message={errorMessage} />
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
        <CopilotKit
          url="https://6969-arnavk09-post-4nxaq7973mi.ws-us112.gitpod.io/"
          runtimeUrl="https://6969-arnavk09-post-4nxaq7973mi.ws-us112.gitpod.io/"
        >
          <SupabaseProvider>
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
