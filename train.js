// create three variables
var trainSpeed = 250;
var trainPosition = 0;
var animation;

//listen for click events on the train
var train = document.getElementById("train");
train.addEventListener("click", speedUp);

//add an event listener to the stop button
var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);


// This code tests the value of the trainSpeed variable. If it’s 
// greater than 10, the train can still go faster, so the next line 
// subtracts 10 from the value of trainSpeed.


function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);
// inside the speedUp function is to 
// restart the loop that does the animation, but with the new 
// speed
// The first statement, clearInterval, temporarily stops the 
// animation. The second statement starts up a new setInterval 
// loop using the new value trainSpeed. The setInterval 
// function will call a function called frame().
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

// This function first increases the value of the trainPosition 
// variable; then it updates the location of the train according to 
// the current value of trainPosition. After the train has 
// been moved, it makes a call to another function, called 
// checkPosition() and passes it the currentPosition 
// variable.

//create the frame() function
// This function first increases the value of the trainPosition 
// variable; then it updates the location of the train according to 
// the current value of trainPosition. After the train has 
// been moved, it makes a call to another function, called 
// checkPosition() and passes it the currentPosition 
// variable.

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}
// checkPosition() function
function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert(":Hells Bells you Crashed!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}