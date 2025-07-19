// src/components/Notification.jsx
import { useState, useEffect } from "react";

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed",
      top: "80px",
      right: "20px",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "15px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      {message}
    </div>
  );
}

export default Notification;
