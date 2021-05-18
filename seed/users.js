const db = require("../db");
const User = require("../models/user");
const faker = require("faker");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const users = [...Array(40)].map((user) => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    items: [
      { title: faker.lorem.sentence(), link: faker.internet.url() },
      { title: faker.lorem.sentence(), link: faker.internet.url() },
      { title: faker.lorem.sentence(), link: faker.internet.url() },
      { title: faker.lorem.sentence(), link: faker.internet.url() },
    ],
  }));

  await User.insertMany(users);
  console.log("Created some users");
};

const run = async () => {
  await main();
  db.close();
};
run();
