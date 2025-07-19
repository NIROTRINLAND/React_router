<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import frFlag from "../assets/flags/fr.svg";
import gbFlag from "../assets/flags/gb.svg";
>>>>>>> 9df4f08b49f41a462ed4d3a55ca08b7a143dd55c

const HEADER_COLORS = [
  "#0ea5e9", // bleu
  "#f59e42", // orange
  "#22c55e", // vert
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

<<<<<<< HEAD
 function Header() {
      return (
        <header className="fixed top-0 left-0 w-full bg-cyan-200 border-b border-gray-200 py-3 px-6 flex items-center justify-start space-x-6 shadow-sm z-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            Maison
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
           À propos
          </NavLink>
          <NavLink
            to="/products/1"
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            Produits 1
          </NavLink>
          <NavLink
            to="/products/2"
            className={({ isActive }) =>
              `text-lg font-medium px-4 py-2 rounded-md transition-colors duration-300 ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`
            }
          >
            Produits 2
          </NavLink>
          
          <Link to="/manage-users">Gérer les profils</Link> 
        </header>
      );
=======
  const languages = [
    { code: "fr", label: "Français", flag: frFlag },
    { code: "en", label: "English", flag: gbFlag }
  ];

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative ml-auto">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none"
      >
        <img src={current.flag} alt={current.label} className="w-5 h-5 rounded-full" />
        <span>{current.label}</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [headerColor, setHeaderColor] = useState(HEADER_COLORS[0]);
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
>>>>>>> 9df4f08b49f41a462ed4d3a55ca08b7a143dd55c
    }
  }, [darkMode]);

  return (
    <header
      style={!darkMode ? { backgroundColor: headerColor } : {}}
      className="fixed top-0 left-0 w-full border-b border-gray-200 py-3 px-6 flex shadow-sm z-10 transition-colors duration-500 bg-white dark:bg-gray-900"
    >
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="mr-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        title={darkMode ? 'Mode clair' : 'Mode sombre'}
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
      {/* Palette de couleurs */}
      <div className="flex items-center gap-2 mr-4">
        {HEADER_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setHeaderColor(color)}
            style={{ backgroundColor: color, border: headerColor === color ? '2px solid #222' : '2px solid transparent' }}
            className={`w-6 h-6 rounded-full focus:outline-none transition-all duration-200 ${headerColor === color ? 'ring-2 ring-cyan-500' : ''}`}
            aria-label={`Choisir la couleur ${color}`}
          />
        ))}
      </div>
      <nav className="flex w-full gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex-1 text-center text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 text-black dark:text-white ${isActive ? 'bg-blue-300 dark:bg-gray-800' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}`
          }
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex-1 text-center text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 text-black dark:text-white ${isActive ? 'bg-blue-300 dark:bg-gray-800' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}`
          }
        >
         {t("about")}
        </NavLink>
        <NavLink
          to="/products/1"
          className={({ isActive }) =>
            `flex-1 text-center text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 text-black dark:text-white ${isActive ? 'bg-blue-300 dark:bg-gray-800' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}`
          }
        >
          {t("products1")}
        </NavLink>
        <NavLink
          to="/products/2"
          className={({ isActive }) =>
            `flex-1 text-center text-lg font-bold px-4 py-2 rounded-lg transition-colors duration-300 text-black dark:text-white ${isActive ? 'bg-blue-300 dark:bg-gray-800' : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'}`
          }
        >
          {t("products2")}
        </NavLink>
      </nav>
      <LanguageSelector />
    </header>
  );
}

export default Header;
