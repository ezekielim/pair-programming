const fs = require("fs");

const getBooks = (id) => {
  const bookData = fs.readFileSync("./model/data.json");

  const filteredbookData = JSON.parse(bookData).filter(
    (books) => books.id === id
  );
  return filteredbookData;
};

module.exports = getBooks;
