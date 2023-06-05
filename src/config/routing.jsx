import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";
import MasterLayout from "../layout/masterLayout";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Tables = lazy(() => import("../pages/Tables"));

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={`${STRINGS.ROUTES.LOGIN}`}
            element={
              <SuspensedView>
                <Login />
              </SuspensedView>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.DASHBOARD}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Dashboard />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.TABLES}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Tables />
                </SuspensedView>
              </MasterLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

const SuspensedView = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
