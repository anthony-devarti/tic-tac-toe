class Model {
    constructor() {
        this.board = [
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '},
            {text:' '}
        ]
        this.currentPlayer = 'o';
        this.EndGame = false;
    }
    //this is working.  It changes the state of the current board
    manipulateBoard(i){
        this.board[i] = this.currentPlayer
    };

    //this is working.  It changes the currentPlayer between 'x' and 'o'
    swapPlayer(){
        if (this.currentPlayer=='x'){
            this.currentPlayer='o'
        }  else{
            this.currentPlayer='x'
        }
    }

    //working as expected.  Renamed to end rather than endGame for clarity
    end(){
        if (this.EndGame == false){
            this.EndGame = true
        } else{
            this.EndGame=false
        }
    };
    
    
}
  
  class View {
    constructor() {
        this.app = this.getElement('#root')

        this.title = this.createElement('h1')
        this.title.textContent = 'Tic-Tac-Toe'

        this.tile = this.createElement('tile')
        this.tile.textContent = 'placeholder'

        this.restartButton = this.createElement('button')
        this.restartButton.textContent = "reset"

        this.app.append(this.title, this.tile, this.restartButton)
    }

    createElement(tag, className){
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector){
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