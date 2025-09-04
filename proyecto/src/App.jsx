import { useState } from "react";

export default function App() {
  // Estado del contador
  const [contador, setContador] = useState(0);

  // Estilos en objetos JS
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      fontFamily: "Arial, sans-serif",
      color: "#fff",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    buttons: {
      display: "flex",
      gap: "15px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    sumar: {
      backgroundColor: "#28a745",
    },
    restar: {
      backgroundColor: "#dc3545",
    },
    reset: {
      backgroundColor: "#ffc107",
      color: "#000",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador: {contador}</h1>

      <div style={styles.buttons}>
        <button
          style={{ ...styles.button, ...styles.restar }}
          onClick={() => setContador(contador - 1)}
        >
          ➖ Restar
        </button>

        <button
          style={{ ...styles.button, ...styles.sumar }}
          onClick={() => setContador(contador + 1)}
        >
          ➕ Sumar
        </button>

        <button
          style={{ ...styles.button, ...styles.reset }}
          onClick={() => setContador(0)}
        >
          🔄 Reiniciar
        </button>
      </div>
    </div>
  );
}