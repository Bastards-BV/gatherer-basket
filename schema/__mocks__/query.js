const { MockList } = require("apollo-server");

module.exports = {
  Query: () => ({
    items: () => new MockList([0, 5]),
    item: (entity, { id }) => (id === "non-existent" ? null : entity),
  }),
};
