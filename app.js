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
const archiveButton = document.querySelector('archive-button');

const pastDisplayEl = document.querySelector('#past-display-container');

// let state
let value1 = '';
let value2 = '';
let count1 = 0;
let count2 = 0;

let voteArr = [];
// set event listeners 
submitButton.addEventListener('click' () => {
//display current options and question
});

option1IncrementButton.addEventListener('click' () {
//increment count1
// display new value in display area
});

option1DecrementButton.addEventListener('click', () => {
//decrement count1 
//display new value in display 
});

option2IncrementButton.addEventListener('click' () {
//increment count 2
// display new value in display
});

option2DecrementButton.addEventListener('click', () => {
//decrement count 2
//display new value in display
});

archiveButton.addEventListener('click' () => {
//display current game in past game display 
//clear the current game info
});
  // get user input
  function displayCurrentVote(){

  }


  // use user input to update state 
  // update DOM to reflect the new state
