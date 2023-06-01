
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
// import Login from "../pages/Login";
import Loading from "../pages/Loading";
import { STRINGS } from "../utils/Enums";

const Login = lazy(() => import('../pages/Login'))

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
            </Routes>
        </Router>
    </>

}

const SuspensedView = ({children}) => {
  
    return <Suspense fallback={<Loading />}>{children}</Suspense>
  }
