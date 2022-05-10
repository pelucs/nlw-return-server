import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//STARTAR O NOSSO SERVER - Rodando na porta 3333
app.listen(5000, () => {
  console.log("HTTP server running!");
})