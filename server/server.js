const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express(); // invoke express

app.use(cors());

const getBooks = require("./controller/getBooks");
const bookData = fs.readFileSync("./model/data.json");

const PORT = 5000; // https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

// middleware to help handling request/response data https://expressjs.com/en/api.html
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server works, test other routes");
});

app
  .route("/books")
  .get((req, res) => {
    res.json(getBooks());
  })
  .post((req, res) => {
    bookData.push(req.body);
    res.json(bookData);
  })
  .put((req, res) => {
    res.send("Video updated");
  });

app.get("/books/:id", (req, res) => {
  const booksId = req.params.id;
  res.json(getBooks(booksId));
});

app.get("*", (req, res) => {
  res.send("Not the page your looking for... Jedi mind-tricks");
});

// start express on a port
app.listen(PORT, console.log(`listening http://localhost:${PORT}`));
