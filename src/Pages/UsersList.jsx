import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(null); // null pour différencier "chargement" et "vide"

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers([]); // rien en localStorage
    }
  }, []);

  useEffect(() => {
    if (users !== null) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
