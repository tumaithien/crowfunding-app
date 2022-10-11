import CampaignDetails from "modules/campaign/CampaignDetails";
import StartCampaignPage from "pages/StartCampaignPage";
import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import LayoutDashboard from "layout/LayoutDashboard";
import LayoutPayment from "layout/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken } from "utils/auth";
import {
  getCampaign,
  getCampaignRecent,
  getCampaignSearch,
} from "store/campaign/slice";

const SignUpPage = lazy(() => import("pages/SingUpPage"));
const SignInPage = lazy(() => import("pages/SignInPage"));
const DashboardPage = lazy(() => import("pages/DashboardPage"));
const CampaignPage = lazy(() => import("pages/CampaignPage"));
const PaymentPage = lazy(() => import("pages/PaymentPage"));
const CheckoutPage = lazy(() => import("pages/CheckoutPage"));
const ShippingPage = lazy(() => import("pages/ShippingPage"));

const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();
      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
      //dispatch action
      dispatch(getCampaign());
      dispatch(getCampaignRecent());
      dispatch(getCampaignSearch());
    } else {
      const { refresh_token } = getToken();
      dispatch(authRefreshToken(refresh_token));
    }
  }, [dispatch, user]);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign-start"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignDetails></CampaignDetails>}
          ></Route>
          {/* <Route path="/search" element={<SearchPage></SearchPage>}></Route> */}
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
