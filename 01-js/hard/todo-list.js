/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.Todos = [];
  }
  add(todo) {
    this.Todos.push(todo);
  }
  remove(indexOfTodo) {
    if(indexOfTodo>=this.Todos.length || indexOfTodo<0)return null;
    this.Todos = this.Todos.splice(indexOfTodo, 1);

    return this.Todos;
  }
  update(index, updatedTodo) {
    if(indexOfTodo>=this.Todos.length || indexOfTodo<0)return null;
    this.Todos[index] = updatedTodo;

    return this.Todos
  }
  getAll() {
    return this.Todos;
  }
  get(indexOfTodo) {
    if(indexOfTodo>=this.Todos.length || indexOfTodo<0)return null;
    return this.Todos[indexOfTodo];
  }
  clear() {
    this.Todos = [];
  }
}


module.exports = Todo;
