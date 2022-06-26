class Person {
  constructor (name) {
    this.name = new NameString(name);
  }
};

class AnonymousPerson extends Person {
  constructor () {
    super();
    this.name = new NullString();
  }
}

class NullString {
  capitalize () {
    return null;
  }
}

class NameString extends String {
  capitalize () {
    if (this === null) {
      return null;
    } else {
      return new NameString(this[0].toUpperCase() + this.substring(1));
    }
  }

  tigerify () {
    if (this === null) {
      return null;
    } else {
      return new NameString(`${this}, the tiger`);
    }
  }

  display () {
    if (this === null) {
      return "";
    } else {
      return this.toString();
    }
  }
};

module.exports = {
  Person,
  AnonymousPerson
};
