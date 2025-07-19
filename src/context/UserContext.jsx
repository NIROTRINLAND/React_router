import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // Initialisé à null pour éviter l'objet vide initial

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Récupération de localStorage au montage :", storedUser);
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // Appliquer les données seulement si elles sont valides
        if (Object.values(parsedUser).some((value) => value !== "")) {
          console.log("Application des données de localStorage :", parsedUser);
          setUser(parsedUser);
        } else {
          console.log("Données vides dans localStorage, initialisation avec objet vide");
          setUser({
            name: "",
            email: "",
            bio: "",
            age: "",
            location: "",
            profileImage: ""
          });
        }
      } catch (error) {
        console.error("Erreur lors du parsing de localStorage :", error);
        setUser({
          name: "",
          email: "",
          bio: "",
          age: "",
          location: "",
          profileImage: ""
        });
      }
    } else {
      console.log("Aucune donnée dans localStorage, initialisation avec objet vide");
      setUser({
        name: "",
        email: "",
        bio: "",
        age: "",
        location: "",
        profileImage: ""
      });
      localStorage.setItem("user", JSON.stringify({
        name: "",
        email: "",
        bio: "",
        age: "",
        location: "",
        profileImage: ""
      }));
    }
  }, []);

  // Wrapper pour traquer les appels à setUser
  const setUserWithLog = (newUser) => {
    console.log("Appel à setUser avec :", newUser);
    if (newUser && Object.values(newUser).some((value) => value !== "")) {
      setUser(newUser);
    } else {
      console.log("setUser ignoré : données vides ou invalides");
    }
  };

  useEffect(() => {
    if (user && Object.values(user).some((value) => value !== "")) {
      console.log("Sauvegarde dans localStorage :", user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log("État user vide ou null, pas de sauvegarde dans localStorage");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser: setUserWithLog }}>
      {children}
    </UserContext.Provider>
  );
}