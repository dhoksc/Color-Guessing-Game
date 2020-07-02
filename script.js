//variables
var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var insaneBtn = document.querySelector("#insaneBtn");

//functions
function changeColors(color) {

    //loop through all squares
    for (var i = 0; i < squares.length; i++) {

        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {

    //make an array
    var arr = []

    //add num random color to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256)

    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256)

    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);

    //pick a new random color
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    //reset the color for header
    h1.style.backgroundColor = "steelblue";

    //resetButton text content
    resetButton.textContent = "New Colors";

    //message display
    messageDisplay.textContent = "";
}

//game code
colorDisplay.textContent = pickedColor.toLocaleUpperCase();

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {

        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;

        //compare color to pickedColor
        console.log(clickedColor, pickedColor); // here is a hint for you =)
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
};

//buttons
resetButton.addEventListener("click", reset);

//difficulty
easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected")
    insaneBtn.classList.remove("selected")
    easyBtn.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected")
    insaneBtn.classList.remove("selected")
    hardBtn.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
});

insaneBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected")
    hardBtn.classList.remove("selected")
    insaneBtn.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    numberOfSquares = 9;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
});