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
    }
    //this is working.  It changes the state of the current board
    manipulateBoard(i){
        this.board[i] = this.currentPlayer
    };

    //this is in the controller now

    //this is working.  It changes the currentPlayer between 'x' and 'o'
    //removed 'this' from everything on this function to try to make it work with the arrow function in the 
    //controller.  Be ready to put them back if that doesn't work
    // swapPlayer(){
    //     if (this.currentPlayer=='x'){
    //         this.currentPlayer='o'
    //         console.log(this.currentPlayer)
    //     }  else{
    //         this.currentPlayer='x'
    //         console.log(this.currentPlayer)
    //     }
    // }


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
        this.board.style.width = '400px'
        this.board.style.height = '400px'

        //how to make this appear 9 times, in a 3x3 grid
        // this.tile = this.createElement('button')
        // this.tile.textContent = ' '

        this.restartButton = this.createElement('button', 'reset')
        this.restartButton.id = 'resetButton'
        this.restartButton.textContent = 'reset'

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


        createElement(tag, className){
            const element = document.createElement(tag)
            if (className) element.classList.add(className)

            return element
        }

        getElement(selector){
            const element = document.querySelector(selector)

            return element
        }
        
        updateView (e){
            //console.log('I update')
            //make innertext of tile num equal to the current player's turn
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
        //.addEventListener('click', this.click)
        // view.container.getElementById('tile1').addEventListener('click', this.click);
        // view.container.getElementById('tile2').addEventListener('click', this.click);
        // view.container.getElementById('tile3').addEventListener('click', this.click);
        // view.container.getElementById('tile4').addEventListener('click', this.click);
        // view.container.getElementById('tile5').addEventListener('click', this.click);
        // view.container.getElementById('tile6').addEventListener('click', this.click);
        // view.container.getElementById('tile7').addEventListener('click', this.click);
        // view.container.getElementById('tile8').addEventListener('click', this.click);
        //view.container.getElementById('tile0').addEventListener('click', app.handleAddMark(app.model.currentPlayer))
        //add the event listener for the reset button
        view.container.getElementsByClassName('reset')[0].addEventListener('click', this.reset);
    }

    click = (e) => {
        //console.log(e);
        //takes the e param and turns it into something usable
        let num = e.target.dataset.num;
        //updates the state of the board
        this.handleBoard(num) 
        //adds a mark to the board
        app.view.updateView(e)
        //clear -turns off event listeners
        this.clear(e)
        //checks to see if a win was achieved, handles the pop ups in case of a win or draw
        console.log('checking for a winner')
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
                // view method called popUp make a pop up that says that x wins
                this.view.winner()
                console.log('x wins')
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
                //make a pop up that says 0 wins
                this.view.winner()
                console.log('o wins')
                this.clearAll()
                //endGame
                break;
    
            //for some reason, this immediately returns draw after the first move with a ! and never returns a draw without it
            case !app.model.board.includes(null): //probably bad syntactically, but if the board does not have any spaces left, 
                //make a pop up that says draw
                console.log('this game is a draw')
                this.view.draw()
                this.clearAll()
                //endGame
                break;
            default: 
                app.view.cardheader.textContent = `It's player ${app.model.currentPlayer}'s turn, now!`
                app.view.cardbody.textContent = `Player ${app.model.currentPlayer==='x' ? 'o' : 'x'} is up next`
                break;
        }
        this.handleSwap()
        //moved this from the view constructor
        
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

    //I do not understand what this is doing
    // bindSwapPlayer(handle){
    //     this.button.addEventListener('click', => e)
    // }
    reset = () => {
        console.log('resetting the board')
        // app.model.board=[null, null, null, null, null, null, null, null, null]
        // console.log('resettting the buttons')
        // for (let i=0; i<app.model.board.length; i++){
        //     //this path is working in the console, but not here
        //     document.getElementById(`tile${i}`).textContent = null
        this.clearAll()
        app = new Controller(new Model(), new View())
    }

    clearAll() {
        let tiles = this.view.container.getElementsByClassName('tile')
        for (let tile of tiles){
            tile.removeEventListener('click', app.click)
        }
    }
    
}

let app = new Controller(new Model(), new View())

    //this is working, but now I'm trying to call the function in the mvc pattern.  I need this
    // to go to the view and pass information to the controller, which will update the model.
  //document.getElementById('tile0).addEventListener("click", app.model.swapPlayer);
  