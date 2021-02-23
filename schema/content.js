const { gql } = require("apollo-server");

module.exports = gql`
  type Content {
    item: Item
    name: String
    body: String
  }
`;
