import {Router} from "express";


export interface Cliente{
    id: number;
    nombre: String;
    correo: String;
}

export const clientes: Cliente[] = [];
let siguienteId = 1;

export const clientesRouter = Router();

clientesRouter.get("/", (req, res) =>{
    res.json(clientes);
})

clientesRouter.post("/", (req, res) => {
    const {nombre, correo} = req.body;
    if(
    typeof nombre !== "string" || !nombre.trim() ||
    typeof correo !== "string" || !correo.trim()
){
    res.status(400).json({error: "nombre y correo son requeridos"});
    return;
}

const nuevo: Cliente = {
    id: siguienteId++,
    nombre: nombre.trim(),
    correo: correo.trim()
}
clientes.push(nuevo);
res.status(201).json(nuevo);
})

