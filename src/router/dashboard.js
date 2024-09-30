import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Dashboard />} />

      {/* 404 Routing */}
      <Route path={`*`} element={<div>404</div>} />
    </Routes>
  );
};
