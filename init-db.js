const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function init() {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    DROP TABLE IF EXISTS proyectos;
  `);

  await db.exec(`
    CREATE TABLE proyectos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL
    );
  `);

  await db.run(
    "INSERT INTO proyectos (titulo, descripcion) VALUES (?, ?)",
    ["Tomahawk", "Chuleta madurada 21 días."]
  );

  await db.run(
    "INSERT INTO proyectos (titulo, descripcion) VALUES (?, ?)",
    ["Entrecot Premium", "Carne de vacuno seleccionada."]
  );

  await db.run(
    "INSERT INTO proyectos (titulo, descripcion) VALUES (?, ?)",
    ["Jamón Ibérico", "Curación tradicional y sabor intenso."]
  );

  console.log("Base de datos creada");
}

init();