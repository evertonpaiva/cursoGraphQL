const executaQuery = require('../database/queries');

class Atendimento {
  lista(res) {
    const sql = `SELECT * FROM Atendimentos`;

    executaQuery(res, sql);
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${parseInt(id)}`;

    executaQuery(res, sql);
  }

  adiciona(item) {
    const { clienteId, petId, servicoId, status, observacoes } = item;
    const data = new Date().toLocaleDateString();

    const sql = `
      INSERT INTO Atendimentos(clienteId, petId, servicoId, data, status, observacoes) 
      VALUES(${clienteId}, ${petId}, ${servicoId}, '${data}', '${status}', '${observacoes}')
    `;

    return executaQuery(sql).then(dados => ({
      id: dados.insertId,
      clienteId,
      petId,
      servicoId,
      data,
      status,
      observacoes
    }));
  }

  atualiza(res, novoItem, id) {
    const { cliente, pet, servico, status, observacoes } = item;
    const data = new Date.toLocaleDateString();

    const sql = `UPDATE Atendimentos SET clienteId=${cliente}, petId=${pet}, servicoId=${servico}, data='${data}', status='${status}' observacoes='${observacoes}' WHERE id=${id}`;

    executaQuery(res, sql);
  }

  deleta(res, id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`;

    executaQuery(res, sql);
  }
}

module.exports = new Atendimento;
