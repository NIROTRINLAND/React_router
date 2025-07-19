import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-6">{t("dashboard")}</h1>
      <nav className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-8 w-full justify-center">
        <NavLink
          to="parametres"
          className={({ isActive }) =>
            `text-base font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-cyan-300 text-white dark:bg-cyan-700 dark:text-white' : 'text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`
          }
        >
          {t('settings')}
        </NavLink>
        <NavLink
          to="user"
          className={({ isActive }) =>
            `text-base font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'bg-cyan-300 text-white dark:bg-cyan-700 dark:text-white' : 'text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`
          }
        >
          {t('view_profile')}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
