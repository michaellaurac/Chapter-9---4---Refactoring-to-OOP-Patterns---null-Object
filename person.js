class Person {
  constructor (name) {
    this.name = name;
  }
};

class AnonymousPerson extends Person {
  constructor () {
    super();
    this.name = null;
  }
}

module.exports = { Person, AnonymousPerson };
