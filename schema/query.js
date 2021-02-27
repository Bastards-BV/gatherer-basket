const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    items: [Item]
    item(id: String!): Item
  }
`;
