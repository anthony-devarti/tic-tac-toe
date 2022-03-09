class Model {
    constructor() {
        this.board=[' ',' ',' ', ' ',' ',' ', ' ',' ',' '];
        this.currentPlayer = 'x';
        //Wincon: array of 8 arrays that are winning board states
        Endgame: false //true when game is over
        TurnCounter: 0 //(keeps track of turn number)
    }
    
}
  
  
  //View
  class View {
    constructor() {
      
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

        onClick(){
            console.log('clicking')
            //Set state of board (in setters for model)
            //i is the clicked tile
            //let board[i] = currentplayer
        //updateView(){
                //show symbols on each tile according to the current state of the board object
        }
        //remove the event listener
        clearListener()
            //remove the event listener associated with that specific tile
            //apply css class "clicked" to make it not look like a button anymore
        wincons()
            //written out in sandbox
            
        }
            



        const app = new Controller(new Model(), new View())