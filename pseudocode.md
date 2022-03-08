Model

define a board object and give empty values so that they can be set as x or o or null
null should be the default and it can be adjusted by the controller
    let board = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
}
let board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
] //


let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
board[0] is a clickable location.

Model:
CurrentPlayer: 'x' or 'o'
Board: array of 9
    set state of board function
Wincon: array of 8 arrays that are winning board states
Endgame: true(game is over) or false (game is still going)
TurnCounter: 0 (keeps track of turn number)




View

push model to the page




# Controller

Functions to make:

    Set state of board (in setters for model)
        i is the clicked tile
        let board[i] = currentplayer

        update view
            show symbols on each tile according to the current state of the board object


    remove the event listener
        remove the event listener associated with that specific tile
        apply css class "clicked" to make it not look like a button anymore

compare to wincons
    how to do this.

switch the turn
    if current player ='x' {
        current player = 'o'
    } else {
        current player ='x'
    }

function reset()
    set endGame:false
    set model to default
    update the view
    remove the popup
    unlock buttons