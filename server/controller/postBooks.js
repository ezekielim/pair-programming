const fs = require("fs");

const getBookList = () => {
  const bookData = fs.readFileSync("./model/data.json");

  const mappedBookData = JSON.parse(bookData).map((books) => {
    return {
      id: books.id,
      title: books.title,
      pageCount: books.pageCount,
      publishedDate: books.publishedDate,
      thumbnailUrl: books.thumbnailUrl,
      shortDescription: books.shortDescription,
      longDescription: books.longDescription,
      status: books.status,
      authors: books.authors,
      categories: books.categories,
    };
  });

  return mappedBookData;
};

module.exports = getBookList;
