import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";
import MasterLayout from "../layout/masterLayout";


const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Tables = lazy(() => import("../pages/Tables"));
const RTLComponent = lazy(() => import("../pages/RTL"));
const Forms = lazy(() => import("../pages/Forms"));
const Approval = lazy(() => import("../pages/Approval"));
const Ratings = lazy(() => import("../pages/Ratings"));
const Profile = lazy(() => import("../pages/Profile"));

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
          
          <Route
            path={`${STRINGS.ROUTES.RTL}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <RTLComponent />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.PROFILE}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Profile />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.FORMS}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Forms />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.APPROVAL}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Approval />
                </SuspensedView>
              </MasterLayout>
            }
          />
          <Route
            path={`${STRINGS.ROUTES.RATINGS}`}
            element={
              <MasterLayout>
                <SuspensedView>
                  <Ratings />
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
