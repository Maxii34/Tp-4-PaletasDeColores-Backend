import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

//Se toma un puerto
//Se configura las middlewares
//Se usa las rutas
export default class Server {
  constructor() {
    this.app = express(); //Se guarda express en "app".
    this.port = process.env.PORT || 3001;
    this.middlewares();
    //this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    //Se configura el archivo estatico
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(__dirname + "/../../public"));
    console.log(__dirname);
    console.log(__dirname + "/../../public");
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(
        `El servidor se esta ejecutando en: http://localhost:${this.port}}`
      )
    );
  }

  //routes(){}
}
