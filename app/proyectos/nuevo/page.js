"use client";

import { useEffect, useState } from "react";



export default function NuevoProducto() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [autenticado, setAutenticado] = useState(null);
 
  useEffect(() => {
  async function comprobarSesion() {
    const res = await fetch("/api/auth/get-session");
    const data = await res.json();

    setAutenticado(!!data);
  }

  comprobarSesion();
}, []);
 
  async function guardarProducto(e) {
    e.preventDefault();

    const res = await fetch("/api/proyectos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        descripcion,
      }),
    });

    const data = await res.json();

    setMensaje(data.mensaje);
    setTitulo("");
    setDescripcion("");
  }

if (autenticado === null) {
  return <p>Cargando...</p>;
}

if (!autenticado) {
  return <p>Debes iniciar sesión para acceder a esta página.</p>;
}

  return (
  <main style={{ padding: "40px", fontFamily: "Arial" }}>
  <h1>Productos Carnicex</h1>

 

      <form onSubmit={guardarProducto}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <br /><br />

        <button type="submit">Guardar Producto</button>
      </form>

      <p>{mensaje}</p>
    </main>
  );
}