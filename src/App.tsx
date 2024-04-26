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
            edit: "/dashboard/post/:id/edit"
          },
        ]}
      >
        <CopilotKit url="/api">
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/post/:id/edit" element={<EditPost />} />
              <Route
                path="/dashboard/post/:id/publish"
                element={<PublishPost />}
              />
            </Routes>
          </Layout>
        </CopilotKit>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
