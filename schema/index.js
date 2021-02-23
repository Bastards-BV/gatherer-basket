const { makeExecutableSchema } = require("apollo-server");

module.exports = makeExecutableSchema({
  typeDefs: [require("./item"), require("./content"), require("./query")],
});
