const conexao = require('../conexao');

const executaQuery = (query) => {
  return conexao.query(query, (erro, resultados, campos) => {
    if (erro) {
      return erro;
    } else {
      return resultados;
    }
  })
};

module.exports = executaQuery;
