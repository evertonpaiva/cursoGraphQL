const { GraphQLServer } = require('graphql-yoga');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');
const resolvers = require ('./graphql/resolvers');

console.log('resolvers', resolvers);

conexao.connect(erro => {
  if (erro) {
    console.log(erro);
  }

  console.log('conectou no banco');

  Tabelas.init(conexao);
});

const servidor = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
});

servidor.start(() => console.log('servidor ouvindo'));
