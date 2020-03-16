var button = document.getElementById("Roll")

button.onclick = function () {
    
    var numdice2 = document.getElementById("D2").value;
   
    var numD2Mod = document.getElementById("D2 Mod").value;
   
    var dicevalue2 = 0;

    for (var i = 0; i < numdice2; 
    i++)
    {
    var dicevalue2 = dicevalue3 + (Math.floor(Math.random() * 2 + 1))
    }
    var D2Mod = parseInt(numD2Mod, 10);
    var diceNum2 = parseInt(dicevalue2, 10);
    var dice2 = parseInt(numdice2, 10);
  //  var finalrollval2 = dice2 * D2Mod + diceNum2

    var numdice4 = document.getElementById("D4").value;
   
    var numD4Mod = document.getElementById("D4 Mod").value;
   
    var dicevalue4 = 0;

    for (var e = 0; e < numdice4; 
    e++)
    {
    var dicevalue4 = dicevalue4 + (Math.floor(Math.random() * 4 + 1))
    }
    var D4Mod = parseInt(numD4Mod, 10);
    var diceNum4 = parseInt(dicevalue4, 10);
    var dice4 = parseInt(numdice4, 10);
 //   var finalrollval4 = dice4 * D4Mod + diceNum4
//console.log(finalrollval4);

var numdice6 = document.getElementById("D6").value;
   
var numD6Mod = document.getElementById("D6 Mod").value;

var dicevalue6 = 0;

for (var w = 0; w < numdice6; 
w++)
{
var dicevalue6 = dicevalue6 + (Math.floor(Math.random() * 6 + 1))
}
var D6Mod = parseInt(numD6Mod, 10);
var diceNum6 = parseInt(dicevalue6, 10);
var dice6 = parseInt(numdice6, 10);
//var finalrollval6 = dice6 * D6Mod + diceNum6
//console.log(finalrollval6);

var numdice8 = document.getElementById("D8").value;
   
var numD8Mod = document.getElementById("D8 Mod").value;

var dicevalue8 = 0;

for (var q = 0; q < numdice8; 
q++)
{
var dicevalue8 = dicevalue8 + (Math.floor(Math.random() * 8 + 1))
}
var D8Mod = parseInt(numD8Mod, 10);
var diceNum8 = parseInt(dicevalue8, 10);
var dice8 = parseInt(numdice8, 10);
//var finalrollval8 = dice8 * D8Mod + diceNum8
//console.log(finalrollval8);


var numdice10 = document.getElementById("D10").value;
   
var numD10Mod = document.getElementById("D10 Mod").value;

var dicevalue10 = 0;

for (var d = 0; d < numdice10; 
d++)
{
var dicevalue10 = dicevalue10 + (Math.floor(Math.random() * 10 + 1))
}
var D10Mod = parseInt(numD10Mod, 10);
var diceNum10 = parseInt(dicevalue10, 10);
var dice10 = parseInt(numdice10, 10);
//var finalrollval10 = dice10 * D10Mod + diceNum10
//console.log(finalrollval10);

var numdice12 = document.getElementById("D12").value;
   
var numD12Mod = document.getElementById("D12 Mod").value;

var dicevalue12 = 0;

for (var v = 0; v < numdice12; 
v++)
{
var dicevalue12 = dicevalue12 + (Math.floor(Math.random() * 12 + 1))
}
var D12Mod = parseInt(numD12Mod, 10);
var diceNum12 = parseInt(dicevalue12, 10);
var dice12 = parseInt(numdice12, 10);
//var finalrollval12 = dice12 * D12Mod + diceNum12
//console.log(finalrollval12);

var numdice20 = document.getElementById("D20").value;
   
var numD20Mod = document.getElementById("D20 Mod").value;

var dicevalue20 = 0;

for (var b = 0; b < numdice20; 
b++)
{
var dicevalue20 = dicevalue20 + (Math.floor(Math.random() * 20 + 1))
}
var D20Mod = parseInt(numD20Mod, 10);
var diceNum20 = parseInt(dicevalue20, 10);
var dice20 = parseInt(numdice20, 10);
var finalrollval20 = dice20 * D20Mod + diceNum20
console.log(finalrollval20);
var totaldicerollval = document.getElementById= "DiceText".value

}