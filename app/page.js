export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Carnicex</h1>

      <p>
        Tu carnicería online de confianza. Encuentra carne fresca,
        embutidos y productos de máxima calidad.
      </p>

      <a
        href="/proyectos"
        style={{
          background: "#b22222",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Ver productos
      </a>
    </main>
  );
}