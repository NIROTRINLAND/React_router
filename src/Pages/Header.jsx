import { Link, NavLink } from "react-router-dom";



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
    }

export default Header;
