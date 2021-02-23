const faker = require("faker");
const names = {};

/**
 * Some weird logic because faker tracks uniqueness globally.
 */
module.exports = {
  Content: (parent) => {
    if (names[parent.id] == null) {
      names[parent.id] = ["description", "image"];
    }
    const content = {
      name: faker.helpers.shuffle(names[parent.id]).pop(),
    };

    return {
      ...content,
      body:
        content.name === "description"
          ? faker.lorem.sentences()
          : faker.system.commonFileName("jpg"),
    };
  },
};
