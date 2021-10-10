'use strict';

const inputField = document.getElementById('input-field');

var main = function (input) {
  var myOutputValue = input;
  return myOutputValue;
};

var button = document.querySelector('#submit-button');
button.addEventListener('click', function () {
  // Set result to input value
  var input = document.querySelector('#input-field');
  var result = main(input.value);

  // Display result in output element
  var output = document.querySelector('#output-div');

  output.textContent = result;

  // Reset input value
  input.value = '';
});

// add 'enter' function to input-field
inputField.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('submit-button').click();
  }
});

// random number generator
const randomNumberGen = function () {
  return Math.trunc(Math.random() * 3);
};

// computer's selection
const computerSelect = function () {
  let randomNumber = randomNumberGen();
  switch (randomNumber) {
    case 0:
      return 'scissors ✂';
      break;
    case 1:
      return 'paper 🧻';
      break;
    case 2:
      return 'stone 🥌';
      break;
  }
};
// console.log(computerSelect());

// get player choice

// game code
