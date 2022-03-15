// import functions and grab DOM elements
const inputContainerEl = document.querySelector('#input-container');
const questionInputEl = document.querySelector('#question-input');
const optionOneEl = document.querySelector('#option-1');
const optionTwoEl = document.querySelector('#option-2');
const submitButton = document.querySelector('#display-button');

const currentDisplayEl = document.querySelector('#current-display');
const option1IncrementButton = document.querySelector('option-1-increment');
const option1DecrementButton = document.querySelector('option-1-decrement');
const option2IncrementButton = document.querySelector('option-2-increment');
const option2DecrementButton = document.querySelector('option-2-decrement');

const pastDisplayEl = document.querySelector('#past-display-container');

// let state
let value1 = '';
let value2 = '';
let count1 = 0;
let count2 = 0;

let voteArr = [];
// set event listeners 

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
