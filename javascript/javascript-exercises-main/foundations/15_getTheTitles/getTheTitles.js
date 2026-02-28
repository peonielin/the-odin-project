const getTheTitles = function (books) {
  bookNames = [];

  for (let i = 0; i < books.length; i++) {
    bookNames = books.map((books) => books.title);
  }

  return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
