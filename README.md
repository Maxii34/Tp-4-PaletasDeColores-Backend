# 🎨 Backend - Paleta de Colores 🎨

Este proyecto es un backend para una aplicación de paleta de colores. Proporciona los endpoints necesarios para administrar una colección de colores.

## Autor

- Maximiliano Ordoñez
- Desarrollador Full Stack | Fucionando logica y diseño en cada proyecto.


## Deploy frontend

[Link de la pagina: Proximamnete]()

## Tecnologías Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Cors](https://img.shields.io/badge/Cors-enabled-brightgreen?style=for-the-badge)
![Morgan](https://img.shields.io/badge/Morgan-black?style=for-the-badge&logo=npm&logoColor=white)


## Descripción

El backend permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre una base de datos de colores. Cada color es un objeto con las siguientes propiedades:

*   `código único`
*   `nombre del color`
*   `código hexadecimal` (opcional)
*   `código RGB o RGBA` (opcional)

## Endpoints de la API

La API proporciona los siguientes endpoints:

| Método | Ruta      | Descripción                            |
| :------- | :-------- | :------------------------------------- |
| `GET`    | `/`       | Lista todos los colores.               |
| `POST`   | `/`       | Agrega un nuevo color.                 |
| `GET`    | `/:id`    | Obtiene un color por su ID.            |
| `PUT`    | `/:id`    | Edita un color existente por su ID.    |
| `DELETE` | `/:id`    | Borra un color existente por su ID.    |

---