import { Refine } from "@refinedev/core";

import routerBindings from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { CopilotKit } from "@copilotkit/react-core";

function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        routerProvider={routerBindings}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "cxmmaQ-86Kqev-Oz118I",
        }}
      >
        <CopilotKit url="/api"> 
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </CopilotKit>
      </Refine>
    </BrowserRouter>
  );
}

export default App;
