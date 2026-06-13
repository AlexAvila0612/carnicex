# Carnicex

## Descripción

Carnicex es una aplicación web desarrollada como proyecto final del curso. Su objetivo es gestionar un catálogo de productos cárnicos mediante una interfaz sencilla que permite consultar y añadir nuevos productos de forma segura.

La aplicación ha sido construida utilizando Next.js tanto para el frontend como para el backend, aprovechando los Route Handlers para exponer una API propia y SQLite como sistema de almacenamiento de datos. Además, incorpora autenticación de usuarios mediante Better Auth para restringir el acceso a determinadas funcionalidades.

## Funcionalidades

La aplicación permite consultar los productos almacenados en la base de datos y añadir nuevos productos a través de un formulario protegido. Para acceder a las funcionalidades privadas es necesario disponer de una cuenta y haber iniciado sesión.

El sistema de autenticación incluye registro de usuarios, inicio de sesión, cierre de sesión y gestión de sesiones persistentes mediante cookies. Asimismo, se ha implementado una comprobación de acceso que impide utilizar determinadas páginas cuando el usuario no está autenticado.

## Tecnologías utilizadas

El proyecto ha sido desarrollado con Next.js y React. La persistencia de datos se realiza mediante SQLite y la autenticación se gestiona con Better Auth. Para el control de versiones y la gestión del código fuente se ha utilizado Git junto con GitHub.

## Instalación y ejecución

Para ejecutar el proyecto en local es necesario clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Una vez completada la instalación, la aplicación puede iniciarse mediante:

```bash
npm run dev
```

Por defecto estará disponible en la dirección:

```text
http://localhost:3000
```

## Estructura general

La aplicación se organiza en una parte pública y otra privada. Los productos se almacenan en una base de datos SQLite y son gestionados mediante una API propia desarrollada con Route Handlers de Next.js.

Las páginas relacionadas con la creación de productos están protegidas y requieren que el usuario haya iniciado sesión correctamente.

## Decisiones técnicas

Se ha optado por SQLite por su sencillez de configuración y porque resulta suficiente para una aplicación de tamaño reducido. Next.js permite centralizar frontend y backend dentro del mismo proyecto, simplificando el desarrollo y el despliegue.

Para la autenticación se ha utilizado Better Auth debido a su integración con Next.js y a la facilidad para gestionar sesiones y usuarios.

## Uso de inteligencia artificial

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para la resolución de errores, la configuración de Better Auth, la depuración de problemas relacionados con Next.js y la revisión de fragmentos de código.

Las sugerencias obtenidas fueron analizadas, adaptadas y probadas antes de incorporarse al proyecto final.

## Autor

Alexander Peraza Avila
