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
    
    //setter for the board state should probably be here
}
  
  class View {
    constructor() {
        this.app = this.getElement('#root')

        this.title = this.createElement('h1')
        this.title.textContent = 'Tic-Tac-Toe'

        this.board = this.createElement('board')
        this.board.style.width = '400px'
        this.board.style.height = '400px'

        //how to make this appear 9 times, in a 3x3 grid
        this.tile = this.createElement('button')
        this.tile.textContent = ' '

        this.restartButton = this.createElement('reset')
        this.restartButton.textContent = 'reset'

        this.row = this.createElement('div', 'row')
        
        this.col = this.createElement('div', 'col')

        // this.container = this.createElement('div', 'container')

        // this.app.append(this.title)

        // this.app.append(this.container)

        // this.container.append(this.row)

        // this.row.append(this.col)

        // this.col.append(this.tile)

        
        //this is showing up correctly
        this.app.append(this.title)
        //this.app.append(this.row)
        this.app.append(this.board)
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = 'tile' + i
            this.board.append(tile)
        }
        this.app.append(this.row)
        this.row.append(this.col)
        this.col.append(this.restartButton)
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

    onClick(id, currentPlayer){
        manipulateBoard(id)
        // updateView()
        // removeEventListener()
        // winCons()
        this.swapPlayer(currentPlayer)
    }
        //Set state of board (in setters for model)
        // i is the clicked tile
        // let board[i] = currentplayer
    // update view
    //         show symbols on each tile according to the current state of the board object
    // remove the event listener
    //     remove the event listener associated with that specific tile
    //     apply css class "clicked" to make it not look like a button anymore
    // wincons()
    //     written out in sandbox
    switch(){
        if (currentPlayer ='x') {
            currentPlayer = 'o'
        } else {
            currentPlayer ='x'
        }
    }
  }
  
  const app = new Controller(new Model(), new View())