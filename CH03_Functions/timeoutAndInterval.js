// {## setTimeOut and setInterval}

// setTimeOut -> Run function "once" after "interval" of time

//setInterval -> Run function repeatedly, Starting after the interval of time, than repeatating.....

// setTimeOut

// setTimeOut(func|code, delay, arg1,arg2)

function greeting() {
  console.log("welcome to our community");
}

// setTimeout(greeting, 5000); // 5000ms = 5 sec

setInterval(greeting, 2000); //repeteadely run on an interval of delay seconds {Run Infinite times}
