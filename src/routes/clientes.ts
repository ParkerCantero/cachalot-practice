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


clientesRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === id);
    if(!cliente){
        res.status(404).json({error: "Cliente no encontrado"});
        return;
    }
    res.json(cliente);
})


clientesRouter.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = clientes.findIndex(c => c.id === id);
    if(indice === -1){
        res.status(404).json({error: "Cliente no encontrado"});
        return;
    }
    clientes.splice(indice, 1);
    res.status(204).send();
})
