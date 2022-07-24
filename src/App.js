import StartCampaignPage from "pages/StartCampaignPage";
import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("pages/SingUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const LayoutDashboard = lazy(() => import("layout/LayoutDashboard"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign-start"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
