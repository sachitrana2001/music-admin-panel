import { Route, Routes } from "react-router-dom";
import { ManagementRouter } from "./management";
import { AuthRouter } from "./access";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const {isLoggedIn} = useSelector((state) => state.admin);

  return (
    <Routes>
      {isLoggedIn && <Route path={"/*"} element={<ManagementRouter />} />}
      {!isLoggedIn && <Route path={"/*"} element={<AuthRouter />} />}
    </Routes>
  );
};

export default AppRouter;
