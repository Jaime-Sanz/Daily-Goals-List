export class Folder {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description || '';
        this.priority = priority || '';
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority) {
        const newTodo = { title, description, dueDate, priority };
        this.todos.push(newTodo);
        return newTodo;
    }

    deleteTodoByTitle(title) {
        const index = this.todos.findIndex(todo => todo.title === title);
        if (index !== -1) {
          const deletedTodo = this.todos.splice(index, 1)[0];
          return deletedTodo;
        } else {
          return null; 
        }
    }
}
