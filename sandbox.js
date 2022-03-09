board=  ["o","x","o",
        "x", "x","o",
        "o","o", "x"]

switch (true) {
        case  board[0]=='x' && board[1]=='x' && board[2]=='x':
        case  board[3]=='x' && board[4]=='x' && board[5]=='x':
        case  board[6]=='x' && board[7]=='x' && board[8]=='x':
        case  board[0]=='x' && board[3]=='x' && board[6]=='x':
        case  board[1]=='x' && board[4]=='x' && board[7]=='x':
        case  board[2]=='x' && board[5]=='x' && board[8]=='x':
        case  board[2]=='x' && board[4]=='x' && board[6]=='x':
        case  board[0]=='x' && board[4]=='x' && board[8]=='x':
            //make a pop up that says that x wins
            console.log('x wins')
            break;
        case  board[0]=='o' && board[1]=='o' && board[2]=='o':
        case  board[3]=='o' && board[4]=='o' && board[5]=='o':
        case  board[6]=='o' && board[7]=='o' && board[8]=='o':
        case  board[0]=='o' && board[3]=='o' && board[6]=='o':
        case  board[1]=='o' && board[4]=='o' && board[7]=='o':
        case  board[2]=='o' && board[5]=='o' && board[8]=='o':
        case  board[2]=='o' && board[4]=='o' && board[6]=='o':
        case  board[0]=='o' && board[4]=='o' && board[8]=='o':
            //make a pop up that says 0 wins
            console.log('o wins')
            break;

        case !board.includes(' '): //probably bad syntactically, but if the board does not have any spaces left, 
            //make a pop up that says draw
            console.log('this game is a draw')
            break;
        default:
            break;
    }