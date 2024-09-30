export const MainRoutes = {
  ACCESS: "/access",
  APP: "/app",
};

export const AccessRoutes = {
  SIGNIN: "/signin",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  VERIFY: "/verify",
  LOGOUT: "/logout",
  TOKEN: "/:token",
};

export const SubModuleRoutes = {
  LIST: "/list",
};

export const ModuleRoutes = {
  DASHBOARD: "/dashboard",
  LEADS: "/leads",
  MASTER_DATA: "/master-data",
  USER_MANAGEMENT: "/user-management",
  REPORTS: "/reports",
};
export const UserManagementRoutes = {
  SUB_ADMINS: "/admin",
  CREATE_ADMIN: "/create-admin",
};
export const NavbarRoutes = [
  {
    name: "Dashboard",
    to: `${MainRoutes.APP}${ModuleRoutes.DASHBOARD}`,
  },

  {
    name: "User Management",
    // to: `${MainRoutes.APP}${ModuleRoutes.USER_MANAGEMENT}`,
    children: [
      {
        to: `${MainRoutes.APP}${ModuleRoutes.USER_MANAGEMENT}${UserManagementRoutes.SUB_ADMINS}${SubModuleRoutes.LIST}`,
        name: "Admins",
      },
      {
        to: `${MainRoutes.APP}${ModuleRoutes.USER_MANAGEMENT}${UserManagementRoutes.CREATE_ADMIN}`,
        name: "Create Admin",
      },
    ],
  },
];
