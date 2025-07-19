import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Profil() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

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
    info: {
      margin: "5px 0",
      padding: "10px",
      backgroundColor: theme.inputBackgroundColor,
      borderRadius: "5px",
      color: theme.inputTextColor,
    },
    profileImage: {
      maxWidth: "100%",
      borderRadius: "5px",
      border: `1px solid ${theme.borderColor}`,
    },
  };

  return (
    <div style={styles.container}>
      <h2>Mon Profil</h2>
      <div style={styles.card}>
        {user?.profileImage && (
          <img
            src={user.profileImage}
            alt="Profile"
            style={styles.profileImage}
          />
        )}
        <div style={styles.info}>
          <strong>Nom :</strong> {user?.name || "Non défini"}
        </div>
        <div style={styles.info}>
          <strong>Email :</strong> {user?.email || "Non défini"}
        </div>
        <div style={styles.info}>
          <strong>Âge :</strong> {user?.age || "Non défini"}
        </div>
        <div style={styles.info}>
          <strong>Localisation :</strong> {user?.location || "Non défini"}
        </div>
        <div style={styles.info}>
          <strong>Bio :</strong> {user?.bio || "Non défini"}
        </div>
      </div>
    </div>
  );
}

export default Profil;