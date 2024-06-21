import express from "express";
import morgan from "morgan";

const port = 1150;

const app = express();
app.use(morgan("dev"));
app.use(express.json()); //ทำให้ express รู้จักกับ JSON

app.get("/", (req, res) => {
  res.json({ data: "hello World" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "kan" },
    { id: 2, name: "Yes" },
  ]);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.delete("/users/:userId", (req, res) => {
  console.log(req.params);
  res.status(204).send();
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.status(201).json({ data: "created success" });
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
