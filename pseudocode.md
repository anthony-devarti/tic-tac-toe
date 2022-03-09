# Model

define a board object and give empty values so that they can be set as x or o or null
null should be the default and it can be adjusted by the controller
}
### this is the board with the indexes labeled 
    0, 1, 2,
    3, 4, 5,
    6, 7, 8


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
    button id for the button that controls index 0 would be 0, index 1's button would be 1 et al

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
        written out in sandbox
    switch()
        if current player ='x' {
            current player = 'o'
        } else {
            current player ='x'
        }



function reset()
    set endGame:false
    set board to default
        Board: [' ',' ',' ',
                ' ',' ',' ',
                ' ',' ',' ']
    update the view
        I need to get into this to be able to figure out specifically what needs to be done
    remove the popup
        display:hide?  maybe doing this with bootstrap would be ideal
    unlock buttons
        change the button class back from clicked so they can be used again.

function endGame()
    make pop up that displays winner
    lock down buttons
    add to the score (stretch goal)
    direct user to reset button
