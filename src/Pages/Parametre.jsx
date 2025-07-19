import { useContext, useState, useEffect, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { useDropzone } from "react-dropzone";
import Notification from "../components/Notification";

function Parametres() {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme, themeName } = useContext(ThemeContext);
  const [formData, setFormData] = useState(user || {
    name: "",
    email: "",
    bio: "",
    age: "",
    location: "",
    profileImage: ""
  });
  const [notification, setNotification] = useState("");

  useEffect(() => {
    console.log("Mise à jour de formData avec user :", user);
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSave = () => {
    console.log("Données avant sauvegarde :", formData);
    if (Object.values(formData).some((value) => value !== "")) {
      setUser(formData); // Correction : remplacé "form BrancoData" par "formData"
      setNotification("Profil mis à jour avec succès!");
    } else {
      console.log("Sauvegarde ignorée : formData est vide");
      setNotification("Erreur : Veuillez remplir au moins un champ.");
    }
  };

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      backgroundColor: theme.cardColor,
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      border: `1px solid ${theme.borderColor}`,
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: `1px solid ${theme.borderColor}`,
      backgroundColor: theme.inputBackgroundColor,
      color: theme.inputTextColor,
    },
    textarea: {
      padding: "10px",
      borderRadius: "5px",
      border: `1px solid ${theme.borderColor}`,
      minHeight: "100px",
      backgroundColor: theme.inputBackgroundColor,
      color: theme.inputTextColor,
    },
    btn: {
      marginTop: "10px",
      padding: "12px",
      backgroundColor: theme.buttonColor,
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    dropzone: {
      border: `2px dashed ${theme.buttonColor}`,
      borderRadius: "5px",
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
      backgroundColor: theme.inputBackgroundColor,
      color: theme.inputTextColor,
    },
    themeToggle: {
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Paramètres du Profil</h2>
      <div style={styles.card}>
        <label>Nom :</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <label>Email :</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <label>Âge :</label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={styles.input}
        />
        <label>Localisation :</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
        />
        <label>Bio :</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          style={styles.textarea}
        />
        <div {...getRootProps()} style={styles.dropzone}>
          <input {...getInputProps()} />
          <p>
            Glissez-déposez une image de profil ici, ou cliquez pour sélectionner
            une image
          </p>
        </div>
        {formData.profileImage && (
          <img
            src={formData.profileImage}
            alt="Profile"
            style={{ maxWidth: "100%", borderRadius: "5px" }}
          />
        )}
        <button style={styles.btn} onClick={handleSave}>
          Enregistrer
        </button>
        <button style={styles.themeToggle} onClick={toggleTheme}>
          Changer de thème (Actuel: {themeName})
        </button>
      </div>
      {notification && (
        <Notification message={notification} onClose={() => setNotification("")} />
      )}
    </div>
  );
}

export default Parametres;