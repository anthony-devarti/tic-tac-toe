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


let board = []
board[0] is a clickable location.

Model:
CurrentPlayer: 'x' or 'o'  
Board: [' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' ']
    set state of board function. Empty space is a default
Wincon: array of 8 arrays that are winning board states
Endgame: true(game is over) or false (game is still going)
TurnCounter: 0 (keeps track of turn number)

setters and getters for each.  Delete getters later if not needed



# View

push model to the page
create and display 9 buttons with a default value of ' '
    buttons should be correlated to the value of their same index in the board
    the button id should match their board index for clarity
create an area for the title
create a zone for messages such as who's turn it is
    modal or alert in bootstrap
a reset button that restarts the game and invokes the reset function in the controller
    should be a physical button with a reset symbol that invokes the reset button




# Controller

## Functions to make:
function onClick()
    Set state of board (in setters for model)
        i is the clicked tile
        let board[i] = currentplayer
    update view
            show symbols on each tile according to the current state of the board object
    remove the event listener
        remove the event listener associated with that specific tile
        apply css class "clicked" to make it not look like a button anymore
    wincons()
        list out all possible win conditions
        if current player is x and win condition is true "x wins"
        if current player is o and win condition is true "o wins"
    switch()
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

function endGame()
    make pop up that displays winner
    lock down buttons
    direct user to reset button
