import { Routes, Route } from "react-router-dom";
import Leads from "../Pages/Leads";

export const LeadsRouter = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Leads />} />

      {/* 404 Routing */}
      <Route path={`*`} element={<div>404</div>} />
    </Routes>
  );
};
