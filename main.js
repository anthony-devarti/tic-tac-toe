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

    //endGame is not a function.  Probably not the arrow function thing, since this is all in one class
    endGame(){
        if (this.EndGame == false){
            this.EndGame = true
        } else{
            this.EndGame=false
        }
    };
    
    
}
  
  class View {
    constructor() {}
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  }
  
  const app = new Controller(new Model(), new View())