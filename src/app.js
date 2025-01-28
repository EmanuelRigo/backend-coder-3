import express from 'express';
import usersRouter from './routes/users.router.js';



const app = express();
const PUERTO = 9000;

app.use("/api/users", usersRouter);

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});