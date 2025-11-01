import color from "../models/producto.js";

//crear color por nombre o decimal.
export const crearColors = async (req, res) => {
  try {
    console.log(req.body);
    const nuevoColor = new color(req.body);
    await nuevoColor.save();
    res.status(201).json({ mensaje: "El color fue creado exitosamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear el color." });
  }
};

//Listar colores
export const listarColores = async (req, res) => {
  try {
    const colores = await color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los colores." });
  }
};

//Obtener colores por id.
export const obtenerColorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const colorID = await color.findById(req.params.id);
    if (!colorID) {
      return res.status(404).json({ mensaje: "El color no fue encontrado." });
    }
    res.status(200).json(colorID);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al obtener el color." });
  }
};

//Borrar color por id.
export const borrarColorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const colorBorrarID = await color.findById(req.params.id);
    if (!colorBorrarID) {
      return res.status(404).json({ mensaje: "El color no fue encontrado." });
    }
    await colorBorrarID.deleteOne();
    res.status(200).json({ mensaje: "El color fue borrado exitosamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al borrar el color." });
  }
};
