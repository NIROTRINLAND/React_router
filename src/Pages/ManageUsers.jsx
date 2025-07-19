import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function ManageUsers() {
  const { users, setUsers } = useContext(UserContext);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", bio: "" });

  useEffect(() => {
    if (selectedIndex !== null && users && users[selectedIndex]) {
      setFormData(users[selectedIndex]);
    } else {
      setFormData({ name: "", email: "", bio: "" });
    }
  }, [selectedIndex, users]);

  const handleSelectUser = (index) => {
    setSelectedIndex(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

//   const handleSave = () => {
//     if (!formData.name.trim() || !formData.email.trim()) {
//       alert("Le nom et l'email sont obligatoires.");
//       return;
//     }

//     if (selectedIndex === null) {
//       const newUsers = [...users, formData];
//       setUsers(newUsers);
//       alert("Nouveau profil créé !");
//       setSelectedIndex(newUsers.length - 1);
//     } else {
//       const updatedUsers = [...users];
//       updatedUsers[selectedIndex] = formData;
//       setUsers(updatedUsers);
//       alert("Profil mis à jour !");
//     }
//   };


// Dans votre composant ManageUsers ou UserProvider
const handleSave = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Le nom et l'email sont obligatoires.");
      return;
    }
  
    if (selectedIndex === null) {
      const newUsers = [...users, formData];
      console.log("Nouvel utilisateur ajouté :", newUsers);
      setUsers(newUsers);
      alert("Nouveau profil créé !");
      setSelectedIndex(newUsers.length - 1);
    } else {
      const updatedUsers = [...users];
      updatedUsers[selectedIndex] = formData;
      console.log("Utilisateur mis à jour :", updatedUsers);
      setUsers(updatedUsers);
      alert("Profil mis à jour !");
    }
  };
  
  const handleNewProfile = () => {
    setSelectedIndex(null);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "40px",
    },
    container: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderRadius: "12px",
      padding: "30px",
      width: "400px",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "20px",
      textAlign: "center",
      textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
    },
    list: {
      listStyle: "none",
      maxHeight: "350px",
      overflowY: "auto",
      padding: 0,
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid rgba(255,255,255,0.3)",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    listItem: (isSelected) => ({
      padding: "12px 15px",
      cursor: "pointer",
      backgroundColor: isSelected ? "rgba(255, 255, 255, 0.25)" : "transparent",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      transition: "background-color 0.3s ease",
      fontWeight: isSelected ? "700" : "400",
      borderRadius: isSelected ? "8px" : "0",
    }),
    button: {
      width: "100%",
      padding: "12px",
      fontWeight: "700",
      fontSize: "1rem",
      backgroundColor: "#4c51bf",
      border: "none",
      borderRadius: "8px",
      color: "#fff",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(76, 81, 191, 0.4)",
      transition: "background-color 0.3s ease",
      marginTop: "10px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "600",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      marginBottom: "15px",
      fontSize: "1rem",
      outline: "none",
      boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      marginBottom: "15px",
      fontSize: "1rem",
      resize: "vertical",
      outline: "none",
      boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)",
      minHeight: "100px",
    },
    noProfiles: {
      fontStyle: "italic",
      opacity: 0.8,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      {/* Liste profils */}
      <div style={styles.container}>
        <h2 style={styles.title}>Liste des profils</h2>
        {users === null ? (
          <p style={styles.noProfiles}>Chargement des profils...</p>
        ) : users.length === 0 ? (
          <p style={styles.noProfiles}>Aucun profil disponible.</p>
        ) : (
          <ul style={styles.list}>
            {users.map((user, idx) => (
              <li
                key={idx}
                style={styles.listItem(idx === selectedIndex)}
                onClick={() => handleSelectUser(idx)}
              >
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
        <button style={styles.button} onClick={handleNewProfile}>
          + Nouveau profil
        </button>
      </div>

      {/* Formulaire création/modification */}
      <div style={styles.container}>
        <h2 style={styles.title}>
          {selectedIndex === null ? "Créer un nouveau profil" : "Modifier le profil"}
        </h2>

        <label style={styles.label}>Nom :</label>
        <input
          style={styles.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom complet"
          autoComplete="off"
        />

        <label style={styles.label}>Email :</label>
        <input
          style={styles.input}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@example.com"
          autoComplete="off"
          type="email"
        />

        <label style={styles.label}>Bio :</label>
        <textarea
          style={styles.textarea}
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Quelques mots sur vous..."
        />

        <button style={styles.button} onClick={handleSave}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}

export default ManageUsers;
