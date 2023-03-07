const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const verify = require("./auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Niv0525617034",
  database: "library",
});

app.get("/books",  (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(data);
  });
});

app.post("/books", verify , (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price` ,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json("Book had been created successfully");
  });
});

app.delete("/books/:id", verify , (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json("Book had been deleted successfully");
  });
});

app.put("/books/:id", verify , (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ? ,`desc`=? ,`price` = ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json("Book had been updated successfully");
  });
});

app.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const q = "INSERT into users (`username` ,`password`) VALUES (?)";
  const values = [req.body.name, hashPassword];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json("User has been created successfully");
  });
});

app.post("/login", (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err || data.length === 0) {
      return res.status(400).json("this user doesn't exist");
    }
    const token = jwt.sign({ username: req.body.username }, "secret");
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json("user connected successfully");
  });
});

app.listen(8800, console.log("connected to backend server"));
