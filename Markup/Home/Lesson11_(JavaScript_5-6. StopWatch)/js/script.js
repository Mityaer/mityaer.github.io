//starting the main app, finding DOM-elements, initializing the variables
var timerId; // initializing setInterval (counter)
var startFlag = true; // flag for start/stop button
// var startButton = document.querySelector('#startButton'); //find start/pause button
// var resetButton = document.querySelector('#resetButton'); //find clear button

// var hours = document.querySelector('#hoursWatch'); //finding watch's hours digits
// var minutes = document.querySelector('#minutesWatch'); //finding watch's minutes digits
// var seconds = document.querySelector('#secondsWatch'); //finding watch's seconds digits
//
// var hours = document.querySelector('#hours'); //finding StopWatch's hours digits
// var minutes = document.querySelector('#minutes'); //finding StopWatch's minutes digits
// var seconds = document.querySelector('#seconds'); //finding StopWatch's seconds digits
// var milliseconds = document.querySelector('#milliseconds'); //finding StopWatch's milliseconds digits
var timer = document.getElementById('timer');
var milliseconds = document.getElementById('ms');
var currentMilliseconds = 0,
		ms = 0,
		startCount,
		countTimer,
		buffDate,
		currentDate;

// adding event listeners
startButton.addEventListener('click', dateConsoleInput);
resetButton.addEventListener('click', dateConsoleStop);

// huge function, which processes the key press
function dateConsoleInput() {
  if (startFlag === true) { //START
    timerId = window.setInterval(startTimer, 40);
    startButton.innerHTML = 'Pause';
    startFlag = false;

    buffDate = new Date();
    buffDate = buffDate.getTime() - currentMilliseconds;
    startCount = buffDate - ms;

  } else { // PAUSE
    window.clearTimeout(timerId);
    startButton.innerHTML = 'Start';
    startFlag = true;
  };

};


function startTimer() {
  currentDate = new Date();
  currentDate = currentDate.getTime();

  ms = currentDate - startCount;

  currentMilliseconds = currentDate - buffDate;
  if(currentMilliseconds < 1000) {
    if(currentMilliseconds < 10) {
      currentMilliseconds = "00" + currentMilliseconds;
    }
    if(currentMilliseconds >= 10 && currentMilliseconds < 100) {
      currentMilliseconds = "0" + currentMilliseconds;
    }

    milliseconds.innerHTML = currentMilliseconds;
  }else {
    buffDate = currentDate;
    milliseconds.innerHTML = "000";
  }

  var seconds = Math.floor(ms / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);

  if(seconds >= 60) seconds -= (minutes * 60);
  if(minutes >= 60) minutes -= (hours * 60);

  if(seconds < 10) seconds = "0" + seconds;
  if(minutes < 10) minutes = "0" + minutes;
  if(hours < 10) hours = "0" + hours;

  timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":";

};


// function which stops the timer
function dateConsoleStop() {
  if (timerId) {
    window.clearTimeout(timerId);
    timer.innerHTML = "00:00:00:";
    milliseconds.innerHTML = "000";
    startButton.innerHTML = 'Start';
    startFlag = true;
    ms = 0;
    buffDate = 0;
    startCount = 0;
  }
};



/*=====================================WATCH=======================================*/
//function for a clock
var watchID = setInterval(watch, 1000);
function watch(){
  var newDate = new Date();
  hoursWatch.innerHTML = newDate.getHours();
  if (newDate.getMinutes() < 10) {
    minutesWatch.innerHTML = '0' + newDate.getMinutes();
  } else {minutesWatch.innerHTML = newDate.getMinutes()};
  if (newDate.getSeconds() < 10) {
    secondsWatch.innerHTML = '0' + newDate.getSeconds();
  } else {secondsWatch.innerHTML = newDate.getSeconds()}

  //insert two separate points:
  var colon = document.createElement('span'); //"colon" is a variable for ":"
  colon.className = "secondsColon";
  colon.id = "secondsColon";
  colon.innerHTML = " :";
  // hoursWatch.appendChild(colon);
  hoursWatch.insertBefore(colon, hoursWatch.children[0]);
  var colon2 = colon.cloneNode(true); //clone the "colon" variable...
  minutesWatch.insertBefore(colon2, minutesWatch.children[0]); // ...and at once inserting directly after "minutesWatch"
  if (+secondsWatch.innerHTML % 2 === 1) {
    // minutesWatch.innerHTML = ':' + minutesWatch.innerHTML + ':' ;
    colon.style.color = "transparent";
    colon2.style.color = "transparent";
  } //if
}; //watch

// function for displaying press' types & coordinates in console
startButton.onclick = function(pressOnButton) {
  console.log(pressOnButton.type + " на " + pressOnButton.currentTarget);
  console.log(pressOnButton.clientX + " : " + pressOnButton.clientY);
};
