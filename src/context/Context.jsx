import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: "",
          email: "",
          bio: "",
          poste: "",
          profession: "",
          groupeSanguin: "",
          pays: "",
          situationMatrimoniale: "",
          avatar: ""
        };
  });

  // Sauvegarder dans localStorage à chaque modif
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
