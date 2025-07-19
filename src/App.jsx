import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import Header from "./Pages/Header";
import Dashboard from "./Pages/Dashboard";
import Profil from "./Pages/Profil";
import Parametre from "./Pages/Parametre";
<<<<<<< HEAD
import { UserProvider } from "./context/UserContext";
// import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import ManageUsers from "./Pages/ManageUsers";
function App() {
      return (
        <UserProvider>
          <ThemeProvider>
=======
import { UserProvider } from "./context/Context";
import User from "./Pages/User";


function App() {
      return (
        <UserProvider>
>>>>>>> 9df4f08b49f41a462ed4d3a55ca08b7a143dd55c
        <BrowserRouter>
          <Header />
          <div className="pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/manage-users" element={<ManageUsers />} />
              <Route path="/products/:id" element={<Products />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Navigate to="user" replace />} />
                <Route path="profil" element={<Profil />} />
                <Route path="parametres" element={<Parametre />} />
                <Route path="user" element={<User />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
<<<<<<< HEAD
        </ThemeProvider>
=======
>>>>>>> 9df4f08b49f41a462ed4d3a55ca08b7a143dd55c
        </UserProvider>
      );
    }


export default App;
