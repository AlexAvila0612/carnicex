"use client";

import { useState } from "react";

export default function NuevoProducto() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

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

  return (
    <main style={{ padding: "20px" }}>
      <h1>Nuevo Producto</h1>

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