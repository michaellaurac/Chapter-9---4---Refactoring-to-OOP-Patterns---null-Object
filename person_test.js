const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const {
  Person,
  AnonymousPerson,
  NullString
} = require("./person.js");

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
    wish(personOne.name.toString() === "tony");
  });
  it("verifies personTwo's name is an instance of NullString", () => {
    wish(personTwo.name instanceof NullString);
  });
  // capitalize
  it("capitalizes personOne's name to Tony", () => {
    wish(personOne.name.capitalize().toString() === "Tony");
  });
  it("capitalizes personTwo's name to an instance of NullString", () => {
    wish(personTwo.name.capitalize() instanceof NullString);
  });
  // tigerify
  it("tigerifies capitalized personOne's name to \"Tony, the tiger\"", () => {
    wish(personOne.name.capitalize().tigerify().toString() === "Tony, the tiger");
  });
  it("tigerifies capitalized personTwo's name to an instance of NullString", () => {
    wish(personTwo.name.capitalize().tigerify() instanceof NullString);
  });
  // display
  it("displays the tigerified capitalized personOne's name to \"Tony, the tiger\"", () => {
    wish(personOne.name.capitalize().tigerify().display() === "Tony, the tiger");
  });
  it("displays the tigerified capitalized personTwo's name to \"\"", () => {
    wish(personTwo.name.capitalize().tigerify().display() === "");
  });
});
