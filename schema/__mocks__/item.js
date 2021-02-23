const { MockList } = require("apollo-server");
const { ulid } = require("ulid");
// We're gathering vehicles in the mocks
const { vehicle } = require("faker");

module.exports = {
  Item: () => ({
    id: ulid(),
    name: vehicle.vehicle(),
    contents: () => new MockList([0, 2]),
  }),
};
