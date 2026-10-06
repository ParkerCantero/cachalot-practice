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