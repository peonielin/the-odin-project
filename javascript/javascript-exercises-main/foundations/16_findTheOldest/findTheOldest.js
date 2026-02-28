const findTheOldest = function(people) {

    const myFunction = (arr) => {
    let highestAge = 0;

    arr
        .map(e => e.age)
        .forEach(age => {
            if (age > highestAge) {
                highestAge = age;
            }
        );

    return highestAge;
}

const highestAge = myFunction(people);


};


// Do not edit below this line
module.exports = findTheOldest;
