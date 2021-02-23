const { ApolloServer } = require("apollo-server");

const schema = require("./schema");
const mocks = require("./schema/__mocks__");

const server = new ApolloServer({ schema, mocks });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
