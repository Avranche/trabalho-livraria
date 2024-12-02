import express from 'express';
import userRoutes from './routes/authRoutes';
import crudRoutes from './routes/crudRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
app.use(userRoutes);
app.use(crudRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta PORT`);
});