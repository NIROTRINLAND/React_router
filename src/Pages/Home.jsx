import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cube3D from "../components/Cube3D";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-6">{t("welcome_to_home")}</h1>
      <Cube3D />
      <Link
        to="/dashboard"
        className="bg-cyan-300 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
      >
        {t("go_to_dashboard")}
      </Link>
    </div>
  );
}

export default Home;
