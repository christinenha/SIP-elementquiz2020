//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var fireScore = 0;
var earthScore = 0;
var waterScore = 0;
var airScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
//variables for answer choices for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//variables for answer choices for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//variables for answer choices for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//variables for answer choices for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//variables for answer choices for question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//display result
var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", water);
q1a2.addEventListener("click", earth);
q1a3.addEventListener("click", fire);
q1a4.addEventListener("click", air);

q2a1.addEventListener("click", fire);
q2a2.addEventListener("click", water);
q2a3.addEventListener("click", earth);
q2a4.addEventListener("click", air);

q3a1.addEventListener("click", water);
q3a2.addEventListener("click", fire);
q3a3.addEventListener("click", air);
q3a4.addEventListener("click", earth);

q4a1.addEventListener("click", earth);
q4a2.addEventListener("click", air);
q4a3.addEventListener("click", fire);
q4a4.addEventListener("click", water);

q5a1.addEventListener("click", air);
q5a2.addEventListener("click", earth);
q5a3.addEventListener("click", water);
q5a4.addEventListener("click", fire);

//#TODO: Define quiz functions here
function fire() {
  fireScore += 1;
  questionCount += 1;
  //alert("One point to fire!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function water() {
  waterScore += 1;
  questionCount += 1;
  //alert("One point to water!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function air() {
  airScore += 1;
  questionCount += 1;
  //alert("One point to air!");
  if (questionCount >= 5) {
    updateResult();
  }
}

function earth() {
  earthScore += 1;
  questionCount += 1;
  //alert("One point to earth!");
  if (questionCount >= 5) {
    updateResult();
  }
}

//to score values DEBUG
function updateResult() {
  console.log(fireScore);
  console.log(waterScore);
  console.log(airScore);
  console.log(earthScore);
  
  //function result
  if (fireScore >= 2) {
    result.innerHTML = "Fire!";
  } else if (waterScore >= 4) {
    result.innerHTML = "Water!";
  } else if (airScore >= 3) {
    result.innerHTML = "Air!";
  } else if (earthScore >= 1) {
    result.innerHTML = "Earth!";
  } else {
    result.innerHTML = "ERROR! Try again!";
  }
}

//disable buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
}
