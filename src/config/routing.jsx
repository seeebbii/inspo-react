
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";

const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

export default function Routing() {

    return <>
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
                <SuspensedView>
                  <Dashboard />
                </SuspensedView>
              }
            />
            </Routes>
        </Router>
    </>

}

const SuspensedView = ({children}) => {
  
    return <Suspense fallback={<Loading />}>{children}</Suspense>
  }
