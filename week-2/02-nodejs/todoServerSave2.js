const express = require("express");
const uuid = require("uuid");
const fs = require("fs/promises");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/todos", async (req, res) => {
  try {
    const data = await fs.readFile("todos2.json", { encoding: "utf8" });
    res.status(201).json(JSON.parse(data));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todo = req.body;
    const todoId = uuid.v4();
    todo.id = todoId;
    todo.completed = false;

    const data = await fs.readFile("todos2.json", { encoding: "utf8" });
    const todos = JSON.parse(data);

    todos.push(todo);

    const todosString = JSON.stringify(todos);

    await fs.writeFile("todos2.json", todosString);

    res.status(200).json({ id: todo.id });
  } catch (err) {
    res.status(400).send({ error: err });
    return;
  }
});

function checkId(todos, id) {
  return todos.findIndex((todo) => {
    return todo.id === id;
  });
}
app.get("/todos/:ID", async (req, res) => {
  try {
    const data = await fs.readFile("todos2.json", { encoding: "utf8" });
    const ID = req.params.ID;
    console.log(ID);
    console.log(typeof ID);
    const todo = JSON.parse(data);
    const todoIndx = checkId(todo, ID);
    if (todoIndx < 0) {
      res.status(400).send({ message: "invalid ID" });
      return;
    }
    console.log(todo[todoIndx]);
    res.status(200).json(todo[todoIndx]);
  } catch (err) {
    res.status(400).send({ message: "Error while reading the file" });
    return;
  }
});
app.put("/todos/editTodo/:ID", async (req, res) => {
  try {
    const data = await fs.readFile("todos2.json", { encoding: "utf8" });
    // console.log(JSON.parse(data));
    const todos = JSON.parse(data);
    const ID = req.params.ID;
    const editedTodo = req.body;

    const todoIndx = checkId(todos, ID);
    if (todoIndx < 0) {
      res.status(400).send({ message: "invalid ID" });
      return;
    }
    todos[todoIndx].title = editedTodo.title;
    todos[todoIndx].discription = editedTodo.discription;
    const todosJson = JSON.stringify(todos);
    await fs.writeFile("todos2.json", todosJson);

    res.status(200).json({ id: ID });
  } catch (err) {
    res.status(400).send({ message: "Error while reading a file", error: err });
  }
});
app.put("/todos/completed/:ID", async (req, res) => {
  try {
    const data = await fs.readFile("todos2.json", { encoding: "utf8" });
    // console.log(JSON.parse(data));
    const todos = JSON.parse(data);
    const ID = req.params.ID;
    const completed = req.body.completed;

    const todoIndx = checkId(todos, ID);
    if (todoIndx < 0) {
      res.status(400).send({ message: "invalid ID" });
      return;
    }
    todos[todoIndx].completed = completed;
    const todosJson = JSON.stringify(todos);
    await fs.writeFile("todos2.json", todosJson);
    res.status(200).json({ id: ID });
  } catch (err) {
    res.status(400).send({ message: "Error while reading a file", error: err });
  }
});
app.delete("/todos/deleteTodo/:ID", async (req, res) => {
  try {
    const data = await fs.readFile("todos2.json", { encoding: 'utf8' });
    const todos = JSON.parse(data);
    console.log(todos);
    const ID = req.params.ID;
    console.log(ID);
    const todoIndx = checkId(todos, ID);
    if (todoIndx < 0) {
      res.status(400).send({ message: "invalid ID" });
      return;
    }
    todos.splice(todoIndx,1);
    const todoJson = JSON.stringify(todos);
    await fs.writeFile("todos2.json",todoJson);
    res.status(200).json({id:ID});
  } catch (err) {
    console.log(err);
    res.status(400).send({error:err});
  }
});

//error-handling
app.use((err, req, res, next) => {
    res.status(404).send("Route not found");
});

app.listen(port);
