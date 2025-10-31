import color from "../models/producto.js"

//crear color por nombre o decimal.
export const crearColors = async (req, res) => {
    try {
        console.log(req.body)
        const nuevoColor = new color(req.body)
        await nuevoColor.save()
        res.status(201).json({ mensaje: 'El color fue creado exitosamente.'})
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Ocurrio un error al crear el color.'})
    }
}