import LogoutButton from "./LogoutButton";

export default async function Proyectos() {
  const res = await fetch("http://localhost:3000/api/proyectos", {
    cache: "no-store",
  });

  const proyectos = await res.json();

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Productos Carnicex</h1>

      <LogoutButton />

      <br /><br />

      {proyectos.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{p.titulo}</h2>
          <p>{p.descripcion}</p>
        </div>
      ))}
    </main>
  );
}