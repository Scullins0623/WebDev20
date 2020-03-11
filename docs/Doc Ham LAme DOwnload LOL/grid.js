var button = document.getElementById("Go")

button.onclick = function () {
    
 var numRows = getElementById("Rows").value;

 var numColumns = getElementById("Columns").value;

 
// console.log(numRows);
// console.log(numColumns);

var board = document.getElementById("board");

var rowval = "repeat(" + numRows + ", 1fr)"

//for (var r = 0; r < numRows; r++) {
//    rowval = rowval + " 1fr";
//}

// for (var c = 0; c < numColumns; c++) {
//     Columnsval = Columnsval + "1fr";
// }

var Columnsval = "repeat(" + numColumns + ", 1fr)";

board.style.setProperty("grid-template-rows", rowval)

board.style.setProperty("grid-template-columns", Columnsval)

while (board.firstChild){
    board.removeChild (board.firstChild);
}

}