const { gql } = require("apollo-server");

module.exports = gql`
  type Item {
    id: ID!
    name: String
    contents: [Content]
  }
`;
