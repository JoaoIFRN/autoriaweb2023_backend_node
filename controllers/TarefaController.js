// tasks.js
const express = require('express');
const router = express.Router();
const db = require('../util/db');

// Rota para buscar todas as tarefas
router.get('/', (req, res) => {
  db.query('SELECT * FROM tarefa', (err, result) => {
    if (err) 
      res.status(500).json({erro : "Erro na consulta de tarefas", error: err});
    else
      res.status(200).json(result);
  });
});

// Rota para criar uma nova tarefa
router.post('/', (req, res) => {
  const { titulo, descricao } = req.body;
  db.query('INSERT INTO tarefa (titulo, descricao) VALUES (?, ?)', [titulo, descricao], (err, result) => {
    if (err) { 
      res.status(500).json({erro : "Erro no cadastro de tarefa!", error: err});
    } else {
      res.status(200).json({mensagem : 'Tarefa criada com sucesso!'});
    }
  });
});

router.delete("/:id", (req, res) => {
  const tarefaId = req.params.id;
  const sql = 'DELETE FROM tarefa WHERE id = ?';;

  db.query(sql, [tarefaId], (err, result) => {
    if (err) {      
      res.status(500).json({erro : 'Erro interno do servidor', error : err});
    } else {
      res.status(200).json({mensagem: 'Registro deletado com sucesso'});
    }
  });
});

module.exports = router;
