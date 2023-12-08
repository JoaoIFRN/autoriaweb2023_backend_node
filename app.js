const express = require('express');
const cors = require('cors');
const app = express();
const tarefasRouter = require('./controllers/TarefaController');

app.use(express.json());
app.use(cors());

app.use("/tarefas",tarefasRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
