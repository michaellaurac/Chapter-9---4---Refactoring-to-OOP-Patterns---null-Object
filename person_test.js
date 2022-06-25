const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Person, AnonymousPerson, capitalize, tigerify, display } = require("./person.js");

describe("tests run on the 'person.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "person_test.js");
  });
  // functional tests
  const personOne = new Person("tony");
  const personTwo = new AnonymousPerson("tony");
  // constructors
  it("verifies personOne's name is tony", () => {
    wish(personOne.name === "tony");
  });
  it("verifies personTwo's name is null", () => {
    wish(personTwo.name === null);
  });
  // capitalize
  it("capitalizes personOne's name to Tony", () => {
    wish(capitalize(personOne.name) === "Tony");
  });
  it("capitalizes personTwo's name to null", () => {
    wish(capitalize(personTwo.name) === null);
  });
  // tigerify
  it("tigerifies capitalized personOne's name to \"Tony, the tiger\"", () => {
    wish(tigerify(capitalize(personOne.name)) === "Tony, the tiger");
  });
  it("tigerifies capitalized personTwo's name to null", () => {
    wish(tigerify(capitalize(personTwo.name)) === null);
  });
  // display
  it("displays the tigerified capitalized personOne's name to \"Tony, the tiger\"", () => {
    wish(display(tigerify(capitalize(personOne.name))) === "Tony, the tiger");
  });
  it("displays the tigerified capitalized personTwo's name to \"\"", () => {
    wish(display(tigerify(capitalize(personTwo.name))) === "");
  });
});
