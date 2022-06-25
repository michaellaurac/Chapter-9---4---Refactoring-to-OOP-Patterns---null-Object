const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Person, AnonymousPerson, capitalize } = require("./person.js");

describe("tests run on the 'person.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "person_test.js");
  });
  // functional tests
  const personOne = new Person("tony");
  const personTwo = new AnonymousPerson("tony");
  it("verifies personOne's name is tony", () => {
    wish(capitalize(personOne.name) === "Tony");
  });
  it("verifies personTwo's name is null", () => {
    wish(capitalize(personTwo.name) === null);
  });
});
