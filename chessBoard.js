//make an empty board
var board = "";

//outter loop to control rows
for (var y = 1; y <= 8; y++) {
  //innerloop to generate the columns
  for (var x = 1; x <= 8; x++) {
    // if the column is even, generate the board with a space in front of "#"
    if ((x + y) % 2 == 0) {
      board += " ";
    }
    //else generate the board without a space in front of the #'s
    else {
      board += "#";
    }
  }
  //generate a new line
  board += "\n";
}

console.log(board);
