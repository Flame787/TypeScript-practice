class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;

    this.id = new Date().toISOString();
  }
}

export default Todo;

// Alternative way to define the class with a constructor
// class Todo {
//     constructor(public id: string, public text: string) {}
// }
