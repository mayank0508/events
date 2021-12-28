const button = document.querySelector('button');
const div = document.querySelector('div');
//const button = document.querySelectorAll('button');
// button.onclick = function() {

// } // this is one way to handle click events

//const clickButton = (event) => {
//event.target.disabled = true; // this property is used to make sure that the same button is not clicked more than one time
//console.log(event);
//};

// button.onclick = clickButton;

// button.addEventListener('click', clickButton);

// //button.forEach(button => {
//   button.addEventListener('click', clickButton);
// })

// setTimeout(() => {  // this command is used to time out the particular elemtn after a while
//   button.removeEventListener('click', clickButton);
// }, 2000);

// button.forEach(button => { // this is a type of event handler which is triggered when you hover over a button
//   button.addEventListener('mouseenter', clickButton);
// })

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

div.addEventListener('click', event => {
  console.log('DIV');
  console.log(event);
}); //true this command will help you to run the capture command first and then the the bubble method

button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('BUTTON');
  console.log(event);
});

const listItem = document.querySelectorAll('li');

listItem.forEach(item => {
  item.addEventListener('click', event => {
    event.target.classList.toggle('highlight');
  });
});
