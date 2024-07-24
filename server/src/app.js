import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let items = [];

// Get all todo.
app.get("/all", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC;");
    items = result.rows;

    res.status(200).json(items);
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: "Internal server error" });
  }
});

// Add new todo.
app.post("/add", async (req, res) => {
  const item = req.body.value;

  try {
    if (item !== "") {
      await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
      return res.status(200).json({ message: "New Item" });
    } else {
      return res.json({ message: "Please enter a valid item!" });
    }
  } catch (err) {
    console.error(err);
    res.json({ message: "Item has already been added!" });
  }
});

// Edit todo.
app.post("/edit", async (req, res) => {
  const item = req.body.value;
  const itemId = req.body.id;

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = ($2);", [item, itemId]);

    res.json({ message: "ok" });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete todo.
app.post("/delete", async (req, res) => {
  const itemId = req.body.value;

  try {
    await db.query("DELETE FROM items WHERE id = ($1)", [itemId]);

    res.status(200).json({ message: "ok" });
  } catch (err) {
    console.error(err);

    res.status(500).json({ message: "Internal server error!" });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}...`);
});
