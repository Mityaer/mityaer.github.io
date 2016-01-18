function dateConsoleInput() {
  if (startFlag === true) {            //START
    timerId = window.setInterval(startDate, 1000);
    function startDate() {
      console.log(Date());
    };
    startButton.innerHTML = 'Pause';
    startFlag = false;
  } else {                                            // PAUSE
    window.clearTimeout(timerId);
    startButton.innerHTML = 'Start';
    startFlag = true;
  }
};

function dateConsoleStop() {console.log('stop');
window.clearTimeout(timerId);
};

var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');
var startFlag = true;

startButton.addEventListener('click', dateConsoleInput);
resetButton.addEventListener('click', dateConsoleStop);
