class Model {
    constructor() {
        this.board=[' ',' ',' ', ' ',' ',' ', ' ',' ',' '];
    }
  }
  
  
  //View
  class View {
    constructor() {
      // The root element
      this.app = this.getElement('#root')
  
      // The title of the app
      this.title = this.createElement('h1')
      this.title.textContent = 'Tic Tac Toe'
  
      // The form, with a [type="text"] input, and a restart button
      //this.form = this.createElement('form')
  
      //this.input = this.createElement('input')
      //this.input.type = 'text'
      //this.input.placeholder = 'Add todo'
      //this.input.name = 'todo'
  
      this.restartButton = this.createElement('button')
      this.restartButton.textContent = 'Restart'
  
      // The visual representation of the todo list
      //this.todoList = this.createElement('ul', 'todo-list')
  
      // Append the input and restart button to the form
      //this.form.append(this.input, this.restartButton)
  
      // Append the title, form, and todo list to the app
      this.app.append(this.title)
    }

  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
  }
  
  
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  }
  
  const app = new Controller(new Model(), new View())