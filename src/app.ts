import express from 'express';
import {clientesRouter} from "./routes/clientes";

export const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    })
})

app.use("/clientes", clientesRouter);