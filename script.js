var numSquares = 6;
var colors  = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
//mode buttons event listeners
    setUpModeBtns();
//squares
    setupSquares();
    reset();
}

function setUpModeBtns(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
                squares[i].addEventListener("click", function(){
        //grab color of clicked square
                    var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
                    console.log(clickedColor, pickedColor);
                    if(clickedColor === pickedColor){
                        messageDisplay.textContent = "Correct!";
                        resetButton.textContent = "Play Again?"
                        changeColors(clickedColor);
                        h1.style.backgroundColor = clickedColor;
                    } else {
         //code for fading out to match the background color
                        this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try Again";
                    }
                });
            }
}



function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from arr
        pickedColor = pickColor();
    //change color display to match picked color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors"
        messageDisplay.textContent = "";
    //change colors of squares
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor= "steelblue";
}


//reset button below
resetButton.addEventListener("click", function(){
    reset();

})


function changeColors(color){
//loop through all squares
    for (var i = 0; i < squares.length; i++){
//change each color to match given color
        squares[i].style.background = color;
    }
}


// this is to generate random colors
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
//make an array
    var arr = []
//repeat num times
    for(var i = 0; i < num; i++){
//get random color and push into arr
        arr.push(randomColor())
    }
    //return the array
    return arr;
}


//generates random numer to make color
function randomColor(){
//pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
//pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
//pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



/*
easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
});

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
*/