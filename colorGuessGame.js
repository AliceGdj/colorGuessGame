window.setTimeout(function() {
  // put all of your JS code from the lecture here

  	var numSquares = 6
  	var colors = generateRandomColors(numSquares);
  	var squares = document.querySelectorAll(".square");
  	var pickedColor = pickColor();
  	var colorDisplay = document.querySelector("#colorDisplay");
  	var messageDisplay = document.getElementById("message");
  	var h1 = document.querySelector("h1");
  	var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");

    for(var i = 0; i<modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.textContent === "Easy"){
        //   numSquares = 3;
        // } else{
        //   numSquares = 6;
        // }
        reset();
        //figure out how many squares to show
        //pick new color
        //pick a new pickedColor
        //update page to reflect changes
      });
    }

    function reset(){
      colors = generateRandomColors(numSquares);
      //pick a new random color from array
      pickedColor = pickColor();
      //change colorDisplay to match pickedColor
      colorDisplay.textContent = pickedColor;
      messageDisplay.textContent = "";
      //can also write this.textContent instead of resetButton
      resetButton.textContent = "New Colors";
      //change colors from squares
      for(var i = 0; i<squares.length; i++){
        if(colors[i]){
          squares[i].style.display = "block";
          // "block" will show the 2d line of squares again
          squares[i].style.background = colors[i];
        } else{
          squares[i].style.display = "none";
        }
      } h1.style.backgroundColor = "steelblue";
    };

  	resetButton.addEventListener("click", function(){
  		reset();
  	});

  	colorDisplay.textContent = pickedColor;

  	for (var i=0; i<squares.length; i++){
  		//add initial color to squares
  		squares[i].style.backgroundColor = colors[i];
  		//add click listeners to squares
  		squares[i].addEventListener("click", function (){
  			//grab color of clicked square
  			var clickedColor = this.style.backgroundColor;
  			//compare color to pickedColor
  			//console.log(clickedColor, pickedColor);
  			if(clickedColor === pickedColor){
  			  messageDisplay.textContent = "Correct!";
  			  resetButton.textContent = "Play Again?";
  			  changeColors(clickedColor);
  			  h1.style.backgroundColor = clickedColor;
  			} else{
			  this.style.backgroundColor = "#232323";
			  messageDisplay.textContent = "Try again";
  			}
  		});
  	}

function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numSquares){
	var arr = [];
	for(var i = 0; i<numSquares; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

}, 500);
