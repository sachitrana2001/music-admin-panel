import { Routes, Route, Navigate } from "react-router-dom";
import { MainRoutes, ModuleRoutes } from "../Config";
import { DashboardRouter } from "./dashboard";
import { DashboardLayout } from "../Layout";
import { UserManagementRouter } from "./userManagement";
// import { LeadsRouter } from "./leads";
// import { MasterDataRouter } from "./masterData";

export const ManagementRouter = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path={`${MainRoutes.APP}`}>
            {/* Redirect to dashboard by default */}
            <Route
              index
              element={
                <Navigate
                  replace
                  to={`${MainRoutes.APP}${ModuleRoutes.DASHBOARD}`}
                />
              }
            />

            {/* Dashboard route */}
            <Route
              path={`${MainRoutes.APP}${ModuleRoutes.DASHBOARD}`}
              element={<DashboardRouter />}
            />
             <Route path={`${MainRoutes.APP}${ModuleRoutes.USER_MANAGEMENT}`}>
              <Route index path={"*"} element={<UserManagementRouter />} />
            </Route>

           

            {/* Uncomment these when Leads and MasterData are ready */}
            {/* <Route path={`${MainRoutes.APP}${ModuleRoutes.LEADS}`} element={<LeadsRouter />} /> */}
            {/* <Route path={`${MainRoutes.APP}${ModuleRoutes.MASTER_DATA}`} element={<MasterDataRouter />} /> */}

            {/* Fallback redirect to dashboard if no other route matches */}
            <Route
              path="*"
              element={
                <Navigate
                  replace
                  to={`${MainRoutes.APP}${ModuleRoutes.DASHBOARD}`}
                />
              }
            />
          </Route>
        </Routes>
      </DashboardLayout>
    </>
  );
};
