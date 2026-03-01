const findTheOldest = function (people) {
  //find map all ages
  let oldest = [];

  people.forEach((person) => {
    if (person.yearOfDeath == null) {
      person.yearOfDeath = getFullYear();
    }

    const ages = people.map(
      (person) => person.yearOfDeath - person.yearOfBirth,
    );
  });
};

// Do not edit below this line
module.exports = findTheOldest;
