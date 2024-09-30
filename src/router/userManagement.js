import { Routes, Route, Navigate } from "react-router-dom";
import { MainRoutes, ModuleRoutes, SubModuleRoutes, UserManagementRoutes } from "../Config";
import { SubAdmins } from "../Pages/UserManagment";
import CreateAdmin from "../Pages/UserManagment/CreateAdmin";

export const UserManagementRouter = () => {
  return (
    <Routes>
      <Route
        path={`${UserManagementRoutes.SUB_ADMINS}${SubModuleRoutes.LIST}`}
        element={<SubAdmins />}
      />

      <Route
        path={`${UserManagementRoutes.CREATE_ADMIN}`}
        element={<CreateAdmin />}
      />

      {/* 404 Routing */}
      <Route
        path={`*`}
        element={
          <Navigate replace to={`${MainRoutes.APP}${ModuleRoutes.DASHBOARD}`} />
        }
      />
    </Routes>
  );
};
