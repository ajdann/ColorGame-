var numSquares = 6;
var colors = []; // array of random colors
var pickedColor; // color to be guessed
var squares = document.querySelectorAll(".square"); // select squares from html
var messageDisplay = document.querySelector("#message"); // message to display when you guess color
var h1 = document.querySelector("h1"); //  change background color
var reset = document.querySelector("#reset"); // reset game
var modeButtons = document.getElementsByClassName("mode");
var display = document.getElementById("display");




init();

function  init() {

    setUpModeButtons();
    setUpSquares();
    rst();
}
function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function () {
            modeButtons[1].classList.remove("selected");
            modeButtons[0].classList.remove("selected");

            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            rst();


        })
    }
}
function setUpSquares (){
    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click",function ()
        {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) // If you guess the color
            {
                messageDisplay.innerHTML = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                reset.innerHTML = "Play Again?"
            }
            else // if you dont guess the color
            {
                messageDisplay.innerHTML = "Try Again";
                this.style.backgroundColor = "#232323";
            }

        });

        rst();

    }
}
reset.addEventListener("click",function () {
    rst();
});
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
} // assign colors to squares
function rst (){
    colors = generateRandomColors(numSquares);
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){ squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"}
        else  squares[i].style.display = "none";
    }
    pickedColor = pickColor();
    messageDisplay.innerHTML = "";
    display.innerHTML = pickedColor;
    reset.innerHTML = "New Colors";
    h1.style.backgroundColor = "steelblue";
    reset.innerHTML = "New Colors";

} // reset
function changeColors(color){
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}  // function to set colors to square
function pickColor(){
   var random =  Math.floor(Math.random()* colors.length);
   return colors[random];
} // function to pick random color from squares to be guessed
function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++)
    {
        arr.push(randomColor())
    }

    return arr;
} // function to generate random colors and put them in an array
function randomColor(){

    var red  = Math.floor(Math.random()*256);
    var green  = Math.floor(Math.random()*256);
    var blue  = Math.floor(Math.random()*256);

    return "rgb(" + red + ", " + green +", " + blue + ")";
} // function to generate random color





