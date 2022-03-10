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
        this.tile = this.createElement('button')
        this.tile.textContent = ' '

        this.restartButton = this.createElement('reset')
        this.restartButton.textContent = 'reset'

        this.row = this.createElement('div', 'row')
        
        this.col = this.createElement('div', 'col')

        //this is showing up correctly
        this.app.append(this.title)
        this.app.append(this.board)
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('button')
            tile.classList = `tile`
            tile.id = 'tile' + i;
            tile.dataset.num = i
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
        
        updateView (e){
            //console.log('I update')
            //make innertext of tile num equal to the current player's turn
            e.target.textContent = app.model.currentPlayer
        }
    }


class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    // onClick(id, currentPlayer){
    //     manipulateBoard(id)
    //     // updateView()
    //     // removeEventListener()
    //     // winCons()
    //     this.swapPlayer(currentPlayer)
    // }
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
    // switch(){
    //     if (currentPlayer ='x') {
    //         currentPlayer = 'o'
    //     } else {
    //         currentPlayer ='x'
    //     }
    // }
    click = (e) => {
        //console.log(e);
        let num = e.target.dataset.num;
        this.handleBoard(num) 
        //adds a mark to the board
        app.view.updateView(e)
        //clear -turns off event listeners
        this.clear(e)
        //winCon -checks to see if a win was achieved
        console.log('checking for a winner')
        switch (true) {
            case  app.model.board[0]=='x' && app.model.board[1]=='x' && app.model.board[2]=='x':
            case  app.model.board[3]=='x' && app.model.board[4]=='x' && app.model.board[5]=='x':
            case  app.model.board[6]=='x' && app.model.board[7]=='x' && app.model.board[8]=='x':
            case  app.model.board[0]=='x' && app.model.board[3]=='x' && app.model.board[6]=='x':
            case  app.model.board[1]=='x' && app.model.board[4]=='x' && app.model.board[7]=='x':
            case  app.model.board[2]=='x' && app.model.board[5]=='x' && app.model.board[8]=='x':
            case  app.model.board[2]=='x' && app.model.board[4]=='x' && app.model.board[6]=='x':
            case  app.model.board[0]=='x' && app.model.board[4]=='x' && app.model.board[8]=='x':
                //make a pop up that says that x wins
                console.log('x wins')
                Alert('x wins!')
                //toast
                break;
            case  app.model.board[0]=='o' && app.model.board[1]=='o' && app.model.board[2]=='o':
            case  app.model.board[3]=='o' && app.model.board[4]=='o' && app.model.board[5]=='o':
            case  app.model.board[6]=='o' && app.model.board[7]=='o' && app.model.board[8]=='o':
            case  app.model.board[0]=='o' && app.model.board[3]=='o' && app.model.board[6]=='o':
            case  app.model.board[1]=='o' && app.model.board[4]=='o' && app.model.board[7]=='o':
            case  app.model.board[2]=='o' && app.model.board[5]=='o' && app.model.board[8]=='o':
            case  app.model.board[2]=='o' && app.model.board[4]=='o' && app.model.board[6]=='o':
            case  app.model.board[0]=='o' && app.model.board[4]=='o' && app.model.board[8]=='o':
                //make a pop up that says 0 wins
                console.log('o wins')
                Alert('o wins!')
                break;
    
            case app.model.board.includes(' '): //probably bad syntactically, but if the board does not have any spaces left, 
                //make a pop up that says draw
                console.log('this game is a draw')
                Alert('this game is a draw')
                break;
            default: //nothing
                break;
        }
        this.handleSwap()   
    }

    winCon = () => {
        
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


    
    }

const app = new Controller(new Model(), new View())

    //this is working, but now I'm trying to call the function in the mvc pattern.  I need this
    // to go to the view and pass information to the controller, which will update the model.
  //document.getElementById('tile0).addEventListener("click", app.model.swapPlayer);
  document.getElementById('tile0').addEventListener('click', app.click);
  document.getElementById('tile1').addEventListener('click', app.click);
  document.getElementById('tile2').addEventListener('click', app.click);
  document.getElementById('tile3').addEventListener('click', app.click);
  document.getElementById('tile4').addEventListener('click', app.click);
  document.getElementById('tile5').addEventListener('click', app.click);
  document.getElementById('tile6').addEventListener('click', app.click);
  document.getElementById('tile7').addEventListener('click', app.click);
  document.getElementById('tile8').addEventListener('click', app.click);
  //document.getElementById('tile0').addEventListener('click', app.handleAddMark(app.model.currentPlayer))