class Model {
    constructor() {
        this.board = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ]
        this.currentPlayer = 'x';
        this.EndGame = false;
        //how to inherit these key value pairs when creating a new instance of this object?
        this.score = {
            x:0,
            o:0
        }
    }
    //this is working.  It changes the state of the current board
    manipulateBoard(i){
        this.board[i] = this.currentPlayer
    };


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

        //this.view =
        this.title = this.createElement('h1')
        this.title.textContent = 'Tic-Tac-Toe'

        this.board = this.createElement('board')

        this.restartButton = this.createElement('button', 'reset')
        this.restartButton.id = 'resetButton'
        this.restartButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/></svg>'

        this.row = this.createElement('div', 'row')
        
        this.col = this.createElement('div', 'col')

        this.card = this.createElement('div', 'card')
        this.cardheader = this.createElement('div', 'cardheader')
        this.cardheader.textContent = 'Player X, you go first!'
        this.cardbody = this.createElement('div', 'cardbody')
        //this.cardheader.textContent = `${app.model.currentPlayer}'s turn!`
        this.cardbody = this.createElement('div', 'cardbody')
        this.cardbody.textContent = "Get ready, Player O, you're next"
        this.container = this.createElement('div', 'container')

        //this is showing up correctly
        //this.container.append(this.app)
        this.app.append(this.container)
        this.container.append(this.title)
        this.container.append(this.board)
        //procedurally creates 9 tiles and gices them unique numbers with the dataset
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = 'tile' + i;
            tile.dataset.num = i;
            this.board.append(tile)
        }
       
        this.container.append(this.row)
        this.row.append(this.col)
        this.col.append(this.restartButton)
        this.row.append(this.card)
        this.card.append(this.cardheader)
        this.card.append(this.cardbody)
        }

        //since I'm doing a lot of element creation, I made a method to create them with fewer characters
        createElement(tag, className){
            const element = document.createElement(tag)
            if (className) element.classList.add(className)

            return element
        }

        //same, but for selection
        getElement(selector){
            const element = document.querySelector(selector)

            return element
        }
        
        updateBoard (e){
            //console.log('I update')
            //updates the board object to match the player who's making a move
            e.target.textContent = app.model.currentPlayer
        }
        winner(){
            console.log('a winner has been found')
            this.cardheader.textContent = "The Game is Over!"
            this.cardbody.textContent = `Player ${app.model.currentPlayer} wins. Click Reset to start a new game.`
        }
        draw(){
            console.log('everyone is either really good or really bad a tic tac toe, here')
            this.cardheader.textContent = "The Game is Over!"
            this.cardbody.textContent = "The game ended in a draw. Reset to start a new game"
        
        }
    }


class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        let tiles = view.container.getElementsByClassName('tile');
        for (let tile of tiles){
        tile.addEventListener('click', this.click);
        }
       
        view.container.getElementsByClassName('reset')[0].addEventListener('click', this.reset);
    }

    click = (e) => {
        //console.log(e);
        //takes the e param and turns it into something usable
        let num = e.target.dataset.num;
        //updates the state of the board
        this.handleBoard(num) 
        //adds a mark to the board
        app.view.updateBoard(e)
        //clear -turns off event listeners
        this.clear(e)
        //checks to see if a win was achieved, handles the pop ups in case of a win or draw
        //console.log('checking for a winner')
        let spot = app.model.board
        switch (true) {
            case  spot[0]=='x' && spot[1]=='x' && spot[2]=='x':
            case  spot[3]=='x' && spot[4]=='x' && spot[5]=='x':
            case  spot[6]=='x' && spot[7]=='x' && spot[8]=='x':
            case  spot[0]=='x' && spot[3]=='x' && spot[6]=='x':
            case  spot[1]=='x' && spot[4]=='x' && spot[7]=='x':
            case  spot[2]=='x' && spot[5]=='x' && spot[8]=='x':
            case  spot[2]=='x' && spot[4]=='x' && spot[6]=='x':
            case  spot[0]=='x' && spot[4]=='x' && spot[8]=='x':
                // X wins condition
                this.view.winner()
                //console.log('x wins')
                this.clearAll()
                //endGame
                break;
            case  spot[0]=='o' && spot[1]=='o' && spot[2]=='o':
            case  spot[3]=='o' && spot[4]=='o' && spot[5]=='o':
            case  spot[6]=='o' && spot[7]=='o' && spot[8]=='o':
            case  spot[0]=='o' && spot[3]=='o' && spot[6]=='o':
            case  spot[1]=='o' && spot[4]=='o' && spot[7]=='o':
            case  spot[2]=='o' && spot[5]=='o' && spot[8]=='o':
            case  spot[2]=='o' && spot[4]=='o' && spot[6]=='o':
            case  spot[0]=='o' && spot[4]=='o' && spot[8]=='o':
                //O wins condition
                this.view.winner()
                //console.log('o wins')
                this.clearAll()
                //update score
                break;
    
            //for some reason, this immediately returns draw after the first move with a ! and never returns a draw without it
            case !app.model.board.includes(null): //probably bad syntactically, but if the board does not have any spaces left, 
                //draw condition
                //console.log('this game is a draw')
                this.view.draw()
                this.clearAll()
                //update score?
                break;
            default: 
                app.view.cardheader.textContent = `It's player ${app.model.currentPlayer==='x' ? 'o' : 'x'}'s turn, now!`
                app.view.cardbody.textContent = `Player ${app.model.currentPlayer==='x' ? 'x' : 'o'} is up next`
                break;
        }
        this.handleSwap()
        
    }

    clear = (e) => {
        //console.log(e.target.dataset.num)
        document.getElementById(`tile${e.target.dataset.num}`).removeEventListener('click', app.click)
    }

    handleBoard = (num) =>  {
        this.model.board[num] = this.model.currentPlayer
        //console.log(this.model.board)
    }

    handleSwap = () => {
        if (this.model.currentPlayer=='x'){
            this.model.currentPlayer='o'
            //console.log(this.model.currentPlayer)
        }  else{
            this.model.currentPlayer='x'
            //console.log(this.model.currentPlayer)
        }
    }

    //reset the board, turn off all buttons when the game is complete, and create a new board
    reset = () => {
        console.log('resetting the board')
       
        this.clearAll()
        app = new Controller(new Model(), new View())
        //I should turn off the current reset button so it doesn't still work after a new game
        this.view.container.getElementById('reset').removeEventListener('click', this.reset)
    }

    //clear all of the event listeners for tiles so they can't be clicked later 
    clearAll() {
        let tiles = this.view.container.getElementsByClassName('tile')
        for (let tile of tiles){
            tile.removeEventListener('click', app.click)
        }
        
    }
    
}
//makes the first instance
let app = new Controller(new Model(), new View())

  